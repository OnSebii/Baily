const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
require('colors');
const serverRoutes = require('./routes/serverRoutes');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use('/', serverRoutes);
app.use(notFoundHandler);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT);
