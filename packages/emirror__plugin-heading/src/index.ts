import { Node } from '@emirror/core-structure';
import { NodeSpec, Node as PMNode } from '@emirror/pm/model';
import { setBlockType } from '@emirror/pm/commands';
import { textblockTypeInputRule } from '@emirror/pm/inputrules';
import { genID } from '@emirror/utils';

class Heading extends Node {
  levels = [1, 2, 3, 4, 5, 6];

  get name() {
    return 'heading' as const;
  }

  get schema(): NodeSpec {
    const { levels } = this;
    return {
      group: 'block',
      content: 'inline*',
      defining: true,
      attrs: {
        level: {
          default: 1,
        },
      },
      parseDOM: levels.map((level) => ({ tag: `h${level}`, attrs: { level } })),
      toDOM: (node: PMNode) => [
        `h${node.attrs.level}`,
        { id: genID(), class: `emirror-heading emirror-h${node.attrs.level}` },
        0,
      ],
    };
  }

  keymap = ({ type }) =>
    Object.fromEntries(
      this.levels.map((level) => [
        `Ctrl-Shift-${level}`,
        setBlockType(type, { level }),
      ]),
    );

  inputRules = ({ type }) =>
    this.levels.map((level) =>
      textblockTypeInputRule(new RegExp(`^(#{1,${level}})\\s$`), type, () => ({
        level,
      })),
    );
}

export default Heading;
