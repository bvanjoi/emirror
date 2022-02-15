import * as PM from '@emirror/pm';

export function isRegularCursor(selection: PM.State.Selection): boolean {
  return selection.head === selection.anchor;
}

export function isThisLineIsEmpty(anchor: PM.Model.ResolvedPos): boolean {
  const node = anchor.node(1);
  return node.content.size === 0;
}

export function isAtTheBeginning(selection: PM.State.Selection): boolean {
  if (!isRegularCursor(selection)) {
    return false;
  } else {
    const resolvedFrom = selection.$from;
    const parentOffset = resolvedFrom.parentOffset;
    return resolvedFrom.depth === 1 && parentOffset === 0;
  }
}

