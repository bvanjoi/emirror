export function mergeAttrs(
  oldAttrs: Record<string, any>,
  newAttrsArr: Record<string, any>[],
) {
  return newAttrsArr.reduce((all, item) => {
    const mergedAttrs = { ...all };
    Object.entries(item).forEach(([key, value]) => {
      const exists = mergedAttrs[key];
      if (!exists) {
        mergedAttrs[key] = value;
        return;
      }
      if (key === 'class') {
        mergedAttrs[key] = [mergedAttrs[key], value].join(' ');
      } else if (key === 'style') {
        mergedAttrs[key] = [mergedAttrs[key], value].join(';');
      } else {
        mergedAttrs[key] = value;
      }
    });
    return mergedAttrs;
  }, oldAttrs);
}
