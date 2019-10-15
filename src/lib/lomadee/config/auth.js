import 'dotenv/config';

export default {
  development: {
    url: `http://sandbox-api.lomadee.com/v3/${process.env.APP_TOKEN}`,
    appToken: process.env.APP_TOKEN,
    sourceId: process.env.SOURCE_ID,
  },
  production: {
    url: `https://api.lomadee.com/v3/${process.env.APP_TOKEN}`,
    appToken: process.env.APP_TOKEN,
    sourceId: process.env.SOURCE_ID,
  },
};
