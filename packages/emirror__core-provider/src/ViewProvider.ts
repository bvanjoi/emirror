import { EditorView } from '@emirror/pm/view';
import { Schema } from '@emirror/pm/model';
import { ErrorMsg } from './constants';

/**
 * Provide the view of Prosemirror to EMirror.
 */
export class ViewProvider<S extends Schema = any> {
  private _view: EditorView<S>;

  get view(): EditorView<S> {
    if (!this._view) {
      throw Error(ErrorMsg.INVALID_VIEW);
    }
    return this._view;
  }

  init(view: EditorView) {
    this._view = view;
  }
}
