const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const counter = {};
  let commonCount = 0;
  
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (!counter[char]) {
      counter[char] = 1;
    } else {
      counter[char]++;
    }
  }
  
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (counter[char]) {
      commonCount++;
      counter[char]--;
    }
  }
  
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
