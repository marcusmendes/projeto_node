import 'dotenv/config';
import express from 'express';
import routes from './routes';
import './database';

const server = express();

/* Configurações do servidor */
server.use(express.json());

/* Middlewares */

/* Rotas */
server.use(routes);

export default server;
