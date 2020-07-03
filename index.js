// load .env data into process.env
require('dotenv').config();


// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const sass = require("node-sass-middleware");
const morgan = require('morgan');
app.use(morgan('dev'));


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });

app.use("/dynamicColours");