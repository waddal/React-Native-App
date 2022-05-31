const index = require("./api");

const PORT = process.env.PORT || 9090;

index.listen(PORT, () =>
  console.log(`\n Server is running on port ${PORT}...\n`)
);
index.timeout = 60 * 10 * 1000;
