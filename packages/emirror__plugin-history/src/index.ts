import { Extension } from '@emirror/core-structure';
import { isMac } from '@emirror/utils';
import { history, undo, redo } from '@emirror/pm/history';

export class History extends Extension {
  get name() {
    return 'history' as const;
  }

  plugins = () => [history()];

  keymap = () => {
    const binding = {};
    binding['Mod-z'] = undo;
    binding['Shift-Mod-z'] = redo;
    if (!isMac) {
      binding['Mod-z'] = redo;
    }
    return binding;
  };
}
