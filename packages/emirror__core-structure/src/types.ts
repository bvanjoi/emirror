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
