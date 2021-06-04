import React, { useEffect } from 'react';
import { MenuProps } from './types';
import menuPlugin from './plugin';

const BaseMenu = (props: MenuProps) => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const { view, items, children } = props;

  useEffect(() => {
    const { plugins } = view.state;
    plugins.push(menuPlugin({ items, element: elementRef.current }));
    const state = view.state.reconfigure({ plugins });
    view.updateState(state);
  }, []);

  return (
    <div className="base-menu" ref={elementRef}>
      {children}
    </div>
  );
};

export default BaseMenu;
