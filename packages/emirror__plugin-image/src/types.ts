import { EditorView } from '@emirror/pm/view';

/**
 * Upload image from file or string.
 */
export type FileOrURL = File | string;

/**
 * when image loaded, we need now some attrs:
 * - `width` and `height`: it will pass to style.
 * - `url`: image src, it maybe base64 or cdn.
 */
export type uploadImageResult = {
  width: number;
  height: number;
  url: string;
};

/**
 * The options of Image plugin
 */
export interface ImageOptions {
  /**
   * The action how upload this image.
   */
  upload(
    fileOrURL: FileOrURL,
    view: EditorView,
  ): Promise<uploadImageResult>;
  /**
   * The placeholder image source.
   */
  placeHolderImageSrc?: string;
  /**
   * The image types that you can accept.
   */
  types?: string[];
  /**
   * Generate ID
   */
  genID?: () => string;
}
