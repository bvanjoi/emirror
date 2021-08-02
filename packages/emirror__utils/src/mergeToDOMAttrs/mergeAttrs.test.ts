import { mergeAttrs } from './mergeAttrs';

test('mergeAttrs__test', () => {
  expect(
    mergeAttrs({ class: 'a', style: 'b', c: 3, d: 4 }, [
      { class: 'c', c: 5, f: 6 },
      { style: 'f', g: 7 },
    ]),
  ).toStrictEqual({
    class: 'a c',
    style: 'b;f',
    c: 5,
    d: 4,
    f: 6,
    g: 7,
  });
});
