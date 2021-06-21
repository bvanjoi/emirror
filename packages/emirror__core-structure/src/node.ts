import { NodeSpec, NodeType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';
import { Base } from './base';
import { PluginType } from './types';
import { ErrorMsg } from './constant';

/**
 * The integration for ProsemirrorNode.
 */
export class Node extends Base {
  get type(): PluginType {
    return 'node';
  }

  /**
   * The schema for ProseMirrorNode.
   */
  get schema(): NodeSpec {
    throw Error(ErrorMsg.INVALID_NODE);
  }

  /**
   * Input something and trigger rules will create new Node.
   * @returns Some input rules.
   */
  inputRules: (options: { type: NodeType }) => InputRule[] = () =>
    null;
}
