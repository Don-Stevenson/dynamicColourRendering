// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const dynamicColours = {
  imageDescription: "3 drawer, white chest",
  srcURL: "https://www.ikea.com/ca/en/p/hemnes-3-drawer-chest-white-20360421/"
};

app.get("/dynamicColours", (request, response) => {
  response.send(dynamicColours);
});

app.get("/", (request, response) => {
  response.send("homepage is here");
});
