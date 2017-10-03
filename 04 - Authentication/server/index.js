const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' })
const cors = require('cors');

// DB Setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }))
router(app);

// Server Setup
const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);
console.log('==================================');
console.log(`Server listening on port: ${port}`);
console.log('==================================');
