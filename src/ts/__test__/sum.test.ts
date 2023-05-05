import sum from '../sum';

describe('sum()', () => {
  it('should return 0 for no input values', () => {
    const result = sum();

    expect(result).toBe(0);
  });

  it('should return sum of two numbers', () => {
    const n1 = 2;
    const n2 = 3;
    const result = sum(n1, n2);

    expect(result).toBe(n1 + n2);
  });
});