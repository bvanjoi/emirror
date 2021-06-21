/**
 * check if o1 includes o2.
 */
export function objectIncludes(
  o1: Record<string, any>,
  o2: Record<string, any>,
): boolean {
  const keys = Object.keys(o2);

  if (!keys.length) {
    return true;
  }

  return Boolean(keys.filter((key) => o1[key] === o2[key]).length);
}
