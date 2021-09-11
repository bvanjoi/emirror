import checkViewPlugin from '../index';
import { Plugin } from '@emirror/pm/state';

describe('check view plugin', () => {
  it('view plugin', () => {
    expect(checkViewPlugin(new Plugin({}))).toBe(true);
  });

  it('state', () => {
    expect(
      checkViewPlugin(
        new Plugin({
          state: {
            init() {
              return null;
            },
            apply() {
              return null;
            },
          },
        }),
      ),
    ).toBe(false);
  });

  it('append transaction', () => {
    expect(
      checkViewPlugin(
        new Plugin({
          appendTransaction() {
            return;
          },
        }),
      ),
    ).toBe(false);
  });

  it('state', () => {
    expect(
      checkViewPlugin(
        new Plugin({
          filterTransaction() {
            return false;
          },
        }),
      ),
    ).toBe(false);
  });
});
