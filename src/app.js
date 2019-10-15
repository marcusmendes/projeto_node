import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Youch from 'youch';
import routes from './routes';
import './database';

const server = express();

/* CORS */
server.use(cors());

/* Configurações do servidor */
server.use(express.json());

/* Middlewares */

/* Rotas */
server.use(routes);

/* Exception */
server.use(async (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, req).toJSON();
    return res.status(500).json(errors);
  }

  return res.status(500).json({ error: 'Internal server error.' });
});

export default server;
