import React, { useReducer } from 'react';
import {
  EMirrorContext,
  EMirrorProps,
  EMirrorView,
  ViewProvider,
  PluginsProvider,
  AnalyticsProvider,
  RenderProvider,
} from '@emirror/core-react';

export const EMirror = (props: EMirrorProps) => {
  /**
   * forceUpdate NodeViews
   */
  const [state, forceUpdate] = useReducer(x => x + 1, 0);
  return (
    <EMirrorContext.Provider
      value={{
        viewProvider: new ViewProvider(),
        pluginsProvider: new PluginsProvider(),
        analyticsProvider: new AnalyticsProvider(),
        renderProvider: new RenderProvider({ state, forceUpdate }),
      }}
    >
      <EMirrorView {...props} />
    </EMirrorContext.Provider>
  );
};

export default EMirror;
