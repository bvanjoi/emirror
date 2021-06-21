import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import makeLatexBlockInputRule from './makeLatexBlockInputRule';
import './style.css';

class LatexBlock extends Node {
  LATEX_BLOCK_REGEX = /\$\$(.+)\$\$\x20/;

  get name() {
    return 'latexBlock' as const;
  }

  get schema(): NodeSpec {
    return {
      group: 'block',
      content: 'text*',
      code: true,
      atom: true,
      parseDOM: [
        {
          tag: 'div.emirror-latex-block',
        },
      ],
      toDOM: () => ['div', { class: 'emirror-latex-block' }, 0],
    };
  }

  inputRules = ({ type }) => [
    makeLatexBlockInputRule(this.LATEX_BLOCK_REGEX, type),
  ];
}

export default LatexBlock;
