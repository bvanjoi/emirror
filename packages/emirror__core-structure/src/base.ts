import { Keymap, Command } from '@emirror/pm/commands';
import { PluginSpec, Plugin } from '@emirror/pm/state';

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
   * Create PM Plugin spec.
   */
  createPluginSpec(): PluginSpec {
    return null;
  }

  /**
   * Add PM Plugin.
   */
  addPlugin(): Plugin[] {
    return [];
  }

  /**
   * Commands for this exPlugin
   */
  get commands(): Record<string, (...args: any[]) => Command> {
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
