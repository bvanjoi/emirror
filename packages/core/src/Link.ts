import * as PM from '@emirror/pm';

export function createMarkSpec(): PM.Model.MarkSpec {

  const toDOM: (mark: PM.Model.Mark) => [string, PM.Model.Attrs, number] = mark => {
    return ["a", mark.attrs, 0]
  }

  const parseDOM: PM.Model.ParseRule[] = [
    {
      tag: "a[href]",
      getAttrs: (node) => {
        if (typeof node === "string") {
          throw Error("unexpected")
        }
        return {
          href: node.getAttribute("href")
        }
      }
    }
  ]

  return {
    toDOM,
    parseDOM
  }
}

// TODO:
export function createAutoLinkPluginSpec(): PM.State.PluginSpec<any> {
  return {
    appendTransaction(trs, oldState, newState) {
      return null;
    }
  }
}

export function createPluginSpecs(): PM.State.PluginSpec<any>[] {
  return [createAutoLinkPluginSpec()]
}