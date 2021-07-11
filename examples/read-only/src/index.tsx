import React, { useState } from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';

const ReadOnlyEMirror = () => {
  const [editable, setEditable] = useState(false);

  return (
    <div>
      <input
        type='checkbox'
        name='editable'
        id='editable'
        checked={editable}
        onChange={() => setEditable(!editable)}
      />
      <label>editable</label>
      <EMirror
        topNode={new Doc()}
        editable={editable}
        plugins={[new Paragraph(), new Text(), new History()]}
      >
        <p>This is an example show how to config editable of EMirror.</p>
        <p>You can use checkbox the changed this state.</p>
      </EMirror>
    </div>
  );
};

export default ReadOnlyEMirror;
