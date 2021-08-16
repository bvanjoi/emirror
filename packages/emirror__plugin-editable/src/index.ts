import { Extension } from '@emirror/core-structure';
import { Command } from '@emirror/pm/commands';

declare module '@emirror/core' {
  class EMirror {
    commands: {
      setEditable: (editable: boolean) => Command;
    };
  }
}

class Editable extends Extension {
  get name() {
    return 'editable' as const;
  }

  get commands() {
    return {
      setEditable:
        (editable: boolean): Command =>
        (_state, _dispatch, view) => {
          view.update({
            ...view.props,
            editable: () => editable,
          });
          return true;
        },
    };
  }
}

export default Editable;
