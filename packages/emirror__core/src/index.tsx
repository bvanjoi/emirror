import React from 'react';
import {
  EMirrorContext,
  useEmirrorContext,
  EMirrorProps,
  EMirrorView,
} from '@emirror/core-react';

export const EMirror = (props) => (
  <EMirrorContext.Provider value={useEmirrorContext()}>
    <EMirrorView {...props} />
  </EMirrorContext.Provider>
);

export default EMirror;
