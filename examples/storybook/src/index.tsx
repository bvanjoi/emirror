import React from 'react';
import ReactDOM from 'react-dom';
import EMirror from '@emirror/core';
import { Doc } from '@emirror/plugin-doc';
import { Paragraph } from '@emirror/plugin-paragraph';
import { Text } from '@emirror/plugin-text';

const App = () => (
  <div>
    test
    <EMirror plugins={[new Doc(), new Paragraph(), new Text()]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
