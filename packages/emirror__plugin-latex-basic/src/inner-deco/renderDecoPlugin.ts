import { Plugin } from '@emirror/pm/state';
import { DecorationSet, Decoration } from '@emirror/pm/view';

const renderDecoPlugin = () =>
  new Plugin({
    props: {
      // TODO preview
      // decorations(state) {
      //   return DecorationSet.create(state.doc, [
      //     Decoration.inline(0, state.doc.content.size, {
      //       style: 'color: purple',
      //     }),
      //   ]);
      // },
    },
  });

export { renderDecoPlugin };
