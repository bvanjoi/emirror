import React, { useRef, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import cls from 'classnames';
import { useEMirrorContext } from './EMirrorContext';

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

interface Props {
  /**
   * ClassName of user defined.
   */
  className: string;
  /**
   * The initial document.
   */
  children: ReactNode | undefined;
}

export const EMirrorComponent: React.FC = ({
  children,
  className,
}: Props) => {
  const viewDOMRef = useRef<HTMLDivElement>(null);
  const emirror = useEMirrorContext();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    viewDOMRef?.current.append(emirror.view.dom);
    emirror.setContentFromHtml(contentRef.current);
    emirror.view.focus();
    return () => {
      if (emirror.view.dom) {
        viewDOMRef?.current.removeChild(emirror.view.dom);
      }
    };
  }, [emirror]);

  return (
    <EMirrorInnerView
      ref={viewDOMRef}
      spellCheck='false'
      className={cls('emirror', className)}
    >
      <div ref={contentRef} style={{ display: 'none' }}>
        {children}
      </div>
    </EMirrorInnerView>
  );
};
