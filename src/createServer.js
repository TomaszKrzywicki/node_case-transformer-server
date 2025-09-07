// src/createServer.js
const http = require('http');
const { convertToCase } = require('./convertToCase');

const SUPPORTED_CASES = ['SNAKE', 'KEBAB', 'CAMEL', 'PASCAL', 'UPPER'];

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const errors = [];

    if (!req.url) {
      res.writeHead(400, 'Bad request');

      res.end(
        JSON.stringify({
          errors: [
            {
              message:
                'Text to convert is required. Correct request is: ' +
                '"/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
            },
          ],
        }),
      );

      return;
    }

    // Split url into path and query string
    const [path, queryString] = req.url.split('?');

    // Remove leading slash to get text
    const text = path && path !== '/' ? decodeURIComponent(path.slice(1)) : '';

    // Parse query params
    const params = new URLSearchParams(queryString || '');
    const toCase = params.get('toCase');

    // Validate text
    if (!text) {
      errors.push({
        message:
          'Text to convert is required. Correct request is: ' +
          '"/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
      });
    }

    // Validate toCase param
    if (!toCase) {
      errors.push({
        message:
          '"toCase" query param is required. Correct request is: ' +
          '"/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
      });
    } else if (!SUPPORTED_CASES.includes(toCase)) {
      errors.push({
        message:
          'This case is not supported. Available cases: ' +
          'SNAKE, KEBAB, CAMEL, PASCAL, UPPER.',
      });
    }

    if (errors.length > 0) {
      res.writeHead(400, 'Bad request');
      res.end(JSON.stringify({ errors }));

      return;
    }

    // Conversion
    const result = convertToCase(toCase, text);

    res.writeHead(200, 'OK');

    res.end(
      JSON.stringify({
        originalCase: result.originalCase,
        targetCase: toCase,
        originalText: text,
        convertedText: result.convertedText,
      }),
    );
  });
}

module.exports = { createServer };
