import { Decoration, EditorView } from '@emirror/pm/view';
import { Node as PMNode, Schema } from '@emirror/pm/model';

/**
 * The Plugin type of emirror/core-structure
 *
 * - base: The base class for all emirror plugin.
 * - node: The integration for ProseMirrorNode.
 *      For example, paragraph is a node.
 * - mark: The integration for ProseMirrorMark.
 *      For example, bold is a mark.
 * - extension: it not contain schema, and it will provide some features, such as:
 *    - globalAttrs, it will pass all plugin.
 *    - only plugins, for example, history and it's keymap.
 */
export type PluginType = 'base' | 'node' | 'mark' | 'extension';

export interface NodeViewComponentProps<S extends Schema = any> {
  /**
   * The instance of ProseMirror view.
   */
  view: EditorView<S>;
  /**
   * A ProseMirror node.
   */
  node: PMNode<S>;
  /**
   * - For nodes, `getPos` is the pos of the node view in the ProseMirror document.
   * - For Marks, `getPos` is a boolean that indicates whether the mark's content is inline.
   */
  getPos: (() => number) | boolean;
  /**
   * An array of node or inline decorations that are active around the node.
   */
  decorations: Decoration[];
}

/**
 * Which nodeSpec/markSpec will receive this attrs?
 *
 * - `all` means all em plugins. **Default**.
 * - `nodes` means only em node plugins.
 * - `marks` means only em mark plugins.
 * - use string[] to define pointed plugins.
 */
export type GlobalAttrScope = 'all' | 'nodes' | 'marks' | string[];

/**
 * The global attrs which passed to EMirror
 * createNodeSpec and createMarkSpec's first argument.
 */
export type ApplySchemaAttrs = {
  /**
   * The attr name.
   */
  name: string;
  /**
   * The default value of this attrs, to use when no explicit
   * value is provided. Attributes that no default must be
   * provided whenever a node or mark of a type that has them is
   * created.
   */
  default?: any;
  /**
   * extract attrs from DOM. And it will be applied `parseDOM[].getAttrs`.
   */
  parseDOM?: (domNode: Node | string) => Record<string, any>;
  /**
   * The attrs will pass to toDOM.attrs.
   */
  toDOM?: (attrs: Record<string, any>) => Record<string, any> | null;
};

/**
 * The global attrs options.
 */
export type GlobalAttrs = ({
  scope?: GlobalAttrScope;
} & ApplySchemaAttrs)[];
