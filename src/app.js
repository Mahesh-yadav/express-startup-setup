import express from 'express';
import logger from 'morgan';
import {} from './utils/loadEnvVariables';
import ErrorResponse from './utils/error';
import errorHandler from './middlewares/errorHandler';

const PORT = process.env.PORT || 5000;

const app = express();

// Mount logger
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Express server');
});

// Catch all route handler for non-existent routes
app.use((req, res, next) => {
  next(new ErrorResponse(404, `Route Not Supported: ${req.method} ${req.url}`));
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}...`);
});
