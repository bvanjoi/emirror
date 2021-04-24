import { Mark } from '@emirror/core-structure';
import { MarkSpec, Schema } from '@emirror/pm/model';
import { toggleMark } from '@emirror/pm/commands';
import { markInputRules } from '@emirror/utils';

export class Bold extends Mark {
  get name() {
    return 'bold';
  }

  get schema(): MarkSpec {
    return {
      parseDOM: [
        { tag: 'strong' },
        {
          tag: 'b',
          getAttrs: (node: HTMLElement) =>
            node.style.fontWeight !== 'normal' && null,
        },
        {
          tag: 'font-weight',
          getAttrs: (value: string) =>
            /^(bolder)?|[5-9]\d{2,}$/.test(value) && null,
        },
      ],
      toDOM: () => ['strong', { class: 'emirror-bold' }, 0],
    };
  }

  keymap = ({ type }) => ({
    'Mod-b': toggleMark(type),
    'Mod-B': toggleMark(type),
  });

  inputRules = ({ type }) => [
    markInputRules(/(?:\*\*)([^*_]+)(?:\*\*)$/, type),
  ];
}
