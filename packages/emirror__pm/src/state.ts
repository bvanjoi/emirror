import { Schema } from 'prosemirror-model';
import * as PMState from 'prosemirror-state';

/**
 * Extends the pluginKey of Prosemirror,
 * so that we can get the name in construct.
 */
class PluginKey<
  T = any,
  S extends Schema = any
> extends PMState.PluginKey<T, S> {
  readonly name: string;
  constructor(name?: string) {
    super(name);
    this.name = name;
  }
}

export * from 'prosemirror-state';
export { PluginKey };
