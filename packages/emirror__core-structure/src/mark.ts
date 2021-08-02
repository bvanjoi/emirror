import { MarkSpec, MarkType } from '@emirror/pm/model';
import { InputRule } from '@emirror/pm/inputrules';
import { Base } from './base';
import { GlobalAttrs, PluginType } from './types';

/**
 * The integration for ProseMirror Mark.
 */
export class Mark extends Base {
  get type(): PluginType {
    return 'mark';
  }

  /**
   * Get PM MarkSpec to generate PM MarkType.
   * @param globalAttrs which can be defined in Extension, It should combine
   *                    @emirror/utils/mergeAttrs.
   */
  createMarkSpec(globalAttrs?: GlobalAttrs): MarkSpec {
    throw Error(`MarkSpec of ${this.name} can not be undefined`);
  }

  /**
   * Input something and trigger rules will create new Mark.
   * @returns Some input rules.
   */
  inputRules: (options: { type: MarkType }) => InputRule[] = () => null;
}
