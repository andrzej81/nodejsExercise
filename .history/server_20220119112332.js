const myCustomeMiddleware = require("./myModules/myMiddleware");

const express = require("express");
const app = express();

// application level middleware

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
  res.send("Welcome Home");
});

app.use(myCustomeMiddleware.LoggerMiddleware);

/*app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});*/

app.listen(3000);
