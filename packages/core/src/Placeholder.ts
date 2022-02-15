import * as PM from '@emirror/pm';
import * as Utils from './Utils';

interface IDecorationPluginProps {
  message: string;
}

export function createDecorationPluginSpec(
  props: IDecorationPluginProps = {
    message: "Placeholder"
  }
): PM.State.PluginSpec<any> {
  const name = "EM-placeholder"
  const createWidgetNode: () => Node = () => {
    const span = document.createElement('span');
    span.className = name;
    span.innerText = props.message;
    return span;
  }

  return {
    key: new PM.State.PluginKey(name),
    props: {
      decorations(state) {
        if (!Utils.isAtTheBeginning(state.selection)) {
          return;
        }
        if (!Utils.isThisLineIsEmpty(state.selection.$anchor)) {
          return;
        }
        const widget = createWidgetNode();
        const decoration = PM.View.Decoration.widget(state.selection.from, widget);
        return PM.View.DecorationSet.create(state.doc, [decoration]);
      }
    }
  }
}

export function createPluginSpecs(): PM.State.PluginSpec<any>[] {

  return [createDecorationPluginSpec()];
}
