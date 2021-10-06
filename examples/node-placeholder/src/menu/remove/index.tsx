import React from 'react';
import { useEMirrorContext } from '@emirror/react';

type Props = {
  ids: { id: string; type: 'inline' | 'block' }[];
  removeId(id: string): void;
};

const RemoveButton = ({ removeId, ids }: Props) => {
  const emirror = useEMirrorContext();

  function handleRemoveClick(item: {
    id: string;
    type: 'inline' | 'block';
  }) {
    const node = emirror.view.state.schema.text(' ');
    removeId(item.id);
    if (item.type === 'inline') {
      emirror.runCommand(
        emirror.commands.removeInlineNodePlaceholder(node, item.id),
      );
    } else if (item.type === 'block') {
      emirror.runCommand(
        emirror.commands.removeBlockNodePlaceholder(node, item.id),
      );
    }

    emirror.view.focus();
  }

  return (
    <div>
      {ids.map(item => (
        <button key={item.id} onClick={() => handleRemoveClick(item)}>
          remove {item.id}
        </button>
      ))}
    </div>
  );
};

export default RemoveButton;
