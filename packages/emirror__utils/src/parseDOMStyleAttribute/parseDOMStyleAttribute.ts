import { Properties } from 'csstype';

/**
 *
 * @param style A string similar `a:1;b;`
 */
export default function (style: string): Properties {
  if (typeof style !== 'string') {
    throw Error('error type');
  }

  const entires = style
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length)
    .map(attr => attr.split(':').map(v => v.trim()));

  entires.forEach(([key, value]) => {
    if (value === undefined || !value.length || !key.length) {
      throw Error('error argument format');
    }
  });
  return Object.fromEntries(entires);
}
