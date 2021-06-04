import { PluginKey } from '@emirror/pm/state';

/**
 * Received some data and deal it.
 */
export type Listener<T = any> = (data: T) => void;

/**
 * Store all event name and its event function;
 */
export interface Listeners {
  [name: string]: Set<Listener>;
}

/**
 * Dispatch Function inside Prosemirror Plugin to emirror.
 */
export type Dispatch<T = any> = (
  eventName: PluginKey | string,
  data: T,
) => void;
