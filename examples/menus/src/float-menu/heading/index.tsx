import React from 'react';
import { MenuButton, useEMirrorContext } from '@emirror/react';
import { isNodeActive } from '@emirror/core-helpers';
import h1Icon from './assets/h1-icon.svg';
import h2Icon from './assets/h2-icon.svg';
import h3Icon from './assets/h3-icon.svg';
import h4Icon from './assets/h4-icon.svg';
import h5Icon from './assets/h5-icon.svg';
import h6Icon from './assets/h6-icon.svg';

const HeadingBtn = () => {
  const emirror = useEMirrorContext();
  const levels = [1, 2, 3, 4, 5, 6];
  const icons = [h1Icon, h2Icon, h3Icon, h4Icon, h5Icon, h6Icon];

  return (
    <React.Fragment>
      {levels.map((level, index) => (
        <MenuButton
          key={level}
          activated={isNodeActive(
            emirror.view.state,
            emirror.emPlugins.heading.name,
            { level },
          )}
          onClick={() => {
            emirror.runCommand(emirror.commands.toggleHeading(level));
            emirror.view.focus();
          }}
        >
          <img src={icons[index]} />
        </MenuButton>
      ))}
    </React.Fragment>
  );
};

export default HeadingBtn;
