import React from 'react';
import MenuContainer, { BasicMenuBtn } from '@emirror/menu-basic-react';
import MenuPlugin from '@emirror/menu';
import { EditorView } from '@emirror/pm/view';
import { Command } from '@emirror/pm/commands';
import Image from '@emirror/plugin-image';
import icon from './assets/icon.svg';

type Props = {
  view: EditorView;
  plugins: { image: Image };
};

const UploadBtnFromCDN = ({
  view,
  plugin,
}: {
  view: EditorView;
  plugin: Image;
}) => {
  const handleClick: Command = (state, disptach) => {
    const url = window.prompt('URL');
    return plugin.commands.insertImageAtNowPos(url)(state, disptach);
  };

  return (
    <BasicMenuBtn view={view} onClick={handleClick}>
      <img src={icon} alt='blockquote-icon' />
    </BasicMenuBtn>
  );
};

const Menu = (props: Props) => {
  const { view, plugins } = props;

  return (
    <MenuContainer view={view} items={plugins} menuPlugin={MenuPlugin}>
      <UploadBtnFromCDN view={view} plugin={plugins.image} />
    </MenuContainer>
  );
};

export default Menu;
