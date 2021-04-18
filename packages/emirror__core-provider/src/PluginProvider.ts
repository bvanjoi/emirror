import { EventEmitter } from '@emirror/core-emitter';
import { PluginKey } from '@emirror/pm/state';

/**
 * The data for plugin state.
 */
interface PluginState {
  [key: string]: any;
}

/**
 * Provide the bridge between Prosemirror plugin to EMirror plugin.
 */
export class PluginsProvider {
  emitter = new EventEmitter();

  subscribe(pluginKey: PluginKey, cb: (data: any) => void) {
    this.emitter.on(pluginKey.name, cb);
  }

  unsubscribe(pluginKey: PluginKey, cb: (data: any) => void) {
    this.emitter.off(pluginKey.name, cb);
  }

  publish(pluginKey: PluginKey, nextPluginState: PluginState) {
    this.emitter.emit(pluginKey.name, nextPluginState);
  }
}
