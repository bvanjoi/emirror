import React from 'react';
import {
  PluginsProvider,
  PortalProvider,
  ViewProvider,
  AnalyticsProvider
} from '@emirror/core-provider';

/**
 * The React.Context for EMirror.
 */
export const EMirrorContext = React.createContext({
  /**
   * The view of Prosemirror.
   */
  viewProvider: new ViewProvider(),
  /**
   * All plugins of EMirror.
   */
  pluginsProvider: new PluginsProvider(),
  /**
   * All reactPortal of EMirror.
   */
  portalProvider: new PortalProvider(),
  /**
   * Analytics action.
   */
  analyticsProvider: new AnalyticsProvider(),
});

/**
 *
 * @returns The hooks for emirror context
 */
export const useEmirrorContext = () =>
  React.useContext(EMirrorContext);
