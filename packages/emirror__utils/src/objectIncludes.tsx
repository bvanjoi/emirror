/**
 * check if o1 includes o2.
 */
export const objectIncludes = (
  o1: Record<string, any>,
  o2: Record<string, any>,
): boolean => {
  Object.entries(o2).forEach(([key, value]) => {
    if (o1[key] !== o2[key]) {
      return false;
    }
  });
  return true;
};
