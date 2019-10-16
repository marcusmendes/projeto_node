import * as Yup from 'yup';
import { Request, Response, NextFunction } from 'express';

const searchValidation = async (req:Request, res:Response, next:NextFunction): Promise<any> => {
  try {
    const schema = Yup.object().shape({
      keyword: Yup.string().required('keyword is required!'),
    });

    await schema.validate(req.query, { abortEarly: false });
    return next();
  } catch (err) {
    return res.status(422).json({ errors: err.errors });
  }
};

export default searchValidation;
