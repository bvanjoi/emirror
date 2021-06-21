import React, { useEffect } from 'react';
import { MenuProps } from './types';
import menuPlugin from './plugin';

/**
 * The container for menu view.
 * register the PM plugin and update.
 */
const MenuContainer = (props: MenuProps) => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const { view, items, children } = props;

  useEffect(() => {
    const { plugins } = view.state;
    plugins.push(menuPlugin({ items, element: elementRef.current }));
    const state = view.state.reconfigure({ plugins });
    view.updateState(state);
  }, []);

  return (
    <div className='base-menu menu' ref={elementRef}>
      {children}
    </div>
  );
};

export default MenuContainer;
