import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { PluginSpec, PluginKey } from '@emirror/pm/state';

class CodeBlock extends Node {
  get name() {
    return 'codeBlock' as const;
  }

  createNodeSpec(): NodeSpec {
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
          tag: `pre.emirror-code-pre`,
          preserveWhitespace: 'full',
          getAttrs: node => ({
            language: (<Element>node)?.getAttribute('data-language') || '',
          }),
        },
      ],
      toDOM: node => [
        'pre',
        {
          class: 'emirror-code-pre',
          'data-language': node.attrs.language,
        },
        ['code', { class: 'emirror-code-block' }, 0],
      ],
    };
  }

  createPluginSpec(): PluginSpec {
    return {
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
    };
  }
}

export default CodeBlock;
