const toWords = require('./toWords');
const wordsToCase = require('./wordsToCase');
// const { detectCase } = require('./detectCase') // odkomentuj jeśli potrzebne

function convertToCase(input, targetCase) {
  const words = toWords(input);

  return wordsToCase(words, targetCase);
}

module.exports = convertToCase;
