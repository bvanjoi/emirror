import { DecorationSet } from '@emirror/pm/view';
import { Command } from '@emirror/pm/commands';
import { PluginKey, EditorState } from '@emirror/pm/state';
import { Node as PMNode } from '@emirror/pm/model';
import { MetaData } from '../types';

/**
 * Find node placeholder position according `id`.
 */
function findNodePlaceholder(
  state: EditorState,
  pluginKey: PluginKey<DecorationSet>,
  id: string,
): number | null {
  const decos = pluginKey.getState(state);
  const found = decos.find(null, null, spec => spec.id === id);
  const pos = found.length ? found[0].from : null;
  if (!pos) {
    console.warn(
      `Can't found ${id} node placeholder, may be it had been deleted.`,
    );
    return null;
  } else if (
    state.doc.resolve(pos).nodeAfter?.type.name.includes('nodePlaceholder')
  ) {
    return pos;
  }
  throw Error(`pos: ${pos} not node placeholder.`);
}

/**
 * Remove node placeholder.
 */
export default function (
  node: PMNode,
  id: string,
  pluginKey: PluginKey<DecorationSet>,
  name: 'nodePlaceholderInline' | 'nodePlaceholderBlock',
): Command {
  return (state, dispatch) => {
    if (!dispatch) {
      return false;
    }
    const pos = findNodePlaceholder(state, pluginKey, id);
    if (!pos) {
      return false;
    }
    let { tr } = state;
    dispatch(
      tr.replaceWith(pos, pos + 1, node).setMeta(pluginKey, {
        id,
        type: 'remove',
      } as MetaData),
    );
    return true;
  };
}
