import React from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import HighlightBlock from '@emirror/plugin-react-highlight-block';
import BulletList from '@emirror/plugin-bullet-list';
import ListItem from '@emirror/plugin-list-item';
import OrderList from '@emirror/plugin-order-list';

const MiniEMirror = () => {
  return (
    <EMirror
      topNode={new Doc()}
      plugins={[
        new Paragraph(),
        new Text(),
        new History(),
        new HighlightBlock(),
        new ListItem(),
        new OrderList(),
        new BulletList(),
      ]}
    >
      <p>HighLight block it make you written some important thing.</p>
      <div className="emirror-highlight-block">
        <p>Yaou can record here, such as:</p>
        <ul>
          <li>Do not forget to brush your teeth.</li>
        </ul>
      </div>
      <p>
        This example shows how build a little complex block node by using React
        Component.
      </p>
    </EMirror>
  );
};

export default MiniEMirror;
