import { Extension } from '@emirror/core-structure';
import { Command } from '@emirror/pm/commands';

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
