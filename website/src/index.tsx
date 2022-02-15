import React from 'react';
import ReactDOM from 'react-dom/client';
import Editor from '@emirror/examples';

import '@emirror/examples/src/style.css';

const container = document.getElementById("root");
if (!container) {
  throw Error("")
}
const root = ReactDOM.createRoot(container);
root.render(<Editor/>)