import { EditorView } from '@emirror/pm/view';
import { Plugin } from '@emirror/pm/state';
import { Node as PMNode, Slice, Fragment } from '@emirror/pm/model';
import { ImageOptions, FileOrURL } from './../types';

/**
 * Process:
 *
 * Detected the image node, use placeholder to hold this space,
 * upload image during this time. After completed, replace placeholder
 * by image.
 */

interface ImageUploaderPluginHandlerOptions extends ImageOptions {
  /**
   * The name of plugin.
   */
  name: string;
}

class ImageUploaderPluginHandler {
  public view!: EditorView;

  constructor(public opts: ImageUploaderPluginHandlerOptions) {}

  /**
   * Upload view.
   */
  public setView(view: EditorView): this {
    this.view = view;
    return this;
  }

  public async uploadImageForID(fileOrURL: FileOrURL, id: string) {
    /**
     * Traverse document to get all position of image.
     *
     * @returns All node which is image and it's position
     */
    const getImagePosition = () => {
      const positions: Array<{ node: PMNode; pos: number }> = [];
      this.view.state.doc.descendants((node, pos) => {
        if (
          node.type.name === this.opts.name &&
          node.attrs.uploadID &&
          node.attrs.uploadID === id
        ) {
          positions.push({ node, pos });
        }
      });
      return positions;
    };

    /**
     * The result after upload.
     */
    const { width, height, url } = await this.opts.upload(
      fileOrURL,
      this.view,
    );
    const imageNodes = getImagePosition();
    if (imageNodes.length === 0) {
      return;
    }

    let tr = this.view.state.tr.setMeta('addToHistory', false);

    imageNodes.forEach(({ node, pos }) => {
      tr = tr.setNodeMarkup(pos, undefined, {
        ...node.attrs,
        width,
        height,
        src: url,
      });
    });

    this.view.dispatch(tr);
  }

  /**
   * Create Image Node
   */
  public createImageNode(attrs?: any): PMNode {
    return this.view.state.schema.nodes[this.opts.name].create({
      ...attrs,
      src: this.opts.placeHolderImageSrc,
      uploadID: this.opts.genID(),
    });
  }

  public uploadImage(fileOrURL: FileOrURL, at: number) {
    const tr = this.view.state.tr;
    if (!tr.selection.empty) {
      tr.deleteSelection();
    }
    // create Image node
    const node = this.createImageNode();
    // insert Image node
    this.view.dispatch(tr.replaceWith(at, at, node));
    // upload Image node
    this.uploadImageForID(fileOrURL, node.attrs.uploadID);
  }

  public uploadImageFiles(files: ArrayLike<File>, at: number) {
    const imageFiles = Array.from(files).filter(file =>
      this.opts.types.includes(file.type),
    );
    imageFiles.forEach((image, i) => {
      this.uploadImage(image, at + i);
    });
  }

  // ----------

  public handlePaste(event: ClipboardEvent) {
    const items = Array.from(event.clipboardData?.items || []);

    if (items.some(v => v.type === 'text/html')) {
      return false;
    }
    const image = items.find(item => this.opts.types.includes(item.type));
    if (image) {
      this.uploadImage(image.getAsFile(), this.view.state.selection.from);
      return true;
    }
    return false;
  }

  public transformPasted(slice: Slice): Slice {
    const imageNodes: Array<{ url: string; id: string }> = [];
    const children: PMNode[] = [];

    slice.content.forEach(child => {
      let newChild = child;
      if (child.type.name === this.opts.name) {
        newChild = this.createImageNode(child.attrs);
        imageNodes.push({
          id: newChild.attrs.uploadID,
          url: child.attrs.src,
        });
      } else {
        child.descendants((node, pos) => {
          if (node.type.name === this.opts.name) {
            const imageNode = this.createImageNode(node.attrs);
            newChild = newChild.replace(
              pos,
              pos + 1,
              new Slice(Fragment.from(imageNode), 0, 0),
            );
            imageNodes.push({
              id: imageNode.attrs.uploadID,
              url: node.attrs.src,
            });
          }
        });
      }
      children.push(newChild);
    });
    imageNodes.forEach(({ url, id }) => this.uploadImageForID(url, id));
    return new Slice(
      Fragment.fromArray(children),
      slice.openStart,
      slice.openEnd,
    );
  }

  public handleDrop(event: DragEvent): boolean {
    if (!event.dataTransfer?.files.length) {
      return false;
    }
    const coordinates = this.view.posAtCoords({
      left: event.clientX,
      top: event.clientY,
    });
    if (!coordinates) {
      return false;
    }
    this.uploadImageFiles(event.dataTransfer.files, coordinates.pos);
    return true;
  }
}

export default function (opts: ImageUploaderPluginHandlerOptions) {
  const handler = new ImageUploaderPluginHandler(opts);
  return new Plugin({
    props: {
      handleDOMEvents: {
        keydown(view) {
          return !handler.setView(view);
        },
        drop(view) {
          return !handler.setView(view);
        },
        focus(view) {
          return !handler.setView(view);
        },
      },
      handlePaste(view, event) {
        return handler.setView(view).handlePaste(event);
      },
      transformPasted(slice) {
        return handler.transformPasted(slice);
      },
      handleDrop(view, event) {
        return handler.setView(view).handleDrop(event as DragEvent);
      },
    },
  });
}
