const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0; 
  let buffer = ''; 
  let encoded = ''; 

  for (let i = 0; i < str.length; i++) {
    const char = str[i];


    if (char === buffer) {
      count++;
    } else {
      if (count > 1) {
        encoded += count;
      }
      encoded += buffer;
      count = 1;
      buffer = char;
    }
  }

  if (count > 1) {
    encoded += count;
  }
  encoded += buffer;

  return encoded;
}

module.exports = {
  encodeLine
};
