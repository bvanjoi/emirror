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
import HighlightBlock from '@emirror/plugin-highlight-block';
import BulletList from '@emirror/plugin-bullet-list';
import ListItem from '@emirror/plugin-list-item';
import OrderList from '@emirror/plugin-order-list';

const emojis = [
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐ฅบ',
  '๐ณ',
  '๐',
  '๐คท',
  '๐',
  '๐ฅถ',
  '๐คฃ',
  '๐',
  '๐ก',
  '๐ฌ',
  '๐ฒ',
  '๐งก',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐ค',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
];

const HighlightBlockEMirror = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [
      new Paragraph(),
      new Text(),
      new History(),
      new HighlightBlock({ emojis }),
      new ListItem(),
      new OrderList(),
      new BulletList(),
    ],
  });

  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <EMirrorComponent>
          <p>Highlight block it make you written some important thing.</p>
          <div className='emirror-highlight-block'>
            <span className='emirror-highlight-emoji'></span>
            <p>You can record here, such as:</p>
            <ul>
              <li>Do not forget to brush your teeth.</li>
            </ul>
          </div>
          <p>
            This example shows how to build a little complex block node.
          </p>
        </EMirrorComponent>
      </EMirrorContext.Provider>
    )
  );
};

export default HighlightBlockEMirror;
