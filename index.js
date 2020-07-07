// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT ||3001;
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

