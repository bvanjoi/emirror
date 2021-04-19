import { Node, Mark, Extension } from '@emirror/core-structure';
import {
  MarkSpec,
  NodeSpec,
  Node as PMNode,
  Schema
} from '@emirror/pm/model';
import { EditorView, Decoration, NodeView } from '@emirror/pm/view';
import { Plugin } from '@emirror/pm/state';
import {
  PortalProvider,
  PluginsProvider
} from '@emirror/core-provider';
import { genReactNodeViews } from './ReactNodeView';
import { ErrorMsg } from './constant';
import { InputRule } from '@emirror/pm/inputrules';

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
   * EMirror Node to Prosemirror Node
   */
  get nodes() {
    return (this.emPlugins.filter(
      plugin => plugin.type === 'node'
    ) as Node[]).reduce(
      (nodes, { name, schema }) => ({ ...nodes, [name]: schema }),
      {} as { [name: string]: NodeSpec }
    );
  }

  /**
   * EMirror Mark to Prosemirror Mark
   */
  get marks() {
    return (this.emPlugins.filter(
      plugin => plugin.type === 'mark'
    ) as Mark[]).reduce(
      (marks, { name, schema }) => ({ ...marks, [name]: schema }),
      {} as { [name: string]: MarkSpec }
    );
  }

  /**
   *
   * @param pluginsProvider Convert EMirror plugins to Prosemirror Plugins
   * @returns All plugins of Prosemirror
   */
  plugins = (pluginsProvider: PluginsProvider) =>
    this.emPlugins.reduce(
      (allPlugins, { plugins }) => [
        ...allPlugins,
        ...plugins(pluginsProvider),
      ],
      [] as Plugin[]
    );

  /**
   * Generate React Component from node and mark
   * if the react component is not empty.
   */
  nodeAndMarkReactComponent = (
    portalProvider: PortalProvider,
    pluginsProvider: PluginsProvider
  ) => {
    const nodeViews = {};
    this.emPlugins
      .filter(
        plugin =>
          ['node', 'mark'].includes(plugin.type) &&
          plugin.reactComponent
      )
      .map(
        plugin =>
          [
            plugin.name,
            genReactNodeViews(
              plugin.reactComponent,
              portalProvider,
              pluginsProvider
            ),
          ] as [
            string,
            (
              node: PMNode,
              view: EditorView,
              getPos: (() => number) | boolean,
              decoration: Decoration[]
            ) => NodeView
          ]
      )
      .forEach(([name, nodeView]) => {
        if (nodeViews[name]) {
          console.error(ErrorMsg.REPEATED_NODEVIEW);
          return;
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
      .filter(
        plugin => plugin.type === 'extension' && plugin.reactComponent
      )
      .map(p => p.reactComponent);

  /**
   * Generate InputRules from EMPlugins
   * @param schema The scheme generate from nodes and marks of Prosemirror
   * @returns inputRules[], and when typed, caused something happened.
   */
  inputRules = (schema: Schema) =>
    (this.emPlugins.filter(plugin =>
      ['node', 'mark'].includes(plugin.type)
    ) as (Node | Mark)[])
      .map(plugin =>
        plugin.inputRules({
          type: schema[`${plugin.type}s`][plugin.name],
        })
      )
      .filter(rules => rules && Array.isArray(rules))
      .reduce(
        (allRules, rules) => [...allRules, ...rules],
        [] as InputRule[]
      );
}
