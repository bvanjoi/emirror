import { Base } from './base';
import { GlobalAttrs } from './types';

/**
 * The integration for some extension.
 *
 * For example: history, menu and so on.
 */
export class Extension extends Base {
  addGlobalAttrs = (): GlobalAttrs => null;
}
