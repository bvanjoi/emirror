import { GlobalAttrs, Node } from '@emirror/core-structure';
import { NodeSpec, Node as PMNode } from '@emirror/pm/model';
import { setBlockType } from '@emirror/pm/commands';
import { textblockTypeInputRule } from '@emirror/pm/inputrules';
import {
  genID,
  mergeParseDOMGetAttrs,
  mergeSpecAttrs,
  mergeToDOMAttrs,
  toggleNode,
} from '@emirror/utils';

class Heading extends Node {
  levels = [1, 2, 3, 4, 5, 6];

  get name() {
    return 'heading' as const;
  }

  createNodeSpec = (globalAttrs: GlobalAttrs): NodeSpec => {
    const { levels } = this;
    return {
      group: 'block',
      content: 'inline*',
      defining: true,
      attrs: mergeSpecAttrs(
        {
          level: {
            default: 1,
          },
        },
        globalAttrs,
      ),

      parseDOM: levels.map(level =>
        mergeParseDOMGetAttrs(
          {
            tag: `h${level}`,
            attrs: { level },
          },
          globalAttrs,
        ),
      ),
      toDOM: (node: PMNode) => [
        `h${node.attrs.level}`,
        mergeToDOMAttrs(
          {
            id: genID(),
            class: `emirror-heading emirror-h${node.attrs.level}`,
          },
          node,
          globalAttrs,
        ),
        0,
      ],
    };
  };

  get commands() {
    return {
      toggleHeading: (level: number) =>
        toggleNode(this.name, 'paragraph', { level }),
    };
  }

  get keymap() {
    return Object.fromEntries(
      this.levels.map(level => [
        `Ctrl-Shift-${level}`,
        setBlockType(this.name, { level }),
      ]),
    );
  }

  inputRules = ({ type }) =>
    this.levels.map(level =>
      textblockTypeInputRule(
        new RegExp(`^(#{1,${level}})\\s$`),
        type,
        () => ({
          level,
        }),
      ),
    );
}

export default Heading;
