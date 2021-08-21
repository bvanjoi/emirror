import React from 'react';
import {
  useEmirror,
  EMirrorComponent,
  EMirrorContext,
} from '@emirror/react';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import CodeEditor from '@emirror/plugin-codemirror5';

const CodeEditorEMirror = () => {
  const emirror = useEmirror({
    topNode: new Doc(),
    emPlugins: [
      new Paragraph(),
      new Text(),
      new History(),
      new CodeEditor(),
    ],
  });

  return (
    emirror && (
      <EMirrorContext.Provider value={emirror}>
        <EMirrorComponent>
          <p>
            This plugin is copy from website example, and it will expend
            this feature.
          </p>
          <div className='emirror-codemirror5'>
            {`/**
 * get the sum of a and b.
 * @param(number) a
 * @param(number) b
 */
const add = (a, b) => a + b`}
          </div>
        </EMirrorComponent>
      </EMirrorContext.Provider>
    )
  );
};

export default CodeEditorEMirror;
