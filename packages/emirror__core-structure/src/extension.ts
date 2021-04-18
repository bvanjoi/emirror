import { Base } from './base';
import { PluginType } from './types';

export class Extension extends Base {
  get type(): PluginType {
    return 'extension';
  }
}
