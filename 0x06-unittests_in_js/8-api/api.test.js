const { expect } = require('chai');
const request = require('request');

describe('API integration testing', function () {
  it('Index page', function (done) {
    request.get('http://localhost:7865/', function (_err, res, body) {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    })
  });
});
