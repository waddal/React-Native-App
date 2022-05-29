const app = require("./api/app");

const PORT = process.env.PORT || 9090;

app.listen(PORT, () =>
  console.log(`\n Server is running on port ${PORT}...\n`)
);
app.timeout = 60 * 10 * 1000;
