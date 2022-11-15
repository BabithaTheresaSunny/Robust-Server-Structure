const express = require("express");
const router = require("./notes/notes.router");
const app = express();
const cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/list", router);
module.exports = app;
