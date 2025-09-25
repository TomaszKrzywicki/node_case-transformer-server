function wordsToCase(words, targetCase) {
  switch (targetCase) {
    case 'SNAKE':
      return words.join('_');
    case 'KEBAB':
      return words.join('-');
    case 'CAMEL':
      return (
        words[0] +
        words
          .slice(1)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join('')
      );
    case 'PASCAL':
      return words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    case 'UPPER':
      return words.join('_').toUpperCase();
    default:
      return words.join('');
  }
}

module.exports = { wordsToCase };
