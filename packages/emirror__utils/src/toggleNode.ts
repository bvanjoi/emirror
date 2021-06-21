import { Command, setBlockType } from '@emirror/pm/commands';
import { NodeType } from '@emirror/pm/model';
import { getNodeType } from './getNodeType';
import { isNodeActiveType } from './isNodeActive';

/**
 * if active, set this block to normal type,
 * otherwise, set this block to active type
 *
 * @param activeNodeNameOrType **Active** node name or type
 * @param normalNoeNameOrType **Normal** node name or type
 * @param activeNodeAttrs Attrs of **active** node
 * @param normalNodeAttrs Attrs of **normal** node
 */
export function toggleNode(
  activeNodeNameOrType: string | NodeType,
  normalNoeNameOrType: string | NodeType,
  activeNodeAttrs: { [key: string]: any } = {},
  normalNodeAttrs: { [key: string]: any } = {},
): Command {
  return (state, dispatch) => {
    const activeNodeType = getNodeType(
      activeNodeNameOrType,
      state.schema,
    );
    const normalNodeType = getNodeType(
      normalNoeNameOrType,
      state.schema,
    );

    if (isNodeActiveType(state, activeNodeType, activeNodeAttrs)) {
      return setBlockType(normalNodeType, normalNodeAttrs)(
        state,
        dispatch,
      );
    } else {
      return setBlockType(activeNodeType, activeNodeAttrs)(
        state,
        dispatch,
      );
    }
  };
}
