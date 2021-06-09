import { getParity, isEven, isOdd } from './parity';

describe('isEven', () => {
  it('returns true for even numbers', () => {
    expect(isEven(4)).toBe(true);
  });

  it('returns false for odd numbers', () => {
    expect(isEven(7)).toBe(false);
  });
});

describe('isOdd', () => {
  it('returns false for even numbers', () => {
    expect(isOdd(4)).toBe(false);
  });

  it('returns true for odd numbers', () => {
    expect(isOdd(7)).toBe(true);
  });
});

describe('getParity', () => {
  it('returns "even" for even numbers', () => {
    expect(getParity(4)).toBe('even');
  });
});
