import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Routes from './routes';
import { Nav, Introduction, ShowCodeLink, SubNavigation } from './components';
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

/**
 * the prefix point examples.
 */
const prefix = 'https://github.com/bvanjoi/emirror/tree/main/examples';

const App = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location?.pathname);

  useEffect(() => {
    setPathname(location?.pathname);
  }, [location]);

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
  return (
    <AppView>
      <Nav />
      <Introduction />
      <SubNavigation
        pathname={pathname}
        menus={routeComponents.map((editor) => editor.path)}
      />
      <Routes routeComponents={routeComponents} />
      <ShowCodeLink url={`${prefix}${pathname}`} />
    </AppView>
  );
};

export default App;
