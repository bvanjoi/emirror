import React, { useState } from 'react';
import EMirror from '@emirror/core';
import { EditorView } from '@emirror/pm/view';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import Heading from '@emirror/plugin-heading';
import HardBreak from '@emirror/plugin-hard-break';
import TextAlign from '@emirror/plugin-text-align';
import HR from '@emirror/plugin-hr';
import Menu from './menu';
// import './style.css';

const TypoEMirror = () => {
  const [view, setView] = useState<EditorView>(null);
  const plugins = {
    textAlign: new TextAlign(),
  };

  return (
    <div className='typo'>
      {view && <Menu view={view} plugins={plugins} />}
      <EMirror
        afterInit={_view => {
          setView(_view);
        }}
        topNode={new Doc()}
        plugins={[
          new Paragraph(),
          new Text(),
          new History(),
          new Heading(),
          new HardBreak(),
          // new HR(),
          ...Object.values(plugins),
        ]}
      >
        <h2 style={{ textAlign: 'center' }}>Believe in the Future</h2>
        <p style={{ textAlign: 'center' }}>
          When cobwebs relentlessly clog my stove
          <br />
          When its dying smoke sighs for poverty
          <br />
          I will stubbornly dig out the disappointing ash
          <br />
          And write with beautiful snowflakes: Believe in the Future
        </p>
        <p style={{ textAlign: 'center' }}>
          When my overripe grapes melt into late autumn dew
          <br />
          When myfresh flower lies in another's arms
          <br />
          I will stubbornly write on the bleak earth
          <br />
          With a dry frozen vine: Believe in the Future
        </p>
      </EMirror>
    </div>
  );
};

export default TypoEMirror;
