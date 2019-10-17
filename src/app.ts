import './bootstrap';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import './database';

interface Error {
  status?:number,
  message?:string
}

class App {
  public server: express.Application;

  public constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.globalException();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes(): void {
    this.server.use(routes);
  }

  private globalException(): void {
    this.server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (process.env.NODE_ENV === 'development') {
        return res.status(err.status || 500).json({ error: err.message });
      }

      return res.status(500).json({ error: 'Internal server error.' });
    });
  }
}

export default new App().server;
