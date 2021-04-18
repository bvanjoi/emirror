import React, { useEffect, useReducer, useState } from 'react';
import { useEmirrorContext } from './EMirrorContext';

export type HTMLElement2ReactPortal = Map<
  HTMLElement,
  React.ReactPortal
>;

const PortalRenderer = () => {
  const { portalProvider } = useEmirrorContext();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [portals, setPortals] = useState<HTMLElement2ReactPortal>(
    new Map()
  );

  const onUpdatePortals = (newPortals: HTMLElement2ReactPortal) => {
    setPortals(newPortals);
    forceUpdate();
  };

  useEffect(() => {
    portalProvider.addPortalRendererCallback(onUpdatePortals);
  }, []);

  return <>{Array.from(portals.entries())}</>;
};

export default PortalRenderer;
