import { Node } from '@emirror/core-structure';

/**
 * Text Node, must be exists in the Schema.nodes.
 */
class Text extends Node {
  get name() {
    return 'text' as const;
  }

  createNodeSpec() {
    return {
      group: 'inline',
      // This filed is not required, because ProseMirror had
      // treated it individually: [https://github.com/ProseMirror/prosemirror-model/blob/5ff774fa853dd63ecf30e42ff487b111b3c1c5fd/src/schema.js#L80].
      // But I suggest write it down, just for clarity.
      inline: true,
    };
  }
}

export default Text;
