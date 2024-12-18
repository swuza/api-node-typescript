// server/Server.ts
import express from 'express';

const server = express();

server.get('/', (_, res) => {
  res.send('Olá, dev!');
});

export { server };
