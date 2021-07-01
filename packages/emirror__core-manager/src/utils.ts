import { GlobalAttrScope } from '@emirror/core-structure';

/**
 * Can global attrs apply this schema?
 */
export function canGlobalAttrsApply(
  globalAttrScope: GlobalAttrScope,
  specOption: {
    name: string;
    type: 'node' | 'mark';
  },
): boolean {
  if (!globalAttrScope || globalAttrScope === 'all') {
    return true;
  } else if (globalAttrScope === 'nodes' && specOption.type === 'node') {
    return true;
  } else if (globalAttrScope === 'marks' && specOption.type === 'mark') {
    return true;
  } else if ((globalAttrScope as string[]).includes(specOption.name)) {
    return true;
  }
  return false;
}
