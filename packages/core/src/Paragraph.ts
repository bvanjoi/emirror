import * as PM from '@emirror/pm';

export function createNodeSpec(): PM.Model.NodeSpec {
  const group = "block";
  const content = "inline*";
  const toDOM: () => [string, number] = () => ["p", 0];
  const parseDOM: PM.Model.ParseRule[] = [
    {
      tag: "p"
    }
  ];
  return {
    group,
    content,
    toDOM,
    parseDOM
  }
}