import { NodeViewComponentProps } from '@emirror/core-structure';
import { NodeView } from '@emirror/pm/view';
import { Props } from './types';
import './style.css';

type NodePlaceholderProps = Props & NodeViewComponentProps;

class NodePlaceholderNodeView implements NodeView {
  dom: HTMLElement;

  constructor(public props: NodePlaceholderProps) {
    this.dom = this.createContainerDOM();
    const imageDOM = this.createContentDOM();
    this.dom.appendChild(imageDOM);
  }

  createContainerDOM() {
    const containerDOM: HTMLElement =
      this.props.displayMode === 'inline'
        ? document.createElement('span')
        : document.createElement('div');
    containerDOM.classList.add(
      `emirror-${this.props.node.type.name}__nodeview-dom`,
    );
    containerDOM.classList.add(`emirror-node-placeholder`);
    if (this.props.displayMode === 'inline') {
      containerDOM.classList.add(`emirror-node-placeholder-inline`);
    } else {
      containerDOM.classList.add(`emirror-node-placeholder-block`);
    }

    return containerDOM;
  }

  createContentDOM() {
    const imageDOM = document.createElement('img');
    imageDOM.classList.add('emirror-node-placeholder-image');
    return imageDOM;
  }
}

export default NodePlaceholderNodeView;
