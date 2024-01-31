import totalRes from './totalRes';


import primo from './primo';
import triangular from './triangular';
import fibonacci from './fibonacci';

jest.mock('./primo');
jest.mock('./triangular');
jest.mock('./fibonacci');
(primo as jest.Mock).mockReturnValue(1);
(triangular as jest.Mock).mockReturnValue(1);
(fibonacci as jest.Mock).mockReturnValue(1);

describe('totalRes Function', () => {
  it('returns correct data when n is not 0', () => {
    const result = totalRes(1);
    expect(result).toEqual({
      prim: 1,
      fib: 1,
      tri: 1,
      finalRes: 1,
      first: true,
    });
  });

  it('returns correct data when n is 0', () => {
    const result = totalRes(0);

    expect(result).toEqual({
      prim: 0,
      fib: 0,
      tri: 0,
      finalRes: 0,
      first: false,
    });
  });
});
