import * as Yup from 'yup';
import { Response, Request, NextFunction } from 'express';

const authValidation = async (req:Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const schema = Yup.object().shape({
      email: Yup
        .string()
        .required('E-mail is required!').email('Invalid e-mail!'),
      password: Yup
        .string()
        .required('Password is required!')
        .min(6, 'Password must be at least 6 characters!'),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res.status(422).json({ errors: err.errors });
  }
};

export default authValidation;
