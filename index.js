// load .env data into process.env
require("dotenv").config();

// setup fetch from node fetch
const fetch = require("node-fetch");

// Web server config
const PORT = process.env.PORT
const express = require("express");
const app = express();
// setup ejs
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// homepage
// *******
app.get("/", (request, response) => {
  response.send("homepage is here");
});

// Actual working route with render
//******************************* */
app.get("/colourPicker", (request, response) => {
  response.render("colourPicker");
});

//Test route working with render
//******************************* */
app.get("/test", (request, response) => {
  response.render("test");
});

