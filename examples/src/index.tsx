import * as React from 'react';
import {
  createBasicMarks,
  createView,
  createBasicNodes,
  createSchema,
  createState,
  createPlugins
} from '@emirror/core';
import * as PM from '@emirror/pm';

function Editor() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ref.current) {
      return ;
    }
    const nodes = createBasicNodes();
    const marks = createBasicMarks();
    const schema = createSchema({
      nodes,
      marks,
    });
    const state = createState({
      schema,
      doc: PM.Model.Node.fromJSON(schema, {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'hello',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
            ],
          }
        ]
      }),
      plugins: createPlugins(),
    })
    const view = createView(ref.current, {
      state,
      dispatchTransaction(tr) {
        const state = view.state.apply(tr);
        // console.log(state.doc.nodeSize)
        view.updateState(state);
      }
    });
    // @ts-ignored
    window.view = view
    view.focus();
    return () => {
      view.destroy();
    }
  }, [])

  return <div ref={ref}></div>
}

export default Editor;