import {
  Node,
  Mark,
  Extension,
  GlobalAttrs,
} from '@emirror/core-structure';
import { MarkSpec, NodeSpec, Schema } from '@emirror/pm/model';
import { Plugin } from '@emirror/pm/state';
import { InputRule } from '@emirror/pm/inputrules';
import { Keymap, chainCommands, Command } from '@emirror/pm/commands';
import { canGlobalAttrsApply } from './utils';

/**
 * Manager for emirror plugins.
 */
export default class Manager {
  /**
   * All EMirror plugins
   */
  #emPlugins: (Node | Mark | Extension)[];
  /**
   * All EMirror Nodes
   */
  #emNodes: Node[];
  /**
   * All EMirror Marks
   */
  #emMarks: Mark[];
  /**
   * All EMirror Extensions
   */
  #emExtensions: Extension[];
  /**
   * GlobalAttrs from #exExtensions
   */
  #globalAttrs: GlobalAttrs;

  constructor(plugins: (Node | Mark | Extension)[]) {
    this.#emPlugins = plugins;

    this.#emNodes = plugins.filter(
      plugin => plugin instanceof Node,
    ) as Node[];

    this.#emMarks = plugins.filter(
      plugin => plugin instanceof Mark,
    ) as Mark[];

    this.#emExtensions = plugins.filter(
      plugin => plugin instanceof Extension,
    ) as Extension[];

    this.#globalAttrs = this.#emExtensions.reduce((all, nowExtension) => {
      let globalAttrs = nowExtension.addGlobalAttrs();
      if (!globalAttrs) {
        return all;
      } else {
        return [...all, ...globalAttrs];
      }
    }, [] as GlobalAttrs);
  }

  /**
   * Create PM Nodes.
   */
  createNodes = () =>
    this.#emNodes.reduce(
      (nodes, { name, createNodeSpec }) => ({
        ...nodes,
        [name]: createNodeSpec(
          this.#globalAttrs.filter(item =>
            canGlobalAttrsApply(item.scope, { name, type: 'node' }),
          ),
        ),
      }),
      {} as { [name: string]: NodeSpec },
    );

  /**
   * Create PM Marks
   */
  createMarks = () =>
    this.#emMarks.reduce(
      (marks, { name, createMarkSpec }) => ({
        ...marks,
        [name]: createMarkSpec(
          this.#globalAttrs.filter(item =>
            canGlobalAttrsApply(item.scope, { name, type: 'mark' }),
          ),
        ),
      }),
      {} as { [name: string]: MarkSpec },
    );

  /**
   * Get all plugins of PM from EMirror.
   */
  get plugins() {
    return this.#emPlugins
      .filter(({ plugin }) => plugin)
      .reduce(
        (allPlugins, { plugin }) => [...allPlugins, plugin],
        [] as Plugin[],
      );
  }

  /**
   * Generate Keymap from EMPlugins
   * @param schema The scheme generate from nodes and marks of ProseMirror
   * @returns When keydown some keyboard, some command will exec.
   */
  get keymaps() {
    return this.#emPlugins
      .map(plugin => plugin.keymap)
      .reduce((allKms, kms) => {
        Object.entries(kms).forEach(([key, km]) => {
          if (allKms[key]) {
            allKms[key] = chainCommands(km, allKms[key]);
          } else {
            allKms[key] = km;
          }
        }, allKms);
        return allKms;
      }, {} as Keymap);
  }

  get commands() {
    return this.#emPlugins
      .map(plugin => plugin.commands)
      .reduce((allCmds, cmds) => {
        Object.entries(cmds).forEach(([key, cmd]) => {
          if (allCmds[key]) {
            console.error(`The command ${key} had same name.`);
          } else {
            allCmds[key] = cmd;
          }
        });
        return allCmds;
      }, {} as Record<string, () => Command>);
  }
  /**
   * Generate InputRules from EMPlugins
   * @param schema The scheme generate from nodes and marks of PM
   * @returns inputRules[], and when typed, caused something happened.
   */
  inputRules = (schema: Schema) =>
    [
      ...this.#emNodes.map(plugin =>
        plugin.inputRules({ type: schema['nodes'][plugin.name] }),
      ),
      ...this.#emMarks.map(plugin =>
        plugin.inputRules({ type: schema['marks'][plugin.name] }),
      ),
    ]
      .filter(rules => rules && Array.isArray(rules))
      .reduce(
        (allRules, rules) => [...allRules, ...rules],
        [] as InputRule[],
      );
}
