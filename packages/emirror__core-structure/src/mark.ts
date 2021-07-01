import { MarkSpec, MarkType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';
import { Base } from './base';
import { GlobalAttrs, PluginType } from './types';
import { ErrorMsg } from './constant';

/**
 * The integration for ProseMirror Mark.
 */
export class Mark extends Base {
  get type(): PluginType {
    return 'mark';
  }

  /**
   * get ProseMirror MarkSpec to generator MarkType.
   */
  createMarkSpec(globalAttrs?: GlobalAttrs): MarkSpec {
    throw Error(ErrorMsg.INVALID_MARK);
  }

  /**
   * Input something and trigger rules will create new Mark.
   * @returns Some input rules.
   */
  inputRules: (options: { type: MarkType }) => InputRule[] = () => null;
}
