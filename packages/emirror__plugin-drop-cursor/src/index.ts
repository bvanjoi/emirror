import { Extension } from '@emirror/core-structure';
import { dropCursor } from '@emirror/pm/dropCursor';

class DropCursor extends Extension {
  get name() {
    return 'dropCursor';
  }

  get plugin() {
    return dropCursor();
  }
}

export default DropCursor;
