const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals')
const express = require('express');
const { runInNewContext } = require('vm');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// middleware static function to give free access to the public file



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
