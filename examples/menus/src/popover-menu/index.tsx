import React, { useEffect } from 'react';
import MenuPlugin from '@emirror/menu-popover';
import { useEMirrorContext } from '@emirror/react';
import BoldBtn from './bold';
import ItalicBtn from './italic';
import StrikeBtn from './strike';
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
    <div className='popover-menu-container' ref={divRef}>
      <BoldBtn />
      <ItalicBtn />
      <StrikeBtn />
    </div>
  );
};

export default Menu;
