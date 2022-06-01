const router = require("express").Router();
const Category = require("./categories-model");

router.get("/", async (req, res, next) => {
  const result = await Category.getAll();
  res.status(200).json(result);
});

router.get("/:id", async (req, res, next) => {
  console.log('param id: ', req.params.id);
  try {
    const result = await Category.getById(req.params.id);
    console.log('result: ', result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

// router.put("/", (req, res, next) => {
//   res.json("categories updates!");
// });

// router.delete("/", (req, res, next) => {
//   res.json("categories deletes!");
// });

module.exports = router;
