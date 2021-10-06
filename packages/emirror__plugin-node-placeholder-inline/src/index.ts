import { NodeSpec, Node as PMNode } from '@emirror/pm/model';
import NodePlaceholder, {
  createInlineNodePlaceholderNodeView,
  createPluginState,
  insertNodePlaceholder,
  removeNodePlaceholder,
} from '@emirror/plugin-node-placeholder';
import { PluginSpec } from '@emirror/pm/state';
import { DecorationSet } from '@emirror/pm/view';

class NodePlaceholderInline extends NodePlaceholder {
  get name() {
    return 'nodePlaceholderInline' as const;
  }

  get commands() {
    return {
      insertInlineNodePlaceholder: (id: string) =>
        insertNodePlaceholder(
          id,
          this.nodePlaceholderPluginKey,
          this.name,
        ),
      removeInlineNodePlaceholder: (node: PMNode, id: string) =>
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

  createPluginSpec(): PluginSpec<DecorationSet> {
    return {
      key: this.nodePlaceholderPluginKey,
      state: createPluginState(),
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
