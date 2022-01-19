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

describe("POST /", function () {
  it("it should has status code 200", function (done) {
    supertest(app)
      .post("/")
      .send({id: 1} })
      .expect(200)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});
