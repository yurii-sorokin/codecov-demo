import { isEven } from './parity';

describe('isEven', () => {
  it('returns true for even numbers', () => {
     expect(isEven(4)).toBe(true);
  });

  it('returns false for odd numbers', () => {
     expect(isEven(7)).toBe(false);
  });
})
