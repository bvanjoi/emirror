import { Keymap } from '@emirror/pm/commands';
import { Plugin as PMPlugin } from '@emirror/pm/state';
import { PluginType } from './types';

/**
 * The base integration for ProseMirror.
 */
export class Base {
  /**
   * The name of this emirror plugin.
   * @returns a string represent the key of this plugin.
   */
  get name(): string {
    throw Error('The name of plugin is undefined');
  }

  /**
   * The type of this Plugin
   */
  get type(): PluginType {
    return 'base';
  }

  /**
   * The PMPlugin of this emPlugin.
   */
  get plugin(): PMPlugin {
    return null;
  }

  /**
   * Commands for this plugin
   */
  get commands(): Record<string, Function> {
    return {};
  }

  /**
   * When hit some keys it will exec corresponding command.
   * @returns Some key map
   */
  get keymap(): Keymap {
    return {};
  }
}
