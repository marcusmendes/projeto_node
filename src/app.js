import 'dotenv/config';
import express from 'express';
import cors from 'cors';
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

export default server;
