import { Command } from '@emirror/pm/commands';
import { NodeType } from '@emirror/pm/model';
import { insertNode } from '@emirror/utils';
import { getNodeType } from '@emirror/core-helpers';

/**
 *
 * @param url the url of image
 */
export function insertImageAtNowPos(
  nodeNameOrType: string | NodeType,
  url: string,
): Command {
  return (state, dispatch) => {
    const nodeType = getNodeType(nodeNameOrType, state.schema);
    const imageNode = nodeType.create({
      src: url,
    });
    return insertNode(imageNode)(state, dispatch);
  };
}
