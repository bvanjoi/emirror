import { Node as PMNode } from '@emirror/pm/model';
import { Command } from '@emirror/pm/commands';
import { insertNodeAt } from './insertNodeAt';

export function insertNode(node: PMNode): Command {
  return (state, dispatch, view) =>
    insertNodeAt(state.selection, node)(state, dispatch, view);
}
