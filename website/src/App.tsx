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
import Logo from './basic-components/logo';

const AppView = styled.div`
  * {
    box-sizing: border-box;
  }
  margin: 0 auto;
  width: calc(100% - 64px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .emirror {
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 800px) {
    .emirror {
      max-width: calc(100% - 8px);
      min-width: 95%;
    }
  }
  @media screen and (min-width: 800px) {
    .emirror {
      width: 760px;
    }
  }
`;

const StyledLogo = styled(Logo)`
  @media screen and (max-width: 500px) {
    display: none;
  }

  margin-bottom: 16px;
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
      <StyledLogo />
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
