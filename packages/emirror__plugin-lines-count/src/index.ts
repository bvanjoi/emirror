import { Extension } from '@emirror/core-structure';
import { PluginKey } from '@emirror/pm/state';
import { DecorationSet } from '@emirror/pm/view';
import { pluginSpec } from './pluginSpec';

class LinesCount extends Extension {
  pluginKey = new PluginKey<DecorationSet>(this.name);
  get name() {
    return 'linesCount';
  }

  createPluginSpec() {
    return pluginSpec(this.pluginKey);
  }
}

export default LinesCount;
