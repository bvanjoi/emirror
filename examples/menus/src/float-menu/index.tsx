import React, { useEffect } from 'react';
import { useEMirrorContext } from '@emirror/react';
import MenuPlugin from '@emirror/menu-float';
import HeadingBtn from './heading';
import OrderListBtn from './order-list';
import BulletListBtn from './bullet-list';
import ParagraphBtn from './paragraph';
import './style.css';

const Menu = () => {
  const emirror = useEMirrorContext();
  const divRef = React.useRef(null);

  useEffect(() => {
    if (!divRef.current) {
      return;
    }
    const newState = emirror.view.state.reconfigure({
      plugins: [
        ...emirror.view.state.plugins,
        MenuPlugin({
          element: divRef.current,
        }),
      ],
    });
    emirror.view.updateState(newState);
  }, []);

  return (
    <div className='float-menu-container hidden-menu' ref={divRef}>
      <ParagraphBtn />
      <HeadingBtn />
      <BulletListBtn />
      <OrderListBtn />
    </div>
  );
};

export default Menu;
