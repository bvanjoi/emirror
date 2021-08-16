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
import ExceedTip from '@emirror/plugin-exceed-tip';
import BaseKeymap from '@emirror/plugin-basekeymap';

const ExceedTipEMirror = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [
      new Paragraph(),
      new Text(),
      new BaseKeymap(),
      new History(),
      new ExceedTip({ maxSize: 140 }),
    ],
  });

  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <EMirrorComponent>
          <p>
            At some social Apps, such as Weibo, Twitter, The editor has
            restricted the content length of document.
          </p>
          <p>
            And now, ExceedTip plugin had implemented similar feature, If
            you input content exceed 140 chars, it will show error tip. Of
            course, you can define it custom.
          </p>

          <p>
            Meanwhile, as a tip, because of the complexity of Unicode, the
            count of content may be not as you see.
          </p>
          <p>
            Such as 🤚, although it seems to take up 1 char in visual, it
            occurred 2 chars indeed.
          </p>
        </EMirrorComponent>
      </EMirrorContext.Provider>
    )
  );
};

export default ExceedTipEMirror;
