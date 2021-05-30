export interface LatexPluginState {
  macros: { [cmd: string]: string };
  /**
   * A lis tof currently active `NodeView`s.
   */
  activeNodeViews: any;
  /**
   * Used to determine whether to place the cursor in the front or back most
   * position when expanding a math node, without overriding the default arrow
   * key behavior
   */
  prevCursorPos: number;
}
