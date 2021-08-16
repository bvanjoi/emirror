import React from 'react';
import MenuContainer, { BasicMenuBtn } from '@emirror/menu-basic-react';
import MenuPlugin from '@emirror/menu';
import { EditorView } from '@emirror/pm/view';
import { Command } from '@emirror/pm/commands';
import Image, { uploadImageFromLocal } from '@emirror/plugin-image';
import icon from './assets/icon.svg';
import NodePlaceholder from '@emirror/plugin-node-placeholder';

type Props = {
  view: EditorView;
  plugins: { image: Image; nodePlaceholder: NodePlaceholder };
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
      <img src={icon} alt='image-icon' />
    </BasicMenuBtn>
  );
};

const UploadBtnFromLoacl = ({
  view,
  plugin,
}: {
  view: EditorView;
  plugin: NodePlaceholder;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length) {
      uploadImageFromLocal(
        view,
        e.target.files[0],
        plugin.nodePlaceholderKey,
      );
    }

    view.focus();
  };
  return <input type='file' onChange={handleChange} />;
};

const Menu = (props: Props) => {
  const { view, plugins } = props;

  return (
    <UploadBtnFromLoacl view={view} plugin={plugins.nodePlaceholder} />
    // <MenuContainer view={view} items={plugins} menuPlugin={MenuPlugin}>
    // {/* <UploadBtnFromCDN view={view} plugin={plugins.image} /> */}
    // </MenuContainer>
  );
};

export default Menu;
