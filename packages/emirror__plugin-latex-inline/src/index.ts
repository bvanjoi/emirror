import LatexBasic, {
  createPluginState,
  createLatexInlineNodeView,
} from '@emirror/plugin-latex-basic';
import { PluginSpec } from '@emirror/pm/state';
import { NodeSpec } from '@emirror/pm/model';
import makeLatexInlineInputRule from './makeLatexInlineInputRule';
import './style.css';

class LatexInline extends LatexBasic {
  get name() {
    return 'latexInline' as const;
  }

  createNodeSpec(): NodeSpec {
    return {
      group: 'inline',
      content: 'text*',
      inline: true,
      atom: true,
      parseDOM: [{ tag: 'span.emirror-latex-inline' }],
      toDOM: () => ['span', { class: 'emirror-latex-inline' }, 0],
    };
  }

  createPluginSpec(): PluginSpec {
    return {
      key: this.latexPluginKey,
      state: createPluginState(),
      props: {
        nodeViews: {
          [this.name]: createLatexInlineNodeView(this.latexPluginKey),
        },
      },
    };
  }

  inputRules = ({ type }) => [
    makeLatexInlineInputRule(/\$(.+)\$\x20/, type),
  ];
}

export default LatexInline;
