let http = require("http");
let dt = require("./myModules/myModule");
let uc = require("upper-case");
let events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log("I hear a scream!");
};

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(uc.upperCase("Hello World!") + dt.myDateTime());
  })
  .listen(3000);
