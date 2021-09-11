import { Plugin } from '@emirror/pm/state';

/**
 * Is this Plugin a viewPlugin?
 */
export default function (plugin: Plugin): boolean {
  if (
    plugin.spec.state ||
    plugin.spec.filterTransaction ||
    plugin.spec.appendTransaction
  ) {
    return false;
  }
  return true;
}
