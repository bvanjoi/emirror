import React from 'react';
import { uploadImageFromLocal } from '@emirror/plugin-image';
import icon from './assets/icon.svg';
import { MenuButton, useEMirrorContext } from '@emirror/react';

const UploadBtnFromCDN = () => {
  const emirror = useEMirrorContext();

  return (
    <MenuButton
      onClick={() => {
        const url = window.prompt('URL');
        emirror.runCommand(emirror.commands.insertImageAtNowPos(url));
        emirror.view.focus();
      }}
    >
      <img src={icon} alt='image-icon' />
    </MenuButton>
  );
};

const UploadBtnFromLoacl = () => {
  const emirror = useEMirrorContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length) {
      uploadImageFromLocal(
        emirror.view,
        e.target.files[0],
        emirror.emPlugins.nodePlaceholder.nodePlaceholderKey,
      );
    }

    emirror.view.focus();
  };
  return <input type='file' onChange={handleChange} />;
};

const Menu = () => (
  <UploadBtnFromLoacl />
  // <MenuContainer view={view} items={plugins} menuPlugin={MenuPlugin}>
  // {/* <UploadBtnFromCDN view={view} plugin={plugins.image} /> */}
  // </MenuContainer>
);

export default Menu;
