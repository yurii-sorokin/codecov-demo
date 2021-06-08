export function isEven(value: number) {
  return value % 2 === 0;
}

export function isOdd(value: number) {
  return value % 2 !== 0;
}

export function getParity(value: number) {
  return isEven(value) ? 'even' : 'odd';
}
