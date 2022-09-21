const express = require('express');

const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');

// Creating an Express server
const app = express();

// Setting a PORT
const PORT = process.env.PORT || 3001;

//Setting up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});