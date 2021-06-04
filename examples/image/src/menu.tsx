import React from 'react';
import BaseMenu from '@emirror/menu';
import { EditorView } from '@emirror/pm/view';
import styled from 'styled-components';
import Image from '@emirror/plugin-image';

type Props = {
  view: EditorView;
  plugins: { image: Image };
};

const ActiveButton = styled.button`
  &.is-active {
    background-color: rgba(0, 0, 0);
    color: white;
  }
`;

const UploadBtnFromCDN = ({
  view,
  plugin,
}: {
  view: EditorView;
  plugin: Image;
}) => (
  <ActiveButton
    data-plugin-name={plugin.name}
    onClick={() => {
      const url = window.prompt('URL');
      plugin.commands.insertImageAtNowPos(url, view);
    }}
  >
    upload image
  </ActiveButton>
);

const Menu = (props: Props) => {
  const { view, plugins } = props;

  return (
    <BaseMenu view={view} items={plugins}>
      <UploadBtnFromCDN view={view} plugin={plugins.image} />
    </BaseMenu>
  );
};

export default Menu;
