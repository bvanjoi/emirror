import React from 'react';
import EMirror from '@emirror/core';

/**
 * The React Context for Emirror.
 */
export const EMirrorContext = React.createContext<EMirror>(null);

/**
 * @returns The hooks of EmirrorContext
 */
export const useEMirrorContext = () => React.useContext(EMirrorContext);
