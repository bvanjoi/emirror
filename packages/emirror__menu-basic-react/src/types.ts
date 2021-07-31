import React from 'react';
import { EditorView } from '@emirror/pm/view';
import { Node, Mark } from '@emirror/core-structure';
import { Plugin } from '@emirror/pm/state';

export type Items = Record<string, Node | Mark>;

export interface MenuProps {
  /**
   * The className attach on menu container.
   */
  className?: string;
  /**
   * Use the instance of ProseMirror view to add menu plugin.
   */
  view: EditorView;
  /**
   * The items of menu.
   */
  items: Items;
  /**
   * The Child container menu items.
   */
  children: React.ReactNode;
  /**
   * The menu plugin based on ProseMirror
   */
  menuPlugin: (menuPluginProps: {
    items: Items;
    element: HTMLDivElement;
  }) => Plugin;
}
