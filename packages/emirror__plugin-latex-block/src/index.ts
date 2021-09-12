import LatexBasic, {
  createLatexBlockNodeView,
  createPluginState,
} from '@emirror/plugin-latex-basic';
import { PluginSpec } from '@emirror/pm/state';
import { NodeSpec } from '@emirror/pm/model';
import makeLatexBlockInputRule from './makeLatexBlockInputRule';
import './style.css';

class LatexBlock extends LatexBasic {
  get name() {
    return 'latexBlock' as const;
  }

  createNodeSpec(): NodeSpec {
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

  createPluginSpec(): PluginSpec {
    return {
      key: this.latexPluginKey,
      state: createPluginState(),
      props: {
        nodeViews: {
          [this.name]: createLatexBlockNodeView(this.latexPluginKey),
        },
      },
    };
  }

  inputRules = ({ type }) => [
    makeLatexBlockInputRule(/\$\$(.+)\$\$\x20/, type),
  ];
}

export default LatexBlock;
