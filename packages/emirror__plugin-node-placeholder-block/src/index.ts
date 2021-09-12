import { NodeSpec } from '@emirror/pm/model';
import NodePlaceholder, {
  createBlockNodePlaceholderNodeView,
  insertNodePlaceholder,
} from '@emirror/plugin-node-placeholder';
import { PluginSpec } from '@emirror/pm/state';

class NodePlaceholderBlock extends NodePlaceholder {
  get name() {
    return 'nodePlaceholderBlock' as const;
  }

  get commands() {
    return {
      insertBlockNodePlaceholder: () => insertNodePlaceholder(this.name),
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

  createPluginSpec(): PluginSpec {
    return {
      key: this.nodePlaceholderPluginKey,
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
