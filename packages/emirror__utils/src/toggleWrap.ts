import { Command, lift, wrapIn } from '@emirror/pm/commands';
import { NodeType } from '@emirror/pm/model';
import { getNodeType } from './getNodeType';
import { isNodeActiveType } from './isNodeActive';

/**
 * if wrap in, wrap out this node,
 * otherwise, wrap in.
 *
 * @param nodeNameOrType the node name or type of warp in.
 * @param attrs attrs of this node
 */
export function toggleWrap(
  nodeNameOrType: string | NodeType,
  attrs: { [key: string]: any } = {},
): Command {
  return (state, dispatch) => {
    const nodeType = getNodeType(nodeNameOrType, state.schema);
    if (isNodeActiveType(state, nodeType, attrs)) {
      return lift(state, dispatch);
    } else {
      return wrapIn(nodeType, attrs)(state, dispatch);
    }
  };
}
