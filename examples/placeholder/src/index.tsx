import React from 'react';
import {
  useEmirror,
  EMirrorContext,
  EMirrorComponent,
} from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import Placeholder from '@emirror/plugin-placeholder';

const PlaceholderEMirror = () => {
  const content =
    'This is a empty document, and this is a placeholder, write anything here to eliminate that.';

  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [
      new Paragraph(),
      new Text(),
      new History(),
      new Placeholder({ content }),
    ],
  });
  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <EMirrorComponent />
      </EMirrorContext.Provider>
    )
  );
};

export default PlaceholderEMirror;
