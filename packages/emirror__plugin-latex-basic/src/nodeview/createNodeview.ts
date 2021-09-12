import { EditorView, NodeView, Decoration } from '@emirror/pm/view';
import { Node as PMNode } from '@emirror/pm/model';
import { PluginKey } from '@emirror/pm/state';
import { LatexPluginState } from '../types';
import LatexNodeView from './nodeview';

type Props = {
  displayMode: 'inline' | 'block';
  pluginKey: PluginKey<LatexPluginState>;
};

function createLatexNodeView(props: Props) {
  const { displayMode, pluginKey } = props;
  return (
    node: PMNode,
    view: EditorView,
    getPos: () => number,
    decorations: Decoration[],
  ): NodeView => {
    const pluginState = pluginKey.getState(view.state);
    if (!pluginState) {
      throw Error('latex plugin is empty');
    }
    const { activeNodeViews } = pluginState;
    const nodeView = new LatexNodeView({
      node,
      view,
      getPos,
      options: {
        katexOptions: {
          displayMode: displayMode === 'block',
          macros: pluginState.macros,
        },
      },
      pluginKey,
      decorations,
    });
    activeNodeViews.push(nodeView);
    return nodeView;
  };
}

export const createLatexInlineNodeView = (
  pluginKey: PluginKey<LatexPluginState>,
) => createLatexNodeView({ displayMode: 'inline', pluginKey });

export const createLatexBlockNodeView = (
  pluginKey: PluginKey<LatexPluginState>,
) => createLatexNodeView({ displayMode: 'block', pluginKey });
