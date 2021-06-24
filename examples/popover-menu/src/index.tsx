import React, { useState } from 'react';
import EMirror from '@emirror/core';
import { EditorView } from '@emirror/pm/view';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import Italic from '@emirror/plugin-italic';
import Strike from '@emirror/plugin-strike';
import Bold from '@emirror/plugin-bold';
import Menu from './menu';

const DefaultEMirror = () => {
  const [view, setView] = useState<EditorView>(null);

  const plugins = {
    bold: new Bold(),
    italic: new Italic(),
    strike: new Strike(),
  };

  return (
    <div style={{ position: 'relative' }}>
      {view && <Menu view={view} plugins={plugins} />}
      <EMirror
        afterInit={_view => {
          setView(_view);
        }}
        topNode={new Doc()}
        plugins={[new Paragraph(), new Text(), ...Object.values(plugins)]}
      >
        <p>
          This example show popover menu, you can selction any thing to get
          the menu.
        </p>
      </EMirror>
    </div>
  );
};

export default DefaultEMirror;
