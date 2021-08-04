import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import cls from 'classnames';
import EMirror, { EMirrorOptions } from '@emirror/core';
import { useEmirrorContext } from './EMirrorContext';

/**
 * The EMirror Editor props;
 */
export type EMirrorProps = {
  /**
   * The class of Emirror.
   */
  className?: string;
  /**
   * the init content of this editor.
   */
  children?: React.ReactNode;
} & Omit<EMirrorOptions, 'contentEle' | 'container'>;

export const EMirrorView = (props: EMirrorProps) => {
  const {
    topNode,
    className,
    plugins,
    afterInit,
    afterUpdate,
    beforeDestroy,
    editable = true,
    children,
  } = props;

  /**
   * The ref of ProsemirrorView DOM.
   */
  const viewDOMRef = useRef<HTMLDivElement>(null);

  /**
   * The ref of EMirror.
   */
  const emirrorRef = useRef<EMirror>(null);

  /**
   * The init content ref of ReactNode
   */
  const contentRef = useRef<HTMLDivElement>(null);

  const emirrorContext = useEmirrorContext();
  const { viewProvider } = emirrorContext;

  useEffect(() => {
    if (!viewDOMRef.current) {
      return;
    }
    const emirror = new EMirror({
      container: viewDOMRef.current,
      contentEle: contentRef.current,
      plugins,
      topNode,
      afterInit,
      afterUpdate,
      beforeDestroy,
      editable,
    });

    window.emirror = emirror;
    emirrorRef.current = emirror;
    viewProvider.init(emirror.view);

    return () => {
      emirror.destroy();
    };
  }, []);

  return (
    <div className={cls('emirror', className)}>
      <EMirrorInnerView ref={viewDOMRef} spellCheck='false'>
        <div ref={contentRef} style={{ display: 'none' }}>
          {children}
        </div>
      </EMirrorInnerView>
    </div>
  );
};

const EMirrorInnerView = styled.div`
  & > .ProseMirror {
    min-height: 140px;
  }

  & .ProseMirror {
    overflow-wrap: break-word;
    outline: none;
    white-space: pre-wrap;
    font-variant-ligatures: none;
    word-break: break-word;
  }
`;
