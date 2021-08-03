import React from 'react';
import EMirror from '@emirror/react';
import Title from '@emirror/plugin-title';
import TitleDoc from '@emirror/plugin-title-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import BaseKeymap from '@emirror/plugin-basekeymap';

const TitleDocEMirror = () => (
  <EMirror
    topNode={new TitleDoc()}
    plugins={[
      new Title(),
      new Paragraph(),
      new Text(),
      new BaseKeymap(),
      new History(),
    ]}
  >
    <p>Enforce First Line to Title.</p>
    <p>This example shows how force layout.</p>
    <p>
      You can edit in any way, and you will find the first line is always
      title.
    </p>
  </EMirror>
);

export default TitleDocEMirror;
