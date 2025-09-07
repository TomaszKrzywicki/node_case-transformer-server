/**
 * Funkcja konwertująca tekst do różnych formatów case.
 * Obsługiwane formaty: SNAKE, CAMEL, KEBAB, PASCAL, UPPER
 */

function convertToCase(toCase, text) {
  switch (toCase) {
    case 'SNAKE':
      return text
        .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
        .replace(/^_/, '');
    case 'CAMEL':
      return text.replace(/[_-]([a-zA-Z])/g, (_, c) => c.toUpperCase());
    case 'KEBAB':
      return text
        .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
        .replace(/^-/, '');
    case 'PASCAL':
      const camel = text.replace(/[_-]([a-zA-Z])/g, (_, c) => c.toUpperCase());

      return camel.charAt(0).toUpperCase() + camel.slice(1);
    case 'UPPER':
      return text.toUpperCase();
    default:
      return text;
  }
}

// Eksport dla Node.js
module.exports = { convertToCase };
