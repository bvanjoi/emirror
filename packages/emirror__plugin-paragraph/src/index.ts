import { Node, GlobalAttrs } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { baseKeymap, setBlockType } from '@emirror/pm/commands';
import {
  mergeParseDOMGetAttrs,
  mergeSpecAttrs,
  mergeToDOMAttrs,
} from '@emirror/utils';

class Paragraph extends Node {
  get name() {
    return 'paragraph' as const;
  }

  createNodeSpec(globalAttrs: GlobalAttrs): NodeSpec {
    return {
      attrs: mergeSpecAttrs({}, globalAttrs),
      group: 'block',
      content: 'inline*',
      parseDOM: [mergeParseDOMGetAttrs({ tag: 'p' }, globalAttrs)],
      toDOM: node => [
        'p',
        mergeToDOMAttrs({ class: 'emirror-paragraph' }, node, globalAttrs),
        0,
      ],
    };
  }

  get commands() {
    return {
      setParagraph: setBlockType(this.name),
    };
  }

  get keymap() {
    return baseKeymap;
  }
}

export default Paragraph;
