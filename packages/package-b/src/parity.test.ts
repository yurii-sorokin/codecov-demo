import { getParity, isEven, isNil } from './parity';

describe('isEven', () => {
  it('returns true for even numbers', () => {
    expect(isEven(4)).toBe(true);
  });

  it('returns false for odd numbers', () => {
    expect(isEven(7)).toBe(false);
  });
});

describe('getParity', () => {
  it('returns "even" for even numbers', () => {
    expect(getParity(4)).toBe('even');
  });
});

describe('isNil', () => {
  it('returns true for null values', () => {
    expect(isNil(null)).toBe(true);
  });

  it('returns true for undefined values', () => {
    expect(isNil(undefined)).toBe(true);
  });

  it('returns false for defined values', () => {
    expect(isEven(7)).toBe(false);
  });
});
