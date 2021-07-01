import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { nodeInputRules } from '@emirror/utils';
import { insertHR } from './command';
import './style.css';

class HR extends Node {
  get name() {
    return 'hr';
  }

  createNodeSpec(): NodeSpec {
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
