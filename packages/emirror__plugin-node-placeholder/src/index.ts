import { Node } from '@emirror/core-structure';
import { PluginKey } from '@emirror/pm/state';

class NodePlaceholderBasic extends Node {
  // 注意，该 pluginKey 主要用于继承
  nodePlaceholderPluginKey = new PluginKey(this.name);
  get name() {
    return 'nodePlaceholderBasic';
  }
}

export default NodePlaceholderBasic;
export * from './nodeView';
export * from './commands';
