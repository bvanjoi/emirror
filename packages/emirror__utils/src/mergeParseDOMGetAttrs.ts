import { GlobalAttrs } from '@emirror/core-structure';
import { ParseRule } from '@emirror/pm/model';
/**
 * Merge node/mark spec parseDOM[].getAttrs from globalAttrs.parseDOM.getAttrs.
 */
export function mergeParseDOMGetAttrs(
  parseRule: ParseRule,
  globalAttrs: GlobalAttrs,
): ParseRule {
  return {
    ...parseRule,
    getAttrs: dom => {
      const oldAttrs = parseRule.getAttrs
        ? parseRule.getAttrs(dom)
        : parseRule.attrs;

      if (oldAttrs === false) {
        return false;
      }

      const newAttrs = globalAttrs
        .filter(item => item.parseDOM)
        .reduce((all, item) => {
          const attrs = item.parseDOM
            ? item.parseDOM(dom) || {}
            : {
                [item.name]: (dom as HTMLElement).getAttribute(item.name),
              };
          const filteredAttrs = Object.fromEntries(
            Object.entries(attrs).filter(([, value]) => value),
          );
          return {
            ...all,
            ...filteredAttrs,
          };
        }, {});
      return { ...newAttrs, ...oldAttrs };
    },
  };
}
