import { Node } from '@emirror/core-structure';
import { PluginKey, PluginSpec } from '@emirror/pm/state';
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

  createPluginSpec(): PluginSpec {
    return {
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
    };
  }
}

export default LatexBasic;
