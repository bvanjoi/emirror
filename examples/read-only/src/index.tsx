import React, { useState } from 'react';
import EMirror from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import BaseKeymap from '@emirror/plugin-basekeymap';

const ReadOnlyEMirror = () => {
  const [editable, setEditable] = useState(false);

  return (
    <div>
      <div onClick={() => setEditable(!editable)}>
        <input
          type='checkbox'
          name='editable'
          id='editable'
          checked={editable}
        />
        <label>editable</label>
      </div>
      <EMirror
        topNode={new Doc()}
        editable={editable}
        plugins={[
          new Paragraph(),
          new Text(),
          new BaseKeymap(),
          new History(),
        ]}
      >
        <p>This is an example show how to config editable in EMirror.</p>
        <p>You can use checkbox the changed this state.</p>
      </EMirror>
    </div>
  );
};

export default ReadOnlyEMirror;
