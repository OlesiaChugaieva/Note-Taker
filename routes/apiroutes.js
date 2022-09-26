const express = require('express');
const Router = require("./htmlroutes");


const app = express();
app.use("/notes", Router);
module.exports = app;