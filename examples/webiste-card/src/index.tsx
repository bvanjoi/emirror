import React, { useState } from 'react';
import EMirror from '@emirror/react';
import { EditorView } from '@emirror/pm/view';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import WebsiteCard from '@emirror/plugin-website-card';
import BaseKeymap from '@emirror/plugin-basekeymap';
import Menu from './menu';

const TitleDocEMirror = () => {
  const [view, setView] = useState<EditorView>(null);

  const websiteCard = new WebsiteCard();

  return (
    <div>
      {view && <Menu view={view} plugins={{ websiteCard }} />}
      <EMirror
        afterInit={_view => {
          setView(view);
        }}
        topNode={new Doc()}
        plugins={[
          new Paragraph(),
          new Text(),
          new BaseKeymap(),
          websiteCard,
        ]}
      >
        <p>
          this is website card, it provide more infomation of a website.
        </p>
        <div
          className='emirror-website-card'
          data-href='https://github.com/'
        ></div>
      </EMirror>
    </div>
  );
};

export default TitleDocEMirror;
