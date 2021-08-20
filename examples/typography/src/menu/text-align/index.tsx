import React from 'react';
import { Property } from 'csstype';
import center from './assets/center.svg';
import justify from './assets/justify.svg';
import left from './assets/left.svg';
import right from './assets/right.svg';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isActive } from '@emirror/core-helpers';

const TextAlignBtns = () => {
  const icons = [left, right, center, justify];
  const attrs = ['left', 'right', 'center', 'justify'];
  const emirror = useEMirrorContext();

  return (
    <React.Fragment>
      {icons.map((icon, index) => (
        <MenuButton
          key={index}
          activated={isActive(
            emirror.view.state,
            emirror.emPlugins.textAlign,
            { textAlign: attrs[index] },
          )}
          onClick={() => {
            emirror.runCommand(
              emirror.commands.setTextAlign(
                attrs[index] as Property.TextAlign,
              ),
            );
            emirror.view.focus();
          }}
        >
          <img src={icon} />
        </MenuButton>
      ))}
    </React.Fragment>
  );
};

export default TextAlignBtns;
