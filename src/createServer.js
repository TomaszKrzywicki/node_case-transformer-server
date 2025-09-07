// src/createServer.js
const express = require('express');
const bodyParser = require('body-parser');
const { convertToCase } = require('./convertToCase/convertToCase');

function createServer() {
  const app = express();

  app.use(bodyParser.json());

  app.post('/convert', (req, res) => {
    const { text, toCase } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'No text provided to convert' });
    }

    if (!toCase) {
      return res.status(400).json({ error: 'No target case provided' });
    }

    try {
      const result = convertToCase(text, toCase);

      res.json({ result });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  return app;
}

module.exports = createServer;
