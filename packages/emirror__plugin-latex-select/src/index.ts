import { Mark } from '@emirror/core-structure';
import { MarkSpec, Node as PMNode } from '@emirror/pm/model';
import { Plugin, Selection } from '@emirror/pm/state';
import { Decoration, DecorationSet } from '@emirror/pm/view';
import './style.css';

class LatexSelect extends Mark {
  get name() {
    return 'latexSelect';
  }

  get schema(): MarkSpec {
    return {
      parseDOM: [
        {
          tag: 'span.emirror-latex-select',
        },
      ],
    };
  }

  get plugins() {
    const checkSelection = ({
      selection,
      doc,
    }: {
      selection: Selection;
      doc: PMNode;
    }) => {
      const { from } = selection;
      const { content } = selection.content();
      const result: { start: number; end: number }[] = [];

      content.descendants((node, pos) => {
        if (node.type.name === 'text') {
          return false;
        }
        if (node.type.name.includes('latex')) {
          result.push({
            start: Math.max(from + pos - 1, 0),
            end: from + pos + node.nodeSize - 1,
          });
          return false;
        }
        return true;
      });
      return DecorationSet.create(
        doc,
        result.map(({ start, end }) =>
          Decoration.node(start, end, { class: 'emirror-latex-select' }),
        ),
      );
    };

    return [
      // new Plugin({
      //   state: {
      //     init(_config, partialState) {
      //       return checkSelection(partialState);
      //     },
      //     apply(tr, oldState) {
      //       if (!tr.selection || !tr.selectionSet) {
      //         return oldState;
      //       }
      //       return checkSelection(tr);
      //     },
      //   },
      //   props: {
      //     // decorations(state) {
      //     //   return this.getState(state);
      //     // },
      //   },
      // }),
    ];
  }
}

export default LatexSelect;
