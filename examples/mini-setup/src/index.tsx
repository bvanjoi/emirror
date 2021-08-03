import React from 'react';
import EMirror from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import BaseKeymap from '@emirror/plugin-basekeymap';

const MiniEMirror = () => (
  <EMirror
    topNode={new Doc()}
    plugins={[
      new Paragraph(),
      new Text(),
      new BaseKeymap(),
      new History(),
    ]}
  >
    <p>
      This is the minimum setup of EMirror, which only contains the basic
      structure and basic operations.
    </p>
    <p>You can insert some chars, and delete it by Backspace.</p>
    <p>
      And then, it also supports basic shortcuts such as Ctrl-z for undo;
      Ctrl-a to select all text; Ctrl-c to copy text.
    </p>
    <p>
      But don't worry, EMirror is under development, more fantastic will be
      coming soon.
    </p>
  </EMirror>
);

export default MiniEMirror;
