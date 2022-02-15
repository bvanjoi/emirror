import * as PM from '@emirror/pm';
import * as Doc from './Doc';
import * as Paragraph from './Paragraph';
import * as Text from './Text';
import * as Placeholder from './Placeholder';
import * as Link from './Link';

export function createBasicNodes(): Record<string, PM.Model.NodeSpec> {
  return {
    doc: Doc.createNodeSpec(),
    paragraph: Paragraph.createNodeSpec(),
    text: Text.createNodeSpec(),
  }
}

export function createBasicMarks(): Record<string, PM.Model.MarkSpec> {
  return {
    link: Link.createMarkSpec()
  }
}

export function createPlugins(): PM.State.Plugin<any>[] {
  return [
    ...Link.createPluginSpecs(),
    ...Placeholder.createPluginSpecs(),
  ].map(pluginSpec => new PM.State.Plugin(pluginSpec))
}

/// --------

export function createSchema(spec: PM.Model.SchemaSpec): PM.Model.Schema {
  return new PM.Model.Schema(spec);
}

export function createState(config: PM.State.EditorStateConfig): PM.State.EditorState {
  return PM.State.EditorState.create(config)
}

export function createView(
  place: HTMLDivElement,
  props: PM.View.DirectEditorProps
): PM.View.EditorView {
  return new PM.View.EditorView(place, props)
}