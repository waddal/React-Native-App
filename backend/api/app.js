const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 9090;

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("*", (req, res, next) => {
  res.json(`\n You're GETting it fresh from port ${PORT}...\n`);
});

module.exports = app;
