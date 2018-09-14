import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import keys from './config/keys';
mongoose.connect(keys.db);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import users from './routes/api/users';
app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});