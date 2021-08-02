import { Extension } from '@emirror/core-structure';
import { gapCursor } from '@emirror/pm/gapCursor';

class GapCursor extends Extension {
  get name() {
    return 'gapCursor';
  }

  get plugin() {
    return gapCursor();
  }
}

export default GapCursor;
