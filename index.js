import express from "express";

const app = express();
const port = 3222;
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`the project's port is listening on ${port}`);
});
