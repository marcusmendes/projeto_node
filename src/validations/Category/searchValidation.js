import * as Yup from 'yup';

const searchValidation = async (req, res, next) => {
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
