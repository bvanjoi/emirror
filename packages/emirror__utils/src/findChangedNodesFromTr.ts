import { Transaction } from '@emirror/pm/state';
import { Node as PMNode, Slice } from '@emirror/pm/model';
import { Step } from '@emirror/pm/transform';

/**
 * find all changed ProseMirror node within given transaction
 * @param tr - specified transaction
 */
export const findChangedNodesFromTr = (tr: Transaction) => {
  const nodes: PMNode[] = [];
  const steps = (tr.steps || []) as (Step & {
    from: number;
    to: number;
    slice?: Slice;
  })[];

  steps.forEach(step => {
    const { from, to, slice } = step;
    const size = slice?.content ? slice.content.size : 0;
    for (let i = from; i <= to + size; i++) {
      if (i <= tr.doc.content.size) {
        const topLevelNode = tr.doc.resolve(i).node(1);
        if (topLevelNode && !nodes.find(n => n === topLevelNode)) {
          nodes.push(topLevelNode);
        }
      }
    }
  });

  return nodes;
};
