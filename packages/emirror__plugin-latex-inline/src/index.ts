import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import makeLatexInlineInputRule from './makeLatexInlineInputRule';
import './style.css';

class LatexInline extends Node {
  LATEX_INLINE_REGEX = /\$(.+)\$\x20/;

  get name() {
    return 'latexInline' as const;
  }

  get schema(): NodeSpec {
    return {
      group: 'inline',
      content: 'text*',
      inline: true,
      atom: true,
      parseDOM: [{ tag: 'span.emirror-latex-inline' }],
      toDOM: () => ['span', { class: 'emirror-latex-inline' }, 0],
    };
  }

  inputRules = ({ type }) => [
    makeLatexInlineInputRule(this.LATEX_INLINE_REGEX, type),
  ];
}

export default LatexInline;
