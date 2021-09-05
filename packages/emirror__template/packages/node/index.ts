import { Node, GlobalAttrs } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import {
  mergeParseDOMGetAttrs,
  mergeSpecAttrs,
  mergeToDOMAttrs,
} from '@emirror/utils';

class NodeName extends Node {
  get name() {
    return 'nodeName' as const;
  }

  createNodeSpec(globalAttrs: GlobalAttrs): NodeSpec {
    return {
      attrs: mergeSpecAttrs({}, globalAttrs),
      group: 'xxxxx',
      content: 'yyyyyy',
      parseDOM: [mergeParseDOMGetAttrs({}, globalAttrs)],
      toDOM: node => ['zzzzz', mergeToDOMAttrs({}, node, globalAttrs), 0],
    };
  }
}

export default NodeName;
