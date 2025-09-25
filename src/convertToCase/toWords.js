function toWords(text) {
  if (!text) {
    return [];
  }

  return text
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase → camel Case
    .replace(/[_-]/g, ' ') // snake_case / kebab-case → spacje
    .split(' ') // podział po spacji
    .filter(Boolean) // usunięcie pustych
    .map((word) => word.toLowerCase());
}

module.exports = toWords;
