import { EditorState } from '@emirror/pm/state';
import { Node, Mark } from '@emirror/core-structure';
import { isMarkActiveType } from './isMarkActive';
import { isNodeActiveType } from './isNodeActive';

/**
 * get the active status about plugin at now selection.
 */
export const isActive = (
  state: EditorState,
  plugin: Node | Mark,
  attrs: Record<string, any> = {},
) => {
  if (!state) {
    return false;
  }
  if (plugin.type === 'node') {
    return isNodeActiveType(state, plugin.name, attrs);
  } else if (plugin.type === 'mark') {
    return isMarkActiveType(state, plugin.name, attrs);
  }
  console.error('the plugin type must be node or mark');
};
