import { Command } from '@emirror/pm/commands';
import { NodeType, Schema, Node as PMNode } from '@emirror/pm/model';
import { liftListItem, wrapInList } from '@emirror/pm/schema-list';
import { findParentNode } from '@emirror/utils';
import { getNodeType } from '@emirror/core-helpers';

const isList = (node: PMNode, schema: Schema) => {
  const { type } = node;
  return (
    type === schema.nodes.bulletList ||
    type === schema.nodes.orderList ||
    type === schema.nodes.todoList
  );
};

/**
 * Toggle this paragraph to list and reverse.
 */
export const toggleList =
  (
    listTypeOrName: string | NodeType,
    itemTypeOrName: string | NodeType,
  ): Command =>
  (state, dispatch) => {
    const { schema, selection } = state;
    const listType = getNodeType(listTypeOrName, schema);
    const itemType = getNodeType(itemTypeOrName, schema);
    const { $from, $to } = selection;
    const range = $from.blockRange($to);

    if (!range) {
      return;
    }

    const parentList = findParentNode(node => isList(node, schema))(
      selection,
    );

    if (
      range.depth >= 1 &&
      parentList &&
      range.depth - parentList.depth <= 1
    ) {
      // remove list
      if (parentList.node.type === listType) {
        return liftListItem(itemType)(state, dispatch);
      }

      // change list type
      if (
        isList(parentList.node, schema) &&
        listType.validContent(parentList.node.content)
      ) {
        const { tr } = state;

        tr.setNodeMarkup(parentList.pos, listType);

        if (dispatch) {
          dispatch(tr);
        }
        return false;
      }
    }
    return wrapInList(listType)(state, dispatch);
  };
