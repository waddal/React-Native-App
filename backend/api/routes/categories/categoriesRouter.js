const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("categories router linked!");
});

router.post("/", (req, res, next) => {
  res.json("categories posts!");
});

router.put("/", (req, res, next) => {
  res.json("categories updates!");
});

router.delete("/", (req, res, next) => {
  res.json("categories deletes!");
});


module.exports = router;
