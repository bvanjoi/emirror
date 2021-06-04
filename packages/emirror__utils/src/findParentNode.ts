import { Node as PMNode } from '@emirror/pm/model';
import { Selection } from '@emirror/pm/state';
import { findParentNodeClosestToPos } from './findParentNodeClosestToPos';

export const findParentNode =
  (predicate: (node: PMNode) => boolean) => (selection: Selection) =>
    findParentNodeClosestToPos(selection.$from, predicate);
