function wordsToCase(words, targetCase) {
  switch (targetCase) {
    case 'SNAKE':
      return words.map((w) => w.toLowerCase()).join('_');
    case 'KEBAB':
      return words.map((w) => w.toLowerCase()).join('-');
    case 'CAMEL':
      return words
        .map((w, i) => (i === 0 ? w.toLowerCase() : capitalize(w)))
        .join('');
    case 'PASCAL':
      return words.map((w) => capitalize(w)).join('');
    case 'UPPER':
      return words.map((w) => w.toUpperCase()).join('_');
    default:
      throw new Error(`Unsupported target case: ${targetCase}`);
  }
}

function capitalize(word) {
  if (!word) {
    return '';
  }

  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

module.exports = wordsToCase;
