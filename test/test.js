const request = require("request");
const assert = require("assert");
const supertest = require("supertest");
const app = require("../server");
const myModule = require("../myModules/myModule");

let url = "http://localhost:3000";

describe("Testing myModule", () => {
  it("should return current date", () => {
    assert.equal(myModule.myDateTime(), "2022-1-19");
  });
});

describe("Testing FizzBuzz challange", () => {
  it("for the multiples of five print Buzz word", () => {
    assert.equal(myModule.FizzBuzzNumbers(5), "Buzz");
  });
});

describe("Array", () => {
  it("should return -1 when the value is not present", () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});

describe("GET /", () => {
  it("it should has status code 200", (done) => {
    supertest(app)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
  //using request instead supertest

  it("responds with JSON message { status: ok }", (done) => {
    request(url, (err, response, body) => {
      if (err) done(err);

      var payload = JSON.parse(body);
      assert.equal(payload, '{ status: "ok" }');
      done();
    });
  });
});

describe("GET /users", () => {
  it("it should has status code 200", (done) => {
    supertest(app)
      .get("/users")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

describe("some async tests", () => {
  it("can do async work", (done) => {
    console.log("done async job");
    setTimeout(function () {
      done();
    }, 1000);
  });
});

describe("Some module", () => {
  //group uni tests
  it("does some thing", () => {
    //assert(someModule.doesSomeThing()); //unit test
  });
});

/*describe("My feature", function () {
  before("optional description", function () {
    console.log("before test run");
  });

  after("optional description", function () {
    console.log("after test run");
  });

  beforeEach("optional description", function () {
    console.log("beforeEach test run");
  });

  afterEach("optional description", function () {
    console.log("afterEach test run");
  });

  describe("subfeature 1", function () {
    it("does one thing", function () {});

    it("does another thing", function () {});
  });

  describe("subfeature 2", function () {
    it("does one thing", function () {});

    it("does another thing", function () {});
  });
});*/
