function toWords(text, caseType) {
  switch (caseType) {
    case 'SNAKE':
    case 'UPPER':
      return text.toLowerCase().split('_');
    case 'KEBAB':
      return text.toLowerCase().split('-');
    case 'CAMEL':
    case 'PASCAL':
      return text
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .split(' ')
        .map((w) => w.toLowerCase());
    default:
      return [text];
  }
}

module.exports = toWords;
