const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

require('./models/User');
mongoose.connect(keys.mongoURI);

require('./services/passport');
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server runs on locahost:${PORT}`));