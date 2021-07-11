import React from 'react';
import EMirror from '@emirror/core';
import Title from '@emirror/plugin-title';
import TitleDoc from '@emirror/plugin-title-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';

const TitleDocEMirror = () => (
  <EMirror
    topNode={new TitleDoc()}
    plugins={[new Title(), new Paragraph(), new Text(), new History()]}
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
