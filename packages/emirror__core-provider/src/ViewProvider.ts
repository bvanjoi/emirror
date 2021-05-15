import { EditorView } from '@emirror/pm/view';
import { Schema } from '@emirror/pm/model';
import { ErrorMsg } from './constants';

/**
 * Provide the view of Prosemirror to EMirror.
 */
export class ViewProvider<S extends Schema = any> {
  #view: EditorView<S>;

  get view(): EditorView<S> {
    if (!this.#view) {
      throw Error(ErrorMsg.INVALID_VIEW);
    }
    return this.#view;
  }

  init(view: EditorView) {
    this.#view = view;
  }
}
