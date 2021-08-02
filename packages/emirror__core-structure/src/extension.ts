import { Base } from './base';
import { GlobalAttrs, PluginType } from './types';

/**
 * The integration for some extension.
 *
 * For example: history, menu and so on.
 */
export class Extension extends Base {
  get type(): PluginType {
    return 'extension';
  }

  addGlobalAttrs = (): GlobalAttrs => null;
}
