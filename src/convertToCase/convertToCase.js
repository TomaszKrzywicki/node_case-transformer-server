const { detectCase } = require('./detectCase');
const { wordsToCase } = require('./wordsToCase');

function toWords(input) {
  return input
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.toLowerCase());
}

function convertToCase(toCase, text) {
  const words = toWords(text);
  const originalCase = detectCase(text);

  return {
    originalCase,
    convertedText: wordsToCase(words, toCase),
  };
}

module.exports = { convertToCase };
