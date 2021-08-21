import React, { useState } from 'react';
import {
  useEmirror,
  EMirrorContext,
  EMirrorComponent,
} from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import Editable from '@emirror/plugin-editable';

const ReadOnlyEMirror = () => {
  const [editableState, setEditableState] = useState(false);
  const emirror = useEmirror({
    topNode: new Doc(),
    editable: editableState,
    emPlugins: [
      new Paragraph(),
      new Text(),
      new History(),
      new Editable(),
    ],
  });

  const handleClick = (newState: boolean) => {
    emirror.runCommand(emirror.commands.setEditable(newState));
    setEditableState(newState);
  };

  return (
    emirror && (
      <div>
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
        <EMirrorContext.Provider value={emirror}>
          <EMirrorComponent>
            <p>
              This is an example show how to config editable in EMirror.
            </p>
            <p>You can use checkbox the changed this state.</p>
          </EMirrorComponent>
        </EMirrorContext.Provider>
      </div>
    )
  );
};

export default ReadOnlyEMirror;
