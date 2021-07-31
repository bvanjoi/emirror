# EMirror

English | [中文](./README-zh_CN.md)

EMirror, which based on [ProseMirror](https://prosemirror.net/), designed to provide a free framework, out-of-the-box web editor.

## Setup

### First Editor

The Mini-Editor:

```js
import React from 'react';
import EMirror from '@emirror/react';
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
```

More plugins: [emirror.dev](https://emirror.dev/).

## Concat

- submit a [issue](https://github.com/bvanjoi/emirror/issues/new).

## License

[MIT](./LICENSE.md).
