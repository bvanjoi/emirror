import React from 'react';
import styled from 'styled-components';
import Routes from './routes';
import {
  Nav,
  Introduction,
  ShowCodeLink,
  SubNavigation,
} from './components';
import {
  MiniEMirror,
  DefaultEMirror,
  ReadOnlyEMirror,
  HighlightEMirror,
  TitleDocEMirror,
  PlaceholderEMirror,
  ExceedTipEditor,
  TodoEditor,
  LatexEditor,
  imageEditor,
  codeEditor,
} from './pages';
import './App.css';

const AppView = styled.div`
  * {
    box-sizing: border-box;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 18px;
`;

const EditorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 18px;
  max-width: 760px;
  width: 100%;

  .emirror {
    margin-top: 2px;
  }

  @media screen and (max-width: 440px) {
    .emirror {
      width: 96%;
    }
  }

  @media screen and (min-width: 440px) {
    .emirror {
      width: 760px;
    }
  }
`;

/**
 * the prefix point examples.
 */
const prefix = 'https://github.com/bvanjoi/emirror/tree/main/examples';

const routeComponents = [
  {
    path: 'mini-setup',
    component: MiniEMirror,
  },
  {
    path: 'default',
    component: DefaultEMirror,
  },
  {
    path: 'read-only',
    component: ReadOnlyEMirror,
  },
  {
    path: 'title-doc',
    component: TitleDocEMirror,
  },
  {
    path: 'highlight-block',
    component: HighlightEMirror,
  },
  {
    path: 'placeholder',
    component: PlaceholderEMirror,
  },
  {
    path: 'exceed-tip',
    component: ExceedTipEditor,
  },
  {
    path: 'todo-list',
    component: TodoEditor,
  },
  {
    path: 'latex',
    component: LatexEditor,
  },
  {
    path: 'image',
    component: imageEditor,
  },
  {
    path: 'code-editor',
    component: codeEditor,
  },
];

const App = () => {
  return (
    <AppView>
      <Nav />
      <Introduction />
      <SubNavigation
        menus={routeComponents.map((editor) => editor.path)}
      />
      <EditorContainer>
        <Routes routeComponents={routeComponents} />
      </EditorContainer>
      <ShowCodeLink url={`${prefix}${location.pathname}`} />
    </AppView>
  );
};

export default App;
