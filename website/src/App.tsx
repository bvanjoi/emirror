import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Routes from './routes';
import { Nav, Introduction, ShowCodeLink, SubNavigation } from './components';
import { MiniEmirror } from './pages';

const AppView = styled.div`
  * {
    box-sizing: border-box;
  }

  padding: 0 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .emirror {
    border: 1px solid #efefef;
    border-radius: 20px;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 800px) {
    .emirror {
      width: calc(100% - 8px);
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
const prefix = 'https://github.com/bvanjoi/emirror/examples';

const App = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location?.pathname);

  useEffect(() => {
    setPathname(location?.pathname);
  }, [location]);

  const routeComponents = [
    {
      path: 'mini-setup',
      component: MiniEmirror,
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
