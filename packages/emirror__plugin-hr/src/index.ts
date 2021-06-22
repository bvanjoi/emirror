import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { nodeInputRules } from '@emirror/utils';
import { insertHR } from './commands';
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

  get commands() {
    return { insertHR: insertHR(this.name) };
  }

  inputRules = ({ type }) => [nodeInputRules(/^---/, type)];
}

export default HR;
