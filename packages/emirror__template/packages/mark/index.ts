import { Mark, GlobalAttrs } from '@emirror/core-structure';
import { MarkSpec } from '@emirror/pm/model';
import {
  mergeParseDOMGetAttrs,
  mergeSpecAttrs,
  mergeToDOMAttrs,
} from '@emirror/utils';

class MarkName extends Mark {
  get name() {
    return 'markName' as const;
  }

  createMarkSpec(globalAttrs: GlobalAttrs): MarkSpec {
    return {
      attrs: mergeSpecAttrs({}, globalAttrs),
      group: 'xxxxx',
      content: 'yyyyyy',
      parseDOM: [mergeParseDOMGetAttrs({}, globalAttrs)],
      toDOM: node => ['zzzzz', mergeToDOMAttrs({}, node, globalAttrs), 0],
    };
  }
}

export default MarkName;
