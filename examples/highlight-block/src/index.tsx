import React from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import HighlightBlock from '@emirror/plugin-react-highlight-block';

const MiniEMirror = () => {
  return (
    <EMirror
      topNode={new Doc()}
      plugins={[
        new Paragraph(),
        new Text(),
        new History(),
        new HighlightBlock(),
      ]}
    >
      <p>HighLight block it make you written some important thing.</p>
      <div className="emirror-highlight-block">
        <p>Yaou can record things here.</p>
      </div>
      <p>
        This example shows how build a little complex block node by using React
        Component.
      </p>
    </EMirror>
  );
};

export default MiniEMirror;
