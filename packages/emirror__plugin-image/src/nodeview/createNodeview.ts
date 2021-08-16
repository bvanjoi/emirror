import { EditorView } from '@emirror/pm/view';
import { Node as PMNode } from '@emirror/pm/model';
import ImageNodeView from './nodeview';

export function createImageNodeView() {
  return (node: PMNode, view: EditorView, getPos: () => number) => {
    const nodeView = new ImageNodeView({ node, view, getPos });

    return nodeView;
  };
}
