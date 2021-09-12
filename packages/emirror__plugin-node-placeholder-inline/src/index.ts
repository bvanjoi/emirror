import { NodeSpec } from '@emirror/pm/model';
import NodePlaceholder, {
  createInlineNodePlaceholderNodeView,
  insertNodePlaceholder,
} from '@emirror/plugin-node-placeholder';
import { PluginSpec } from '@emirror/pm/state';

class NodePlaceholderInline extends NodePlaceholder {
  get name() {
    return 'nodePlaceholderInline' as const;
  }

  get commands() {
    return {
      insertInlineNodePlaceholder: () => insertNodePlaceholder(this.name),
    };
  }

  createNodeSpec(): NodeSpec {
    return {
      group: 'inline',
      inline: true,
      parseDOM: [
        {
          tag: 'span.emirror-node-placeholder-inline',
        },
      ],
      toDOM: () => ['span', { class: 'emirror-node-placeholder-inline' }],
    };
  }

  createPluginSpec(): PluginSpec {
    return {
      key: this.nodePlaceholderPluginKey,
      props: {
        nodeViews: {
          [this.name]: createInlineNodePlaceholderNodeView(
            this.nodePlaceholderPluginKey,
          ),
        },
      },
    };
  }
}

export default NodePlaceholderInline;
