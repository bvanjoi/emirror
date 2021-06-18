import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const CenterDiv = styled.div`
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

type Props = {
  routeComponents: {
    path: string;
    component: React.ComponentType;
  }[];
};

const Routes = (props: Props) => {
  const { routeComponents } = props;
  return (
    <Switch>
      <CenterDiv className="editor">
        {routeComponents.map((c) => (
          <Route
            exact
            key={c.path}
            path={`/${c.path}`}
            component={c.component}
          />
        ))}
        <Redirect to="/default" />
      </CenterDiv>
    </Switch>
  );
};

export default Routes;
