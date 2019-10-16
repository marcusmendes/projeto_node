import { Request, Response } from 'express';

class DefaultController {
  public index(req:Request, res:Response): Response {
    return res.json({ message: 'API 1.0' });
  }
}

export default new DefaultController();
