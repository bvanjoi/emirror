import React from 'react';
import { EditorView } from '@emirror/pm/view';
import { Node, Mark } from '@emirror/core-structure';

export type Items = Record<string, Node | Mark>;

export interface MenuProps {
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
}
