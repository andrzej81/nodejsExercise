const express = require("express");
const app = express();

const requireJsonContent = () => {
  return (req, res, next) => {
    if (req.headers["content-type"] !== "application/json") {
      res.status(400).send("Server requires application/json");
    } else {
      next();
    }
  };
};

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.get("/", (req, res, next) => {
  res.send("Welcome Home");
});

app.listen(3000);
