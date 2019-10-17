import * as Yup from 'yup';
import { Request, Response, NextFunction } from 'express';

class OfferValidation {
  public async search(req:Request, res:Response, next:NextFunction): Promise<any> {
    try {
      const schema = Yup.object().shape({
        keyword: Yup.string().required('keyword is required!'),
        categoryId: Yup.number().required('categoryId is required!'),
      });

      await schema.validate(req.query, { abortEarly: false });
      return next();
    } catch (err) {
      return res.status(422).json({ errors: err.errors });
    }
  }

  public async offer(req:Request, res:Response, next:NextFunction): Promise<any> {
    try {
      const schema = Yup.object().shape({
        storeId: Yup.number().required('storeId is required!'),
      });

      await schema.validate(req.query, { abortEarly: false });
      return next();
    } catch (err) {
      return res.status(422).json({ errors: err.errors });
    }
  }
}

export default new OfferValidation();
