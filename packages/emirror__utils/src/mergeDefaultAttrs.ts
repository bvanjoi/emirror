import { GlobalAttrs } from '@emirror/core-structure';
import { AttributeSpec } from '@emirror/pm/model';

/**
 * Merge node/mark spec Attrs and globalAttrs.
 */
export function mergeSpecAttrs(
  specAttrs: { [name: string]: AttributeSpec },
  globalAttrs: GlobalAttrs,
) {
  return {
    ...globalAttrs.reduce((all, now) => {
      all[now.name] = now.default ? { default: now.default } : {};
      return all;
    }, {}),
    ...specAttrs,
  };
}
