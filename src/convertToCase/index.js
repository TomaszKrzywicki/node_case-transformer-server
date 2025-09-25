const { createServer } = require('../createServer');

const PORT = process.env.PORT || 3000;

const server = createServer();

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${PORT}`);
});
