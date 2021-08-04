import React, { useState } from 'react';
import EMirror from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import BaseKeymap from '@emirror/plugin-basekeymap';
import Editable from '@emirror/plugin-editable';

const ReadOnlyEMirror = () => {
  const [editableState, setEditableState] = useState(false);
  const [view, setView] = useState(null);
  const editable = new Editable();

  const handleClick = (newState: boolean) => {
    editable.commands.setEditable(newState)(undefined, undefined, view);
    setEditableState(newState);
  };

  return (
    <div>
      {view && (
        <>
          <input
            type='checkbox'
            name='editable'
            id='editable'
            checked={editableState}
            onChange={() => {
              handleClick(!editableState);
            }}
          />
          <label>editable</label>
        </>
      )}
      <EMirror
        topNode={new Doc()}
        afterInit={_view => {
          setView(_view);
        }}
        editable={editableState}
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
