import React from 'react';
import Emirror from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import Link from '@emirror/plugin-link';
import History from '@emirror/plugin-history';

const LinkEmirror = () => (
  <div>
    <Emirror
      topNode={new Doc()}
      plugins={[new Paragraph(), new Text(), new Link(), new History()]}
    >
      <p>
        This is a<span> </span>
        <a href='https://google.com' target='_blank' rel='noreferrer'>
          link
        </a>
        <span> </span>
        point at Google.
      </p>
      <p>Auto-Link will be coming soon.</p>
    </Emirror>
  </div>
);

export default LinkEmirror;
