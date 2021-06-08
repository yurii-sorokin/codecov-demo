function isEven(value: number) {
  return value % 2 === 0;
}

function getParity(value: number) {
  return isEven(value) ? 'even' : 'odd'
}
