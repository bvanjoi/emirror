import React from 'react';
import {
  useEmirror,
  EMirrorContext,
  EMirrorComponent,
} from '@emirror/react';
import Title from '@emirror/plugin-title';
import TitleDoc from '@emirror/plugin-title-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';

const TitleDocEMirror = () => {
  const emirror = useEmirror({
    topNode: new TitleDoc(),
    emPlugins: [new Title(), new Paragraph(), new Text(), new History()],
  });
  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <EMirrorComponent>
          <p>Enforce First Line to Title.</p>
          <p>This example shows how force layout.</p>
          <p>
            You can edit in any way, and you will find the first line is
            always title.
          </p>
        </EMirrorComponent>
      </EMirrorContext.Provider>
    )
  );
};

export default TitleDocEMirror;
