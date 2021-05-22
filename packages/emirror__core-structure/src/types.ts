import { Decoration, EditorView } from '@emirror/pm/view';
import { Node as PMNode, Schema } from '@emirror/pm/model';

/**
 * The Plugin type of emirror/core-structure
 *
 * - base: The base class for all emirror plugin.
 * - node: The integration for ProsemirrorNode.
 *      For example, paragraph is a node.
 * - mark: The integration for ProsemirrorMark.
 *      For example, bold is a mark.
 * - extension: The plugin outside the Prosemirror.
 *      For example, the article menu is a extend plugin.
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
