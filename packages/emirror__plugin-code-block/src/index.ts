import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { Plugin, PluginKey } from '@emirror/pm/state';
import { keymap } from '@emirror/pm/keymap';

class CodeBlock extends Node {
  get name() {
    return 'codeBlock' as const;
  }

  get schema(): NodeSpec {
    return {
      attrs: {
        language: {
          default: '',
        },
      },
      content: 'text*',
      marks: '',
      group: 'block',
      code: true,
      defining: true,
      parseDOM: [
        {
          tag: `pre.emirror-${this.name}__nodeview-dom`,
          preserveWhitespace: 'full',
          getAttrs: (node) => ({
            language: (<Element>node)?.getAttribute('data-language') || '',
          }),
        },
        {
          tag: `pre.emirror-code-pre`,
          preserveWhitespace: 'full',
          getAttrs: (node) => ({
            language: (<Element>node)?.getAttribute('data-language') || '',
          }),
        },
      ],
      toDOM: (node) => [
        'pre',
        {
          class: 'emirror-code-pre',
          'data-language': node.attrs.language,
        },
        ['code', { class: 'emirror-code-block' }, 0],
      ],
    };
  }

  get plugins() {
    return [
      new Plugin({
        key: new PluginKey(this.name),
        props: {
          // nodeViews: {
          //   [this.name]: (node, view, getPos: () => number) =>
          //     new CodeBlockView({
          //       node,
          //       view,
          //       getPos,
          //       options: { language: 'javascript' },
          //     }),
          // },
        },
      }),
    ];
  }
}

export default CodeBlock;
