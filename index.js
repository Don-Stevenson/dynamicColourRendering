// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const dynamicColours = {imageDescription: "cabinet",
src: "https://www.ikea.com/ca/en/p/hemnes-3-drawer-chest-white-20360421/" }

app.get("/dynamicColours", (request, response) => {
  response.send(dynamicColours);
});
