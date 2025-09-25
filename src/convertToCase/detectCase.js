function detectCase(input) {
  if (input.includes('_') && input === input.toUpperCase()) {
    return 'UPPER';
  }

  if (input.includes('_')) {
    return 'SNAKE';
  }

  if (input.includes('-')) {
    return 'KEBAB';
  }

  if (/^[a-z][a-zA-Z0-9]*$/.test(input)) {
    return 'CAMEL';
  }

  if (/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
    return 'PASCAL';
  }

  return 'UNKNOWN';
}

module.exports = { detectCase };
