import { StateField } from '@emirror/pm/state';
import { LatexPluginState } from '../types';

export default function (): StateField<LatexPluginState> {
  return {
    init() {
      return {
        macros: {},
        activeNodeViews: [],
        prevCursorPos: 0,
      };
    },
    apply: (_tr, value, oldState) => ({
      ...value,
      prevCursorPos: oldState.selection.from,
    }),
  };
}
