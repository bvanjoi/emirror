import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { nodeInputRules } from '@emirror/utils';
import './style.css';

class HR extends Node {
  get name() {
    return 'hr';
  }

  get schema(): NodeSpec {
    return {
      group: 'block',
      parseDOM: [{ tag: 'hr' }],
      toDOM: () => ['hr', { class: 'emirror-hr' }],
    };
  }

  inputRules = ({ type }) => [nodeInputRules(/^---/, type)];
}

export default HR;
