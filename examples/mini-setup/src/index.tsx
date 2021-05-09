import React from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';

const MiniEMirror = () => {
  return (
    <EMirror plugins={[new Doc(), new Paragraph(), new Text(), new History()]}>
      <p>
        This is the minimun setup of EMirror, which only contains the basic
        structure and basic operations.
      </p>
      <p>You can insert some chars, and delete it by BackSpace.</p>
      <p>
        And then, it suppoter basic shortcuts such as ctrl-z for undo; ctrl-a to
        select all text; ctrl-c to copy text.
      </p>
      <p>
        But don't worry, EMirror is under devlopment, more fantastic will be
        coming soon.
      </p>
    </EMirror>
  );
};

export default MiniEMirror;
