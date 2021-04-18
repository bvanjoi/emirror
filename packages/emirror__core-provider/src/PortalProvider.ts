import React from 'react';
import ReactDOM from 'react-dom';
import { Listener } from '@emirror/core-emitter';

/**
 * Store the Prosemirror Nodeview to React Component.
 */
export class PortalProvider {
  /**
   *
   */
  shouldUpdatePortals = false;
  /**
   *
   */
  pendingUpdatedProps: Map<HTMLElement, any> = new Map();
  /**
   *
   */
  portals: Map<HTMLElement, React.ReactPortal> = new Map();
  /**
   *
   */
  nodeViewListeners: Map<HTMLElement, Set<Listener>> = new Map();
  /**
   *
   */
  portalRendererCallback?: (
    newPortals: Map<HTMLElement, React.ReactPortal>
  ) => void;

  /**
   * Store react portal to this.portals, and notify to update react portals
   * @param component The react component in EMirror plugin
   * @param container The DOM element create by Prosemirror NodeView
   */
  render(component: React.ReactElement, container: HTMLElement) {
    this.portals.set(
      container,
      ReactDOM.createPortal(component, container)
    );
    this.shouldUpdatePortals = true;
  }

  /**
   * Update props.
   * @param container The DOM element which store React.Portals.
   * @param props Some properties.
   */
  update(container: HTMLElement, props: any) {
    this.pendingUpdatedProps.set(container, props);
  }

  /**
   * Remove some NodeView and update.
   * @param container The DOM element which store React.Portals.
   */
  remove(container: HTMLElement) {
    this.portals.delete(container);
    this.shouldUpdatePortals = true;
  }

  /**
   *
   */
  flush() {
    Array.from(this.pendingUpdatedProps.entries()).map(
      ([container, props]) => {
        const set = this.nodeViewListeners.get(container);
        if (set) {
          set.forEach(cb => cb(props));
        }
        this.pendingUpdatedProps.delete(container);
      }
    );

    if (this.portalRendererCallback && this.shouldUpdatePortals) {
      this.portalRendererCallback(this.portals);
      this.shouldUpdatePortals = false;
    }
  }

  /**
   *
   * @param container
   * @param cb
   */
  subscribe(container: HTMLElement, cb: (data: any) => void) {
    const set = this.nodeViewListeners.get(container) || new Set();
    set.add(cb);
    this.nodeViewListeners.set(container, set);
  }

  /**
   *
   * @param container
   * @param cb
   */
  unsubscribe(container: HTMLElement, cb: (data: any) => void) {
    const set = this.nodeViewListeners.get(container);
    if (!set) {
      return;
    }
    if (set.has(cb)) {
      set.delete(cb);
    }
    if (set.size === 0) {
      this.nodeViewListeners.delete(container);
    } else {
      this.nodeViewListeners.set(container, set);
    }
  }

  addPortalRendererCallback(
    cb: (newPortals: Map<HTMLElement, React.ReactPortal>) => void
  ) {
    this.portalRendererCallback = cb;
    // update immediately
    cb(this.portals);
  }
}
