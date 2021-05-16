import React from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import Placeholder from '@emirror/plugin-placeholder';

const MiniEMirror = () => {
  const content =
    'This is a empty document, and this is a placeholder, write anything here to eliminate that.';
  return (
    <EMirror
      topNode={new Doc()}
      plugins={[
        new Paragraph(),
        new Text(),
        new History(),
        new Placeholder({ content }),
      ]}
    />
  );
};

export default MiniEMirror;
