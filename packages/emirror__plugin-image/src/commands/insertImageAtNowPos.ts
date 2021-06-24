import { Command } from '@emirror/pm/commands';
import { NodeType } from '@emirror/pm/model';
import { getNodeType, insertNode } from '@emirror/utils';

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
