import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

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
      {routeComponents.map(c => (
        <Route
          exact
          key={c.path}
          path={`/${c.path}`}
          component={c.component}
        />
      ))}
      <Redirect to='/default' />
    </Switch>
  );
};

export default Routes;
