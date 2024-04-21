// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
function reverseString(reverses a string) {
  
  return str.split('').reverse().join('');
}


for (const solution of [secretSolution]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it('a string with all small letters', () => {
      expect(solution('abcd')).toEqual('dcba');
    });
     it('a string with mixed letters', () => {
      expect(solution('aBcD')).toEqual('DcBa');
    });
       it('a string with mixed letters with space', () => {
      expect(solution('a""b')).toEqual('b""a');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
