import { MarkType, Schema } from '@emirror/pm/model';

/**
 * Get the type of PMMark if it exist in schema.
 * If it's do not exist, it will throw error.
 */
export function getMarkType(
  nameOrType: string | MarkType,
  schema: Schema,
) {
  if (typeof nameOrType === 'string') {
    if (!schema.marks[nameOrType]) {
      throw Error(`There is no mark type named ${nameOrType}.`);
    }

    return schema.marks[nameOrType];
  }
  return nameOrType;
}
