// load .env data into process.env
require('dotenv').config();


// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");