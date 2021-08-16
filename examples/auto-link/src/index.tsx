import React from 'react';
import {
  useEmirror,
  EMirrorComponent,
  EMirrorContext,
} from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import Link from '@emirror/plugin-link';
import History from '@emirror/plugin-history';
import BaseKeymap from '@emirror/plugin-basekeymap';

const LinkEmirror = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [
      new Paragraph(),
      new Text(),
      new BaseKeymap(),
      new Link(),
      new History(),
    ],
  });

  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <EMirrorComponent>
          <p>
            This is a<span> </span>
            <a href='https://google.com' target='_blank' rel='noreferrer'>
              link
            </a>
            <span> </span>
            point at Google.
          </p>
          <p>Auto-Link will be coming soon.</p>
        </EMirrorComponent>
      </EMirrorContext.Provider>
    )
  );
};

export default LinkEmirror;
