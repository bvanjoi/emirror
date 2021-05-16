import React from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import ExceedTip from '@emirror/plugin-exceed-tip';

const MiniEMirror = () => {
  return (
    <EMirror
      topNode={new Doc()}
      plugins={[
        new Paragraph(),
        new Text(),
        new History(),
        new ExceedTip({ maxSize: 140 }),
      ]}
    >
      <p>
        At some social Apps, such as weibo, Twitter, The editor has restrict the
        content length of document.
      </p>
      <p>
        And now, ExceedTip plugin had implement similar feature, If you input
        content exceed 140 chars, it will show error tip. Of course, you can
        define it custom.
      </p>

      <p>
        Meanwhile, as a tip, because of the complexity of unicode, the count of
        content may be not as you see.
      </p>
      <p>
        such as 🤚, although it seems take up 1 char in visual, it occur 2 chars
        indeed.
      </p>
    </EMirror>
  );
};

export default MiniEMirror;
