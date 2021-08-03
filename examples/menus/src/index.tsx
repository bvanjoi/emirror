import React, { useState } from 'react';
import EMirror from '@emirror/react';
import { EditorView } from '@emirror/pm/view';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import Italic from '@emirror/plugin-italic';
import Strike from '@emirror/plugin-strike';
import Bold from '@emirror/plugin-bold';
import Heading from '@emirror/plugin-heading';
import BulletList from '@emirror/plugin-bullet-list';
import ListItem from '@emirror/plugin-list-item';
import OrderList from '@emirror/plugin-order-list';
import BaseKeymap from '@emirror/plugin-basekeymap';
import PopoverMenu from './popover-menu';
import FloatMenu from './float-menu';

const MenusEMirror = () => {
  const [view, setView] = useState<EditorView>(null);

  const popoverPlugins = {
    bold: new Bold(),
    italic: new Italic(),
    strike: new Strike(),
  };

  const floatPlugins = {
    paragraph: new Paragraph(),
    heading: new Heading(),
    bulletList: new BulletList(),
    orderList: new OrderList(),
  };

  return (
    <div style={{ position: 'relative' }}>
      {view && <PopoverMenu view={view} plugins={popoverPlugins} />}
      {view && <FloatMenu view={view} plugins={floatPlugins} />}
      <EMirror
        afterInit={_view => {
          setView(_view);
        }}
        topNode={new Doc()}
        plugins={[
          new Text(),
          new BaseKeymap(),
          new ListItem(),
          ...Object.values(popoverPlugins),
          ...Object.values(floatPlugins),
        ]}
      >
        <p>This example show:</p>
        <ul>
          <li>
            Popover menu, you can select some areas anything to get it.
          </li>
          <li>
            Float menu, when you focus on the first of paragraph, it will
            appear.
          </li>
        </ul>
        <p></p>
      </EMirror>
    </div>
  );
};

export default MenusEMirror;
