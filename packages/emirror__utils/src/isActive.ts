import { EditorState } from '@emirror/pm/state';
import { Node, Mark, Extension } from '@emirror/core-structure';
import { isMarkActiveType } from './isMarkActive';
import { isNodeActiveType } from './isNodeActive';

/**
 * get the active status about plugin at now selection.
 */
export const isActive = (
  state: EditorState,
  plugin: Node | Mark | Extension,
  attrs: Record<string, any> = {},
) => {
  if (!state) {
    return false;
  }
  if (plugin instanceof Node) {
    return isNodeActiveType(state, plugin.name, attrs);
  } else if (plugin instanceof Mark) {
    return isMarkActiveType(state, plugin.name, attrs);
  } else {
    return (
      isNodeActiveType(state, null, attrs) ||
      isMarkActiveType(state, null, attrs)
    );
  }
};
