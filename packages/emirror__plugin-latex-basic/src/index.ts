import { Plugin, PluginKey } from '@emirror/pm/state';
import { Extension } from '@emirror/core-structure';
import { LatexPluginState } from './types';
import {
  createLatexBlockNodeView,
  createLatexInlineNodeView,
} from './createLatexNodeview';
import './style.css';
import 'katex/dist/katex.min.css';

class Latex extends Extension {
  latexPluginKey = new PluginKey<LatexPluginState>('latex');

  get name() {
    return 'latex';
  }

  get plugins() {
    return [
      new Plugin({
        key: this.latexPluginKey,
        state: {
          init() {
            return {
              macros: {},
              activeNodeViews: [],
              prevCursorPos: 0,
            };
          },
          apply: (_tr, value, oldState) => ({
            ...value,
            prevCursorPos: oldState.selection.from,
          }),
        },
        props: {
          nodeViews: {
            latexInline: createLatexInlineNodeView(
              this.latexPluginKey,
            ),
            latexBlock: createLatexBlockNodeView(this.latexPluginKey),
          },
        },
      }),
    ];
  }

  get pluginsKey() {
    const { latexPluginKey } = this;
    return {
      latexPluginKey,
    };
  }
}

export default Latex;
