import { NodeSpec, NodeType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';
import { Base } from './base';
import { ErrorMsg } from './constant';
import { GlobalAttrs, PluginType } from './types';

/**
 * The integration for ProseMirrorNode.
 */
export class Node extends Base {
  get type(): PluginType {
    return 'node';
  }

  /**
   * get ProseMirror NodeSpec to generator NodeType.
   */
  createNodeSpec(globalAttrs?: GlobalAttrs): NodeSpec {
    throw Error(ErrorMsg.INVALID_NODE);
  }

  /**
   * Input something and trigger rules will create new Node.
   * @returns Some input rules.
   */
  inputRules: (options: { type: NodeType }) => InputRule[] = () => null;
}
