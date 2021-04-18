import { PluginKey } from '@emirror/pm/state';
import { ErrorMsg } from './constant';
import { Listener, Listeners, Dispatch } from './types';

/**
 * A eventemitter for emirror.
 */
export class EventEmitter<T = any> {
  /**
   * Store all event.
   */
  private listeners: Listeners = {};

  /**
   * Bind event to listeners.
   * @param event name of event.
   * @param cb the function of this event.
   */
  on(event: string, cb: Listener<T>): void {
    if (!this.listeners[event]) {
      this.listeners[event] = new Set();
    }
    this.listeners[event].add(cb);
  }

  /**
   * Remove cb from listeners[event].
   * @param event name of event.
   * @param cb the function of this event.
   */
  off(event: string, cb: Listener<T>): void {
    if (!this.listeners[event]) {
      console.error(ErrorMsg.INVALID_EVENT);
    } else if (this.listeners[event].has(cb)) {
      this.listeners[event].delete(cb);
    } else {
      console.error(ErrorMsg.INVALID_FUNCTION);
    }
  }

  /**
   * Exec all callback of listeners[event].
   * @param event name of event.
   * @param data data for exec the event.
   */
  emit(event: string, data: T): void {
    if (!this.listeners[event]) {
      console.error(ErrorMsg.INVALID_EVENT);
    } else {
      this.listeners[event].forEach(cb => cb(data));
    }
  }

  /**
   * Clear the content of listeners.
   */
  destroy(): void {
    this.listeners = {};
  }
}

/**
 *
 * @param eventEmitter the emitter for emirror.
 * @returns A function which will notify listeners about the plugin's state of PM changed.
 */
export const createDispatch = <T>(
  eventEmitter: EventEmitter<T>
): Dispatch<T> => (eventName: string | PluginKey, data: T) => {
  if (!eventName) {
    throw Error(ErrorMsg.INVALID_EVENT);
  }
  let event: string;
  if (typeof eventName === 'string') {
    event = eventName;
  } else {
    event = eventName.name;
  }
  eventEmitter.emit(event, data);
};
