import { Extension, Node, Mark } from '@emirror/core-structure';
import { EditorState } from '@emirror/pm/state';
import { isMarkActive } from './isMarkActive';
import { isNodeActive } from './isNodeActive';

/**
 * Get the active status about plugin at now selection.
 */
export function isActive(
  state: EditorState,
  plugin: Node | Mark | Extension,
  attrs: Record<string, any> = {},
) {
  if (!state) {
    return false;
  }
  if (plugin instanceof Node) {
    return isNodeActive(state, plugin.name, attrs);
  } else if (plugin instanceof Mark) {
    return isMarkActive(state, plugin.name, attrs);
  } else {
    return (
      isNodeActive(state, null, attrs) || isMarkActive(state, null, attrs)
    );
  }
}
