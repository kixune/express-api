// require modules for testing
var app = require('../app');
    request = require("request");
    supertest = require("supertest");

describe("Express Server Api", function() {
  it("returns status code 200", function() {
    supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
