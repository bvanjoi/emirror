import React from 'react';
import {
  EMirrorContext,
  useEmirrorContext,
  EMirrorProps,
  EMirrorView,
} from '@emirror/core-react';

const EMirror = (props: EMirrorProps) => (
  <EMirrorContext.Provider value={useEmirrorContext()}>
    <EMirrorView plugins={[]} />
  </EMirrorContext.Provider>
);

export default EMirror;
