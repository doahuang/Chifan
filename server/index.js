const express = require('express');
const app = express();
const keys = require('./config/keys');

require('./services/passport');
require('./routes/authRoutes')(app);

const mongoose = require('mongoose');
require('./models/User');

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server runs on locahost:${PORT}`));