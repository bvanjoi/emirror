import React from 'react';
import {
  EMirrorComponent,
  EMirrorContext,
  useEmirror,
} from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import Image from '@emirror/plugin-image';
import History from '@emirror/plugin-history';
import NodePlaceholder from '@emirror/plugin-node-placeholder';
import Menu from './menu';

const IMG_SOURCE =
  'https://d3d9mb8xdsbq52.cloudfront.net/180919/20180919205914804.jpg';
const GIF_SOURCE = 'https://media.giphy.com/media/OzHKDlB6CqwZG/giphy.gif';

const ImageEmirror = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [
      new Paragraph(),
      new Text(),
      new History(),
      new Image(),
      new NodePlaceholder(),
    ],
  });

  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <Menu />
        <EMirrorComponent>
          <p>EMirror also provide image plugin.</p>
          <img src={IMG_SOURCE} />
          <p>It also supports GIF:</p>
          <img src={GIF_SOURCE} />
          <p>
            It also supports upload form local, but in real world, It
            better to upload to CDN firstly.
          </p>
        </EMirrorComponent>
      </EMirrorContext.Provider>
    )
  );
};

export default ImageEmirror;
