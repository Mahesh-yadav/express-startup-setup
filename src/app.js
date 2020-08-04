import express from 'express';
import logger from 'morgan';
import {} from './utils/loadEnvVariables';

const PORT = process.env.PORT || 5000;

const app = express();

// Mount logger
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Express server');
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}...`);
});
