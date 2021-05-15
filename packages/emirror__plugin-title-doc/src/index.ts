import { Node } from '@emirror/core-structure';

class TitleDoc extends Node {
  get name() {
    return 'titleDoc' as const;
  }

  get schema() {
    return {
      content: 'title block+',
    };
  }
}

export default TitleDoc;
