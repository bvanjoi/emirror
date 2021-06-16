# EMirror

[English](./README.md) | [Chinese](./README-zh_CN.md)

EMirror, which based on [ProseMirror](https://prosemirror.net/), designed to provide a free framework, out-of-the-box web editor.

## Setup

### First Editor

The Mini-Editor:

```js
import React from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';

const Editor = () => {
  return (
    <EMirror
      topNode={new Doc()}
      plugins={[new Paragraph(), new Text(), new History()]}
    />
  );
};

export default Editor;
```

## Plugin

In EMirror, all features are based on plugin. For example, you can create plugin from `@emirror/core-structure`:

```js
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
        { id: genID()},
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
```

More plugins: [emirror.dev](https://emirror.dev/).

## Concat

- submit a [issue](https://github.com/bvanjoi/emirror/issues/new).

## License

[MIT](./LICENSE.md).
