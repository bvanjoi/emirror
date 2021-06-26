import React, { useState } from 'react';
import Emirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import Image from '@emirror/plugin-image';
import History from '@emirror/plugin-history';
import { EditorView } from '@emirror/pm/view';
import Menu from './menu';

const IMG_SOURCE =
  'https://d3d9mb8xdsbq52.cloudfront.net/180919/20180919205914804.jpg';
const GIF_SOURCE = 'https://media.giphy.com/media/OzHKDlB6CqwZG/giphy.gif';

const ImageEmirror = () => {
  const [view, setView] = useState<EditorView>(null);
  const image = new Image();

  return (
    <div>
      {view && <Menu view={view} plugins={{ image }} />}
      <Emirror
        afterInit={_view => {
          setView(view);
        }}
        topNode={new Doc()}
        plugins={[new Paragraph(), new Text(), image, new History()]}
      >
        <p>EMirror also provide iamge plugin.</p>
        <img src={IMG_SOURCE}></img>
        <p>It also support gif:</p>
        <img src={GIF_SOURCE} />
        <p>
          It also support upload form local, but in real world, It better
          to upload to CDN firstly.
        </p>
      </Emirror>
    </div>
  );
};

export default ImageEmirror;
