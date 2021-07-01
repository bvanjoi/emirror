import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { Plugin, PluginKey } from '@emirror/pm/state';
import { keymap } from '@emirror/pm/keymap';
import CodeEditorView from './code-editor-nodeview';
import { arrowHandler } from './commands';

class CodeEditor extends Node {
  get name() {
    return 'codeEditor' as const;
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
      isolating: true,
      parseDOM: [
        {
          tag: `div.emirror-code-editor`,
          preserveWhitespace: 'full',
        },
      ],
      toDOM: () => ['div', { class: 'emirror-code-editor' }, 0],
    };
  }

  get plugins() {
    return [
      new Plugin({
        key: new PluginKey(this.name),
        props: {
          nodeViews: {
            [this.name]: (node, view, getPos: () => number) =>
              new CodeEditorView({
                view,
                node,
                getPos,
                options: { language: node.attrs.language || 'javascript' },
              }),
          },
        },
      }),
      keymap({
        ArrowLeft: arrowHandler('left'),
        ArrowRight: arrowHandler('right'),
        ArrowUp: arrowHandler('up'),
        ArrowDown: arrowHandler('down'),
      }),
    ];
  }
}

export default CodeEditor;
