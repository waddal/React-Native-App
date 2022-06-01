const express = require("express");
const cors = require("cors");
require("dotenv").config();

const index = express();

//ROUTERS
const categoriesRouter = require("./routes/categories/categories-router");

index.use(express.json());
index.use(cors({ origin: "/" }));

index.use("/categories", categoriesRouter);

index.get("*", (req, res, next) => {
  res.json(`\n You're GETting it fresh from port ...\n`);
});

module.exports = index;
