function toWords(input) {
  if (!input) {
    return [];
  }

  // zamienia np. kebab-case i snake_case na spacje
  let str = input.replace(/[-_]/g, ' ');

  // dodaje spacje przed wielkimi literami w camelCase/PascalCase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // zamienia wszystko na małe litery
  return str.toLowerCase().split(' ');
}

module.exports = toWords;
