import {
  Node,
  Mark,
  Extension,
  GlobalAttrs,
} from '@emirror/core-structure';
import { MarkSpec, NodeSpec, Schema } from '@emirror/pm/model';
import { Plugin } from '@emirror/pm/state';
import { InputRule } from '@emirror/pm/inputrules';
import { Keymap, chainCommands } from '@emirror/pm/commands';
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
   * @param schema The scheme generate from nodes and marks of Prosemirror
   * @returns When keydown some keyboard, some command will exec.
   */
  get keymaps(): Keymap {
    return this.#emPlugins
      .map(plugin => plugin.keymap)
      .reduce((kms, obj) => {
        Object.entries(obj).forEach(([key, value]) => {
          if (kms[key]) {
            kms[key] = chainCommands(value, kms[key]);
          } else {
            kms[key] = value;
          }
        }, kms);
        return kms;
      }, {});
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
