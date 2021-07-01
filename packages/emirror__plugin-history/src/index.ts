import { Extension } from '@emirror/core-structure';
import { isMac } from '@emirror/utils';
import { history, undo, redo } from '@emirror/pm/history';
import { Command } from '@emirror/pm/commands';

class History extends Extension {
  get name() {
    return 'history' as const;
  }

  get plugins() {
    return [history()];
  }

  get commands() {
    return {
      redo,
      undo,
    };
  }

  get keymap() {
    const binding: { [key: string]: Command } = {};
    binding['Mod-z'] = undo;
    binding['Shift-Mod-z'] = redo;
    if (!isMac) {
      binding['Mod-y'] = redo;
    }
    return binding;
  }
}

export default History;
