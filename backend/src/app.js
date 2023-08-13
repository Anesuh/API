const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");

app.use(express.json());

// Invocando o middleware cors
app.use(cors());

app.use(router);

module.exports = app;
