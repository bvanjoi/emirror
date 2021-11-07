import { NodeViewComponentProps } from '@emirror/core-structure';
import { NodeView } from '@emirror/pm/view';
import { Props } from './types';
import './style.css';
import imgSource from '../assets/loading.gif';

type NodePlaceholderProps = Props & NodeViewComponentProps;

class NodePlaceholderNodeView implements NodeView {
  dom: HTMLElement;
  contentDOM: HTMLElement;
  constructor(public props: NodePlaceholderProps) {
    this.dom = this.createContainerDOM();
    this.contentDOM = this.createContentDOM();
    this.dom.appendChild(this.contentDOM);
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
    imageDOM.src = imgSource;
    imageDOM.classList.add('emirror-node-placeholder-image');
    return imageDOM;
  }
}

export default NodePlaceholderNodeView;
