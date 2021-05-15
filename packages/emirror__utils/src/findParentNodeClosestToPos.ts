import { ResolvedPos, Node as PMNode } from '@emirror/pm/model';

export function findParentNodeClosestToPos(
  $pos: ResolvedPos,
  predicate: (node: PMNode) => boolean
): { pos: number; start: number; depth: number; node: PMNode } | undefined {
  for (let i = $pos.depth; i > 0; i -= 1) {
    const node = $pos.node(i);

    if (predicate(node)) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node,
      };
    }
  }
}
