import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../basic-components/loading';

const Editor = loadable(
  () => import('@emirror/example-node-placeholder'),
  {
    fallback: <Loading />,
  },
);

export default Editor;
