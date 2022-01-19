let http = require("http");
let dt = require("./myModules/myModule");
let uc = require("upper-case");
let events = require("events");
var eventEmitter = new events.EventEmitter();
var mongo = require("mongodb");
var assert = require("assert");

//Create an event handler:
let myEventHandler = function () {
  console.log("I hear a scream!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");

function add(a, b) {
  return a + b;
}

let expected = add(1, 2);
assert(expected === 3, add(1, 2));

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(uc.upperCase("Hello World!") + dt.myDateTime());
  })
  .listen(3000);
