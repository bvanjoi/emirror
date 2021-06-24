import React, { useEffect } from 'react';
import cls from 'classnames';
import { MenuProps } from './types';

/**
 * The container for menu view.
 * register the PM plugin and update.
 */
const MenuContainer = (props: MenuProps) => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const { view, items, children, className, menuPlugin } = props;

  useEffect(() => {
    const { plugins } = view.state;
    plugins.push(menuPlugin({ items, element: elementRef.current }));
    const state = view.state.reconfigure({ plugins });
    view.updateState(state);
  }, []);

  return (
    <div className={cls('menu-container', className)} ref={elementRef}>
      {children}
    </div>
  );
};

export default MenuContainer;
