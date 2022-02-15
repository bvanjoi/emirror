import * as PM from '@emirror/pm';

export function createNodeSpec(): PM.Model.NodeSpec {
  const content = "block+";
  const toDOM: () => [string, number] = () => ["div", 0];
  return {
    content,
    toDOM
  }
}
