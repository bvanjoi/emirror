import { Node } from '@emirror/core-structure';
import { PluginKey } from '@emirror/pm/state';
import { DecorationSet } from '@emirror/pm/view';

class NodePlaceholder extends Node {
  // 注意，该 pluginKey 主要用于继承
  nodePlaceholderPluginKey = new PluginKey<DecorationSet>(this.name);
  get name() {
    return 'nodePlaceholderBasic';
  }
}

export default NodePlaceholder;
export * from './nodeView';
export * from './commands';
export * from './pluginSpec';
export * from './types';
