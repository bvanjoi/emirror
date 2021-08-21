import React from 'react';
import {
  useEmirror,
  EMirrorContext,
  EMirrorComponent,
} from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import WebsiteCard from '@emirror/plugin-website-card';
import Menu from './menu';

const WebsiteEMirror = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [new Paragraph(), new Text(), new WebsiteCard()],
  });

  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <EMirrorComponent>
          {/* {view && <Menu view={view} plugins={{ websiteCard }} />} */}
          <p>
            this is website card, it provide more infomation of a website.
          </p>
          <div
            className='emirror-website-card'
            data-href='https://github.com/'
          ></div>
        </EMirrorComponent>
      </EMirrorContext.Provider>
    )
  );
};

export default WebsiteEMirror;
