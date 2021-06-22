import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../basic-components/loading';

const Editor = loadable(() => import('@emirror/example-todo-list'), {
  fallback: <Loading />,
});

export default Editor;
