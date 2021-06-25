import React from 'react';
import Heading from '@emirror/plugin-heading';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-react-basic';
import h1Icon from './assets/h1-icon.svg';
import h2Icon from './assets/h2-icon.svg';
import h3Icon from './assets/h3-icon.svg';
import h4Icon from './assets/h4-icon.svg';
import h5Icon from './assets/h5-icon.svg';
import h6Icon from './assets/h6-icon.svg';

type Props = {
  plugin: Heading;
  view: EditorView;
};

const HeadingBtn = ({ view, plugin }: Props) => {
  const levels = [1, 2, 3, 4, 5, 6];
  const icons = [h1Icon, h2Icon, h3Icon, h4Icon, h5Icon, h6Icon];

  return (
    <React.Fragment>
      {levels.map((level, index) => (
        <BasicMenuBtn
          key={level}
          view={view}
          plugin={plugin}
          onClick={plugin.commands.toggleHeading(level)}
          attrs={{ level }}
        >
          <img src={icons[index]} />
        </BasicMenuBtn>
      ))}
    </React.Fragment>
  );
};

export default HeadingBtn;
