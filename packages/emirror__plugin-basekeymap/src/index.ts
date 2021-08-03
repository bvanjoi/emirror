import { Extension } from '@emirror/core-structure';
import { baseKeymap } from '@emirror/pm/commands';

/**
 * Base keymap for editor.
 *
 * It recommend place after `new Text()`. Or
 * rewrite all operation in basekeymap.
 *
 */
class BaseKeymap extends Extension {
  get name() {
    return 'baseKeymap' as const;
  }

  get keymap() {
    return baseKeymap;
  }
}

export default BaseKeymap;
