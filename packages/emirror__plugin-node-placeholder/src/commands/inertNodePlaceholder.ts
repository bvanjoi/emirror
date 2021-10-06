import { Command } from '@emirror/pm/commands';
import { PluginKey } from '@emirror/pm/state';
import { MetaData } from '../types';
import { DecorationSet } from '@emirror/pm/view';

/**
 * Insert node placeholder.
 */
export default function (
  id: string,
  pluginKey: PluginKey<DecorationSet>,
  name: 'nodePlaceholderInline' | 'nodePlaceholderBlock',
): Command {
  return (state, dispatch) => {
    if (!dispatch) {
      return false;
    }
    const { tr, schema } = state;
    let node = schema.nodes[name].create();
    dispatch(
      tr
        .setMeta(pluginKey, {
          id,
          type: 'add',
          pos:
            name === 'nodePlaceholderBlock'
              ? tr.selection.from + 1
              : tr.selection.from,
        } as MetaData)
        .insert(tr.selection.from, node)
    );
    return true;
  };
}
