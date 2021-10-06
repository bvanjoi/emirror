import { Selection } from '@emirror/pm/state';

export interface MetaData {
  id: string;
  type: 'add' | 'remove';
  /**
   * 当 `add` 时，必须提供 pos.
   */
  pos?: number;
}
