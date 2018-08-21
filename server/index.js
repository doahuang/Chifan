const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'welcome' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);