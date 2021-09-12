import { Node } from '@emirror/core-structure';
import { PluginKey } from '@emirror/pm/state';
import { LatexPluginState } from './types';
import './style.css';
import 'katex/dist/katex.min.css';

class LatexBasic extends Node {
  // 注意，该 pluginKey 主要用于继承
  latexPluginKey = new PluginKey<LatexPluginState>(this.name);
  get name() {
    return 'latex';
  }
}

export default LatexBasic;
export * from './nodeview';
export * from './plugin';
