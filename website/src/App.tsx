import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Routes from './routes';
import { Nav, Introduction, ShowCodeLink, SubNavigation } from './components';
import { MiniEMirror, DefaultEMirror } from './pages';

const AppView = styled.div`
  * {
    box-sizing: border-box;
  }

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .emirror {
    border: 1px solid black;
    border-radius: 20px;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 800px) {
    .emirror {
      max-width: calc(100% - 8px);
    }
  }
  @media screen and (min-width: 800px) {
    .emirror {
      width: 760px;
    }
  }
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
      path: 'emirror/mini-setup',
      component: MiniEMirror,
    },
    {
      path: 'emirror/default',
      component: DefaultEMirror,
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
