const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const messageUpperCase = message.toUpperCase();
    const keyUpperCase = key.toUpperCase();

    let encryptedString = '';

    for (let i = 0, j = 0; i < messageUpperCase.length; i++) {
      const currentChar = messageUpperCase[i];
      if (alphabet.includes(currentChar)) {
        const messageCharCode = alphabet.indexOf(currentChar);
        const keyCharCode = alphabet.indexOf(keyUpperCase[j % keyUpperCase.length]);
        const encryptedCharCode = (messageCharCode + keyCharCode) % alphabet.length;
        encryptedString += alphabet[encryptedCharCode];
        j++;
      } else {
        encryptedString += currentChar;
      }
    }

    if (!this.isDirect) {
      return encryptedString.split('').reverse().join('');
    }

    return encryptedString;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const encryptedMessageUpperCase = encryptedMessage.toUpperCase();
    const keyUpperCase = key.toUpperCase();

    let decryptedString = '';

    for (let i = 0, j = 0; i < encryptedMessageUpperCase.length; i++) {
      const currentChar = encryptedMessageUpperCase[i];
      if (alphabet.includes(currentChar)) {
        const encryptedCharCode = alphabet.indexOf(currentChar);
        const keyCharCode = alphabet.indexOf(keyUpperCase[j % keyUpperCase.length]);
        const messageCharCode = (encryptedCharCode + alphabet.length - keyCharCode) % alphabet.length;
        decryptedString += alphabet[messageCharCode];
        j++;
      } else {
        decryptedString += currentChar;
      }
    }

    if (!this.isDirect) {
      return decryptedString.split('').reverse().join('');
    }

    return decryptedString;
  }
}

module.exports = {
  VigenereCipheringMachine
};
