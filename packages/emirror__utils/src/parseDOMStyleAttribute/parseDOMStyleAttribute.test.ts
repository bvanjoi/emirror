import { parseDOMStyleAttribute } from './index';

describe('parseDOMStyleAttribute__test', () => {
  test('empty', () => {
    expect(parseDOMStyleAttribute('')).toStrictEqual({});
  });

  test('error type argument', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => parseDOMStyleAttribute(1)).toThrowError();
  });

  test('error argument', () => {
    expect(() => parseDOMStyleAttribute('1,2')).toThrowError();
    expect(() => parseDOMStyleAttribute(';2')).toThrowError();
    expect(() => parseDOMStyleAttribute(';2:')).toThrowError();
  });

  test('normal argument', () => {
    expect(parseDOMStyleAttribute('a:1;b:2')).toStrictEqual({
      a: '1',
      b: '2',
    });
    expect(parseDOMStyleAttribute('a:1')).toStrictEqual({ a: '1' });
  });
});
