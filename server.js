const myCustomeMiddleware1 = require("./myModules/myMiddleware");
const myCustomeMiddleware2 = require("./myModules/myMiddleware2");

const express = require("express");
const app = express();

// application level middleware
app.use(myCustomeMiddleware1.LoggerMiddleware);

app.use(myCustomeMiddleware2.LoggerMiddleware2);

app.use((req, res, next) => {
  console.log("Next Middleware3");
  next();
});
const requireJsonContent = () => {
  return (req, res, next) => {
    if (req.headers["content-type"] !== "application/json") {
      res.status(400).send("Server requires application/json");
    } else {
      next();
    }
  };
};

app.use((err, req, res, next) => {
  console.log(err);
  //console.log(req);
  next();
});

app.post("/", requireJsonContent(), (req, res, next) => {
  res.send("You sent JSON");
});

app.get("/", (req, res, next) => {
  //res.status(200);
  //res.sendStatus(200);
  //res.send("Welcome Home");
  res.status(200).json('{ status: "ok" }');
  //res.status(200).json("Hello");
});

app.get("/users", (req, res) => {
  res.json({
    status: true,
  });
});

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

module.exports = app.listen(3000); // for testing
