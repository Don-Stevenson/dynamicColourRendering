// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const dynamicColours = {image: "cabinet",
src: "www.google.com" }

app.get("/dynamicColours", (request, response) => {
  response.send(dynamicColours);
});
