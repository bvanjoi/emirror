import React from 'react';
import {
  useEmirror,
  EMirrorContext,
  EMirrorComponent,
} from '@emirror/react';
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
import History from '@emirror/plugin-history';
import PopoverMenu from './popover-menu';
import FloatMenu from './float-menu';

const MenusEMirror = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [
      new Bold(),
      new Italic(),
      new Strike(),
      new Paragraph(),
      new Heading(),
      new BulletList(),
      new OrderList(),
      new Text(),
      new ListItem(),
      new History(),
    ],
  });

  return (
    emirror && (
      <div style={{ position: 'relative' }}>
        <EMirrorContext.Provider value={emirror}>
          <PopoverMenu />
          <FloatMenu />
          <EMirrorComponent>
            <p>This example show:</p>
            <ul>
              <li>
                Popover menu, you can select some area's anything to get
                it.
              </li>
              <li>
                Float menu, when you focus on the first of paragraph, it
                will appear.
              </li>
            </ul>
            <p></p>
          </EMirrorComponent>
        </EMirrorContext.Provider>
      </div>
    )
  );
};

export default MenusEMirror;
