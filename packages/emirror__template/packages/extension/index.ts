import { Extension } from '@emirror/core-structure';

class ExtensionName extends Extension {
  get name() {
    return 'extensionName' as const;
  }
}

export default ExtensionName;
