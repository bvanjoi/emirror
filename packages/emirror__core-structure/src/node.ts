import { NodeSpec, NodeType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';
import { Base } from './base';
import { GlobalAttrs, PluginType } from './types';

/**
 * The integration for ProseMirrorNode.
 */
export class Node extends Base {
  get type(): PluginType {
    return 'node';
  }

  /**
   * Get PM NodeSpec to generate PM NodeType.
   * @param globalAttrs which can be defined in Extension, It should combine
   *                    @emirror/utils/mergeAttrs.
   */
  createNodeSpec(globalAttrs?: GlobalAttrs): NodeSpec {
    throw Error(`NodeSpec of ${this.name} can not be undefined`);
  }

  /**
   * Input something and trigger rules will create new Node.
   * @returns Some input rules.
   */
  inputRules: (options: { type: NodeType }) => InputRule[] = () => null;
}
