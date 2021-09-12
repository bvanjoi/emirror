import { PluginKey } from '@emirror/pm/state';
import { NodeView, EditorView, Decoration } from '@emirror/pm/view';
import { Node as PMNode } from '@emirror/pm/model';
import { Props } from './types';
import NodePlaceholderNodeView from './nodeView';

function createNodePlaceholderNodeView(props: Props) {
  const { displayMode, pluginKey } = props;
  return (
    node: PMNode,
    view: EditorView,
    getPos: () => number,
    decorations: Decoration[],
  ): NodeView =>
    new NodePlaceholderNodeView({
      node,
      view,
      getPos,
      pluginKey,
      displayMode,
      decorations,
    });
}

export const createInlineNodePlaceholderNodeView = (
  pluginKey: PluginKey,
) =>
  createNodePlaceholderNodeView({
    pluginKey,
    displayMode: 'inline',
  });

export const createBlockNodePlaceholderNodeView = (pluginKey: PluginKey) =>
  createNodePlaceholderNodeView({
    pluginKey,
    displayMode: 'block',
  });
