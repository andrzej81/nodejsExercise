var assert = require("assert");
const supertest = require("supertest");
const app = require("../server");

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("GET /", function () {
  it("it should has status code 200", function (done) {
    supertest(app)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
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

/*describe("Some module", function () {
  //group uni tests
  it("does some thing", function () {
    assert(someModule.doesSomeThing()); //unit test
  });
});*/

describe("My feature", function () {
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
});
