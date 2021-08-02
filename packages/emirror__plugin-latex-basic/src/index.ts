import { Plugin, PluginKey } from '@emirror/pm/state';
import { Node } from '@emirror/core-structure';
import { LatexPluginState } from './types';
import {
  createLatexBlockNodeView,
  createLatexInlineNodeView,
} from './nodeview';
import './style.css';
import 'katex/dist/katex.min.css';

class LatexBasic extends Node {
  latexPluginKey = new PluginKey<LatexPluginState>('latex');

  get name() {
    return 'latex';
  }

  get plugin() {
    return new Plugin({
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
          latexInline: createLatexInlineNodeView(this.latexPluginKey),
          latexBlock: createLatexBlockNodeView(this.latexPluginKey),
        },
      },
    });
  }
}

export default LatexBasic;
