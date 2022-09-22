const express = require('express');
const Router = require("./htmlRoutes");


const app = express();
app.use("/notes", Router);
module.exports = app;