import { NodeSpec, Node as PMNode } from '@emirror/pm/model';
import NodePlaceholder, {
  createBlockNodePlaceholderNodeView,
  createPluginState,
  removeNodePlaceholder,
  insertNodePlaceholder,
} from '@emirror/plugin-node-placeholder';
import { PluginSpec } from '@emirror/pm/state';
import { DecorationSet } from '@emirror/pm/view';

class NodePlaceholderBlock extends NodePlaceholder {
  get name() {
    return 'nodePlaceholderBlock' as const;
  }

  get commands() {
    return {
      insertBlockNodePlaceholder: (id: string) =>
        insertNodePlaceholder(
          id,
          this.nodePlaceholderPluginKey,
          this.name,
        ),
      removeBlockNodePlaceholder: (node: PMNode, id: string) =>
        removeNodePlaceholder(
          node,
          id,
          this.nodePlaceholderPluginKey,
          this.name,
        ),
    };
  }

  createNodeSpec(): NodeSpec {
    return {
      group: 'block',
      parseDOM: [
        {
          tag: 'div.emirror-node-placeholder-block',
        },
      ],
      toDOM: () => ['div', { class: 'emirror-node-placeholder-block' }],
    };
  }

  createPluginSpec(): PluginSpec<DecorationSet> {
    return {
      key: this.nodePlaceholderPluginKey,
      state: createPluginState(),
      props: {
        nodeViews: {
          [this.name]: createBlockNodePlaceholderNodeView(
            this.nodePlaceholderPluginKey,
          ),
        },
      },
    };
  }
}

export default NodePlaceholderBlock;
