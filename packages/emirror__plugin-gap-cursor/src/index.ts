import { Extension } from '@emirror/core-structure';
import { gapCursor } from '@emirror/pm/gapCursor';

class GapCursor extends Extension {
  get name() {
    return 'gapCursor';
  }

  addPlugin() {
    return [gapCursor()];
  }
}

export default GapCursor;
