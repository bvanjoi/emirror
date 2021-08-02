import { isEmptyObject } from './isEmptyObject';

describe('isEmptyObject__test', () => {
  test('not Object', () => {
    expect(() => isEmptyObject([])).toThrowError();
    expect(() => isEmptyObject(1)).toThrowError();
    expect(() => isEmptyObject('1')).toThrowError();
    expect(() => isEmptyObject(true)).toThrowError();
  });

  test('not empty Object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('empty Object', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject(Object.create({ a: 1 }))).toBe(true);
  });
});
