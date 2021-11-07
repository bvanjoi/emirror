import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

type Props = {
  routeComponents: {
    path: string;
    component: React.ComponentType;
  }[];
};

const PageRoutes = (props: Props) => {
  const { routeComponents } = props;

  return (
    <>
      <Routes>
        {routeComponents.map(c => (
          <Route
            key={c.path}
            path={`${c.path}`}
            element={<c.component />}
          />
        ))}
      </Routes>
    </>
  );
};

export default PageRoutes;
