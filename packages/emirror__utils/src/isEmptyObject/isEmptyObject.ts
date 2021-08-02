/**
 * Is this param is empty Object?
 */
export function isEmptyObject(o: Object): boolean {
  if (Object.prototype.toString.call(o) !== '[object Object]') {
    throw Error(`${o} is not Object.`);
  }
  for (let key in o) {
    if (Object.prototype.hasOwnProperty.call(o, key)) {
      return false;
    }
  }
  return true;
}
