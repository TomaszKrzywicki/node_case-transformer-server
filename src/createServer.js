const http = require('http');
const { convertToCase } = require('./convertToCase/convertToCase');

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const errors = [];

    if (!req.url) {
      res.statusCode = 400;
      res.statusMessage = 'Bad request';

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

    const [path, queryString] = req.url.split('?');
    const textToConvert = path.slice(1);
    const params = new URLSearchParams(queryString);
    const toCase = params.get('toCase');

    if (!textToConvert) {
      errors.push({
        message:
          'Text to convert is required. Correct request is: ' +
          '"/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
      });
    }

    if (!toCase) {
      errors.push({
        message:
          '"toCase" query param is required. Correct request is: ' +
          '"/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
      });
    } else {
      const supportedCases = ['SNAKE', 'KEBAB', 'CAMEL', 'PASCAL', 'UPPER'];

      if (!supportedCases.includes(toCase)) {
        errors.push({
          message:
            'This case is not supported. Available cases: ' +
            'SNAKE, KEBAB, CAMEL, PASCAL, UPPER.',
        });
      }
    }

    if (errors.length > 0) {
      res.statusCode = 400;
      res.statusMessage = 'Bad request';
      res.end(JSON.stringify({ errors }));

      return;
    }

    const result = convertToCase(toCase, textToConvert);

    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.end(
      JSON.stringify({
        originalCase: result.originalCase,
        targetCase: toCase,
        originalText: textToConvert,
        convertedText: result.convertedText,
      }),
    );
  });
}

module.exports = { createServer };
