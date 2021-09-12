import React from 'react';
import {
  useEmirror,
  EMirrorContext,
  EMirrorComponent,
} from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import NodePlaceholderInline from '@emirror/plugin-node-placeholder-inline';
import NodePlaceholderBlock from '@emirror/plugin-node-placeholder-block';
import Menu from './menu';

const NodePlaceholderEMirror = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [
      new Paragraph(),
      new Text(),
      new History(),
      new NodePlaceholderBlock(),
      new NodePlaceholderInline(),
    ],
  });

  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <Menu />
        <EMirrorComponent>
          <p>
            Sometimes we need some asynchronous operations, for example
            upload image.
          </p>
          <p>
            The best way to implement it is that insert a node placeholder,
            which take up this position and will replace by image node
            after image uploaded.
          </p>
          <p>
            This is inline node placeholder: <span> </span>
            <span className='emirror-node-placeholder-inline' />
          </p>
          <p>
            This is block node placeholder: <span> </span>
          </p>
          <div className='emirror-node-placeholder-block' />
        </EMirrorComponent>
      </EMirrorContext.Provider>
    )
  );
};

export default NodePlaceholderEMirror;
