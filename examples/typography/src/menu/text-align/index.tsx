import React from 'react';
import TextAlign from '@emirror/plugin-text-align';
import { EditorView } from '@emirror/pm/view';
import { BasicMenuBtn } from '@emirror/menu-basic-react';
import { Property } from 'csstype';
import center from './assets/center.svg';
import justify from './assets/justify.svg';
import left from './assets/left.svg';
import right from './assets/right.svg';

type Props = {
  plugin: TextAlign;
  view: EditorView;
};

const TextAlignBtns = ({ view, plugin }: Props) => {
  const icons = [left, right, center, justify];
  const attrs = ['left', 'right', 'center', 'justify'];
  const commands = 'setTextAlign';

  return (
    <React.Fragment>
      {icons.map((icon, index) => (
        <BasicMenuBtn
          key={index}
          view={view}
          plugin={plugin}
          onClick={plugin.commands[commands](
            attrs[index] as Property.TextAlign,
          )}
          attrs={{ textAlign: attrs[index] }}
        >
          <img src={icon} />
        </BasicMenuBtn>
      ))}
    </React.Fragment>
  );
};

export default TextAlignBtns;
