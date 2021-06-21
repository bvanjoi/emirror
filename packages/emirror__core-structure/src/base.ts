import { MarkType, NodeType } from '@emirror/pm/model';
import { Keymap } from '@emirror/pm/commands';
import { Plugin, PluginKey } from '@emirror/pm/state';
import { PluginType, NodeViewComponentProps } from './types';
import { ErrorMsg } from './constant';

/**
 * The base integration for Prosemirror.
 */
export class Base {
  /**
   * The name of this emirror plugin.
   */
  get name(): string | null {
    throw Error(ErrorMsg.INVALID_NAME);
  }

  /**
   * The type of this Plugin
   */
  get type(): PluginType {
    return 'base';
  }

  /**
   * All pluginKey for plugins
   */
  get pluginsKey(): { [name: string]: PluginKey } {
    return {};
  }

  /**
   * Provider plugins
   * @returns All plugins in Base class.
   */
  get plugins(): Plugin[] {
    return [];
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
  keymap: (options: { type?: MarkType | NodeType }) => Keymap =
    () => ({});

  /**
   * React component to provider a more complicated nodeview.
   */
  reactComponent: React.ComponentType<NodeViewComponentProps> = null;
}
