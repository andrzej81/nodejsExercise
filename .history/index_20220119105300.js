let http = require("http");
let dt = require("./myModules/myModule");
var uc = require("upper-case");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!" + dt.myDateTime());
  })
  .listen(3000);
