import React, { useState } from 'react';
import InlineButton from './inline';
import BlockButton from './block';
import RemoveButton from './remove';
import { useEMirrorContext } from '@emirror/react';

const Menu = () => {
  const emirror = useEMirrorContext;
  const [ids, setIDs] = useState<
    { id: string; type: 'inline' | 'block' }[]
  >([]);

  const addId = (id: string, type: 'inline' | 'block') => {
    setIDs([...ids, { id, type }]);
  };
  const removeId = (_id: string) => {
    setIDs(ids.filter(({ id }) => _id !== id));
  };

  return (
    <>
      <div>
        <InlineButton addId={addId} />
        <BlockButton addId={addId} />
      </div>
      <RemoveButton removeId={removeId} ids={ids} />
    </>
  );
};

export default Menu;
