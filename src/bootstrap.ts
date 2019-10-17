import dontenv from 'dotenv';

dontenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
