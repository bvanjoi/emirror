import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../basic-components/loading';

const Editor = loadable(() => import('@emirror/example-auto-link'), {
  fallback: <Loading />,
});

export default Editor;