import React from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import Bold from '@emirror/plugin-bold';
import Code from '@emirror/plugin-code';
import Italic from '@emirror/plugin-italic';
import Strike from '@emirror/plugin-strike';
import UnderLine from '@emirror/plugin-underline';

const DefaultEMirror = () => {
  return (
    <EMirror
      plugins={[
        new Doc(),
        new Paragraph(),
        new Text(),
        new History(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new UnderLine(),
      ]}
    >
      <p>This is the default setup of EMirror.</p>
      <p>
        It not only contains the baisc features of MiniEMirror, It also contians
        that:
      </p>
      <p>
        1. You can input <strong>bold font</strong> by ctrl + b;
      </p>
      <p>
        2. You can input <u>underline font</u> font by ctrl + u.
      </p>
      <p>
        3. And It also contians <i>italic</i>, <code>code</code>, <s>strike</s>
        ...
      </p>
      <p>Also, It support relative Markdown shortcuts.</p>
      <p>More features is under development.</p>
    </EMirror>
  );
};

export default DefaultEMirror;
