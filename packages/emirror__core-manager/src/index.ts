import { Node, Mark, Extension } from '@emirror/core-structure';
import { MarkSpec, NodeSpec, Node as PMNode, Schema } from '@emirror/pm/model';
import { EditorView, Decoration, NodeView } from '@emirror/pm/view';
import { Plugin } from '@emirror/pm/state';
import { PluginsProvider } from '@emirror/core-provider';
import { InputRule } from '@emirror/pm/inputrules';
import { Keymap, chainCommands } from '@emirror/pm/commands';
import { createReactNodeViews } from './ReactNodeView';
import { ErrorMsg } from './constant';
import { ContextProps } from '@emirror/core-react';

/**
 * Manager for emirror plugins.
 */
export class Manager {
  /**
   * All EMirror plugins
   */
  private emPlugins: (Node | Mark | Extension)[];

  constructor(plugins: (Node | Mark | Extension)[]) {
    this.emPlugins = plugins;
  }

  /**
   * get all names of EMirror plugins.
   */
  get names() {
    return {
      N: this.emPlugins
        .filter((plugin) => plugin.type === 'node')
        .map(({ name }) => name),
      M: this.emPlugins
        .filter((plugin) => plugin.type === 'mark')
        .map(({ name }) => name),
    };
  }

  /**
   * EMirror Node to Prosemirror Node
   */
  get nodes() {
    return (
      this.emPlugins.filter((plugin) => plugin.type === 'node') as Node[]
    ).reduce(
      (nodes, { name, schema }) => ({ ...nodes, [name]: schema }),
      {} as { [name: string]: NodeSpec },
    );
  }

  /**
   * EMirror Mark to Prosemirror Mark
   */
  get marks() {
    return (
      this.emPlugins.filter((plugin) => plugin.type === 'mark') as Mark[]
    ).reduce(
      (marks, { name, schema }) => ({ ...marks, [name]: schema }),
      {} as { [name: string]: MarkSpec },
    );
  }

  /**
   * get plugins of Prosemirror from EMirror
   */
  get plugins() {
    return this.emPlugins.reduce(
      (allPlugins, { plugins }) => [...allPlugins, ...plugins],
      [] as Plugin[],
    );
  }

  /**
   * Generate React Component from node and mark
   * if the react component is not empty.
   */
  nodeAndMarkReactComponent = (ctx: ContextProps) => {
    const nodeViews = {};
    this.emPlugins
      .filter(
        (plugin) =>
          ['node', 'mark'].includes(plugin.type) && plugin.reactComponent,
      )
      .map(
        (plugin) =>
          [plugin.name, createReactNodeViews(plugin.reactComponent, ctx)] as [
            string,
            (
              node: PMNode,
              view: EditorView,
              getPos: (() => number) | boolean,
              decoration: Decoration[],
            ) => NodeView,
          ],
      )
      .forEach(([name, nodeView]) => {
        if (nodeViews[name]) {
          console.error(ErrorMsg.REPEATED_NODEVIEW);
        }
        nodeViews[name] = nodeView;
      });
    return nodeViews;
  };

  /**
   * Generate React Component from extension
   * if the react component is not empty.
   */
  extensionsReactComponent = () =>
    this.emPlugins
      .filter((plugin) => plugin.type === 'extension' && plugin.reactComponent)
      .map((p) => p.reactComponent);

  /**
   * Generate InputRules from EMPlugins
   * @param schema The scheme generate from nodes and marks of Prosemirror
   * @returns inputRules[], and when typed, caused something happened.
   */
  inputRules = (schema: Schema) =>
    (
      this.emPlugins.filter((plugin) =>
        ['node', 'mark'].includes(plugin.type),
      ) as (Node | Mark)[]
    )
      .filter((plugin) => plugin.inputRules)
      .map((plugin) =>
        plugin.inputRules({
          type: schema[`${plugin.type}s`][plugin.name],
        }),
      )
      .filter((rules) => rules && Array.isArray(rules))
      .reduce((allRules, rules) => [...allRules, ...rules], [] as InputRule[]);

  /**
   * Generate Keymap from EMPlugins
   * @param schema The scheme generate from nodes and marks of Prosemirror
   * @returns When keydown some keyboard, some command will exec.
   */
  keymaps = (schema: Schema): Keymap => {
    const allKeymap = {};
    // keymap of Mark and Node
    (
      this.emPlugins.filter((plugin) =>
        ['node', 'mark'].includes(plugin.type),
      ) as (Node | Mark)[]
    )
      .map((plugin) =>
        plugin.keymap({
          type: schema[`${plugin.type}s`][plugin.name],
        }),
      )
      .forEach((obj) =>
        Object.entries(obj).forEach(([key, value]) => {
          if (allKeymap[key]) {
            allKeymap[key] = chainCommands(value, allKeymap[key]);
          } else {
            allKeymap[key] = value;
          }
        }),
      );

    // keymap of Extension
    (
      this.emPlugins.filter(
        (plugin) => plugin.type === 'extension',
      ) as Extension[]
    )
      .map((plugin) => plugin.keymap({}))
      .forEach((obj) =>
        Object.entries(obj).forEach(([key, value]) => {
          if (allKeymap[key]) {
            allKeymap[key] = chainCommands(value, allKeymap[key]);
          } else {
            allKeymap[key] = value;
          }
        }),
      );

    return allKeymap;
  };
}
