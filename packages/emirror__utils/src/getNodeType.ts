import { NodeType, Schema } from '@emirror/pm/model';

export function getNodeType(nameOrType: string, schema: Schema): NodeType;
export function getNodeType(nameOrType: NodeType, schema: Schema): NodeType;
export function getNodeType(
  nameOrType: string | NodeType,
  schema: Schema,
): NodeType;

/**
 * get the type of node if it exist in schema.
 * If it's do not exist, it will throw error.
 */
export function getNodeType(nameOrType: string | NodeType, schema: Schema) {
  if (typeof nameOrType === 'string') {
    if (!schema.nodes[nameOrType]) {
      throw Error(`There is no node type named ${nameOrType}.`);
    }

    return schema.nodes[nameOrType];
  }
  return nameOrType;
}
