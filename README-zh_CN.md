# EMirror

中文 | [English](./README.md)

EMirror, 旨在提供一份不受框架限制、开箱即用的富文本编辑器，其底层依赖为[ProseMirror](https://prosemirror.net/). 目前仅提供 React 接口。

## 开始

### 第一个编辑器

一个极简编辑器示例：

```js
import React from 'react';
import {
  useEmirror,
  EMirrorContext,
  EMirrorComponent,
} from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';

const Editor = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [new Paragraph(), new Text(), new History()],
  });

  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <EMirrorComponent />
      </EMirrorContext.Provider>
    )
  );
};

export default Editor;
```

## 插件

EMirror 内，所有能力均来自于插件机制，你可以用下述方法创建插件：

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

更多插件示例可以参看[官网](https://emirror.dev/)。

## 联系

- 提交的你 [issue](https://github.com/bvanjoi/emirror/issues/new).

## 协议

遵从 [MIT 开源协议](./LICENSE.md)。
