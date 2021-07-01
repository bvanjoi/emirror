import { GlobalAttrs } from '@emirror/core-structure';
import { Mark, Node as PMNode } from '@emirror/pm/model';
import { mergeAttrs } from './mergeAttrs';

export function mergeToDOMAttrs(
  oldAttrs: Record<string, any>,
  nodeOrMark: Mark | PMNode,
  globalAttrs: GlobalAttrs,
): Record<string, any> {
  const newAttrsArr = globalAttrs
    .map(item => item.toDOM?.(nodeOrMark.attrs))
    .filter(attr => attr);

  return mergeAttrs(oldAttrs, newAttrsArr);
}
