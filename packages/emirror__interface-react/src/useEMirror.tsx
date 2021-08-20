import { DependencyList, useEffect, useState } from 'react';
import EMirror, { EMirrorOptions } from '@emirror/core';

const useForceUpdate = () => {
  const [, setState] = useState(0);
  // ! why `() => setState(value + 1)` can't rerender.
  return () => setState(value => value + 1);
};

type EMirrorProps = EMirrorOptions;

export const useEmirror = (
  props: EMirrorProps,
  deps: DependencyList = [],
) => {
  const [emirror, setEMirror] = useState<EMirror>(null);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    setEMirror(
      new EMirror({
        ...props,
        afterUpdate: editor => {
          props.afterUpdate?.(editor);
          forceUpdate();
        },
      }),
    );

    return () => {
      emirror?.destroy();
    };
  }, deps);

  return emirror;
};
