import React from 'react';
import ReactDOM from 'react-dom';
import EMirror from '@emirror/core';
import { Doc } from '@emirror/plugin-doc';
import { Paragraph } from '@emirror/plugin-paragraph';
import { Text } from '@emirror/plugin-text';
import { History } from '@emirror/plugin-history';
import { Bold } from '@emirror/plugin-bold';
import { Italic } from '@emirror/plugin-italic';
import { Strike } from '@emirror/plugin-strike';
import { Underline } from '@emirror/plugin-underline';
import { Code } from '@emirror/plugin-code';
// import { Code as CodeReact } from '@emirror/plugin-react-code';

const App = () => (
  <div>
    test
    <EMirror
      plugins={[
        new Doc(),
        new Paragraph(),
        new Text(),
        new History(),
        new Bold(),
        new Italic(),
        new Strike(),
        new Underline(),
        new Code(),
        // new CodeReact(),
      ]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
