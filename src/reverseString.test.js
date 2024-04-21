// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
function reverseString(toReverse = '') {
  if (typeof toReverse !== 'string') {
    throw new TypeError('toReverse must be a string');
  }
  return toReverse.split('').reverse().join('');
}

for (const solution of [reverseString]) {
  // the main test suite for the function
  describe(`${solution.name}: reverses a string`, () => {
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
    it('"hello" -> "olleh"', () => {
      expect(reverseString('hello')).toEqual('olleh');
    });
    it('123 -> throws a TypeError', () => {
      expect(() => reverseString(123)).toThrow(TypeError);
    });
    it('123 -> throws a TypeError', () => {
      expect(() => reverseString(123)).toThrow(TypeError);
    });
    it('"heLLo" -> "oLLeh"', () => {
      expect(reverseString('heLLo')).toEqual('oLLeh');
    });
    it('"4you" -> "uoy4"', () => {
      expect(reverseString('4you')).toEqual('uoy4');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
