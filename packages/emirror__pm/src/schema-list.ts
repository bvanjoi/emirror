import { Command } from 'prosemirror-commands';
import { getNodeType } from '@emirror/core-helpers';
import { NodeType } from 'prosemirror-model';
import * as PMList from 'prosemirror-schema-list';

function splitListItem(nodeNameOrType: string | NodeType): Command {
  return (state, dispatch) => {
    const nodeType = getNodeType(nodeNameOrType, state.schema);
    return PMList.splitListItem(nodeType)(state, dispatch);
  };
}

function sinkListItem(nodeNameOrType: string | NodeType): Command {
  return (state, dispatch) => {
    const nodeType = getNodeType(nodeNameOrType, state.schema);
    return PMList.sinkListItem(nodeType)(state, dispatch);
  };
}

function liftListItem(nodeNameOrType: string | NodeType): Command {
  return (state, dispatch) => {
    const nodeType = getNodeType(nodeNameOrType, state.schema);
    return PMList.liftListItem(nodeType)(state, dispatch);
  };
}

export * from 'prosemirror-schema-list';
export { splitListItem, sinkListItem, liftListItem };
