import { chainCommands, Command, exitCode } from '@emirror/pm/commands';
import { NodeType } from '@emirror/pm/model';
import { insertNode } from '@emirror/utils';
import { getNodeType } from '@emirror/core-helpers';

export function insertHardBreak(
  nodeNameOrType: string | NodeType,
): Command {
  return (state, dispatch, view) => {
    const node = getNodeType(nodeNameOrType, state.schema).create();
    return chainCommands(exitCode, insertNode(node))(
      state,
      dispatch,
      view,
    );
  };
}
