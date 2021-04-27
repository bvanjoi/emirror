import React from 'react';
import {
  EMirrorContext,
  EMirrorProps,
  EMirrorView,
  ViewProvider,
  PluginsProvider,
  AnalyticsProvider,
} from '@emirror/core-react';

export const EMirror = (props: EMirrorProps) => (
  <EMirrorContext.Provider
    value={{
      viewProvider: new ViewProvider(),
      pluginsProvider: new PluginsProvider(),
      analyticsProvider: new AnalyticsProvider(),
    }}
  >
    <EMirrorView {...props} />
  </EMirrorContext.Provider>
);

export default EMirror;
