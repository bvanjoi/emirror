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
import LinesCount from '@emirror/plugin-lines-count';

const MiniEMirror = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [
      new Paragraph(),
      new Text(),
      new History(),
      new LinesCount(),
    ],
  });

  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <EMirrorComponent>
          <p>First line</p>
          <p>Second line</p>
          <p>There are performance issues with this approach.</p>
        </EMirrorComponent>
      </EMirrorContext.Provider>
    )
  );
};

export default MiniEMirror;
