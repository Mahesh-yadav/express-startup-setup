import express from 'express';

const PORT = 5000;

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Express server');
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}...`);
});
