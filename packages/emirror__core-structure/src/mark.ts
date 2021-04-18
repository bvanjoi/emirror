import { MarkSpec, MarkType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';
import { Base } from './base';
import { PluginType } from './types';
import { ErrorMsg } from './constant';

export class Mark extends Base {
  get type(): PluginType {
    return 'node';
  }

  /**
   * The schema for ProsemirrorMark.
   */
  get schema(): MarkSpec {
    throw Error(ErrorMsg.INVALID_MARK);
  }

  /**
   * Input something and trigger rules will create new Mark.
   * @returns Some input rules.
   */
  inputRules: (options: { type: MarkType }) => InputRule[] = () =>
    null;
}
