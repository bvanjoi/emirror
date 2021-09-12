import { Command } from '@emirror/pm/commands';

/**
 * Insert node placeholder.
 */
export default function (
  name: 'nodePlaceholderInline' | 'nodePlaceholderBlock',
): Command {
  return (state, dispatch) => {
    if (!dispatch) {
      return false;
    }
    let { tr } = state;
    let node = state.schema.nodes[name].create();
    dispatch(tr.replaceSelectionWith(node));
    return true;
  };
}
