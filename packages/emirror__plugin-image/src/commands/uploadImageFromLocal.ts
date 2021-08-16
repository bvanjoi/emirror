import { PluginKey, EditorState } from '@emirror/pm/state';
import { EditorView, DecorationSet } from '@emirror/pm/view';
import { uploadFile } from '@emirror/utils';

export function uploadImageFromLocal(
  view: EditorView,
  file: File,
  nodePlaceholderKey: PluginKey<DecorationSet>,
) {
  /**
   * upload ID
   */
  const id = {};
  const { tr } = view.state;
  if (!tr.selection.empty) {
    tr.deleteSelection();
  }
  tr.setMeta(nodePlaceholderKey, { add: { id, pos: tr.selection.from } });
  view.dispatch(tr);

  function findNodePlaceholder(state: EditorState) {
    let decorations = nodePlaceholderKey.getState(state);
    let found = decorations.find(null, null, spec => spec.id === id);
    return found.length ? found[0].from : null;
  }

  uploadFile(file).then(
    url => {
      const pos = findNodePlaceholder(view.state);
      if (!pos) {
        return;
      }
      view.dispatch(
        view.state.tr
          .replaceWith(
            pos,
            pos,
            view.state.schema.nodes['image'].create({ src: url }),
          )
          .setMeta(nodePlaceholderKey, { remove: { id } }),
      );
    },
    () => {
      // upload failed
      view.dispatch(tr.setMeta(nodePlaceholderKey, { remove: { id } }));
    },
  );
}
