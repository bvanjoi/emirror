import React from 'react';
import {
  PluginsProvider,
  ViewProvider,
  AnalyticsProvider
} from '@emirror/core-provider';

export { PluginsProvider, ViewProvider, AnalyticsProvider };

export type ContextProps = {
  /**
   * The view of Prosemirror.
   */
  viewProvider: ViewProvider;
  /**
   * All plugins of EMirror.
   */
  pluginsProvider: PluginsProvider;
  /**
   * Analytics action.
   */
  analyticsProvider: AnalyticsProvider;
};

/**
 * The React.Context for EMirror.
 */
export const EMirrorContext = React.createContext<ContextProps | null>(
  null
);

/**
 *
 * @returns The hooks for emirror context
 */
export const useEmirrorContext = () =>
  React.useContext(EMirrorContext);
