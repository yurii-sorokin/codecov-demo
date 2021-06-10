export function isEven(value: number) {
  return value % 2 === 0;
}

export function isOdd(value: number) {
  return !isEven(value);
}

export function getParity(value: number) {
  return isEven(value) ? 'even' : 'odd';
}

export function isNil(value: unknown) {
  return value == null;
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
