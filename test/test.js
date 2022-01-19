var assert = require("assert");
const supertest = require("supertest");
const app = require("../server");

var request = require("request");
var assert = require("assert");

describe("Array", () => {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("GET /", () => {
  it("it should has status code 200", function (done) {
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
    request("http://localhost:3000", function (err, response, body) {
      if (err) done(err);

      var payload = JSON.parse(body);
      assert.equal(payload, '{ status: "ok" }');
      done();
    });
  });
});

//using request instead supertest
/*describe("Server GET / respond for 200", () => {
  it("responds with JSON message { status: ok }", (done) => {
    request("http://localhost:3000", function (err, response, body) {
      if (err) done(err);

      var payload = JSON.parse(body);
      assert.equal(payload, '{ status: "ok1" }');
      done();
    });
  });
});*/

describe("GET /users", () => {
  it("it should has status code 200", function (done) {
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
  it("can do async work", function (done) {
    console.log("done async job");
    setTimeout(function () {
      done();
    }, 1000);
  });
});

/*describe("POST /", function () {
  it("it should send json payload", function (done) {
    supertest(app)
      .post("/")
      .send({ id: 1 })
      .then((response) => {
        // Check the response data
        expect(response.body).toBe({ id: 1 });
      });
  });
});*/

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
