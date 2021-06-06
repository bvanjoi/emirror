import React from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import CodeEditor from '@emirror/plugin-code-editor';

const CodeEditorEMirror = () => {
  return (
    <div>
      <EMirror
        topNode={new Doc()}
        plugins={[new Paragraph(), new Text(), new History(), new CodeEditor()]}
      >
        <p>
          This plugin is copy from webiste example, and it will expend this
          feature.
        </p>
        <div className="emirror-code-editor">
          {`/**
 * get the sum of a and b.
 * @param(number) a
 * @param(number) b
 */
const add = (a, b) => a + b`}
        </div>
      </EMirror>
    </div>
  );
};

export default CodeEditorEMirror;
