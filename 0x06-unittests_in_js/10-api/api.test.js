const { expect } = require('chai');
const request = require('request');

const URL = 'http://localhost:7865';

describe('API integration testing', function () {
  it('Index page', function (done) {
    request.get(`${URL}/`, function (_err, res, body) {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    })
  });

  it('GET /cart/:id where id is positive numeral', function (done) {
    request.get(`${URL}/cart/12`, function (_err, res, body) {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    })
  });

  it('GET /cart/:id where id is not a numeral', function (done) {
    request.get(`${URL}/cart/damn`, function (_err, res, _body) {
      expect(res.statusCode).to.be.equal(404);
      done();
    })
  });

  it('GET /cart/:id where id is negative number', function (done) {
    request.get(`${URL}/cart/-96`, function (_err, res, _body) {
      expect(res.statusCode).to.be.equal(404);
      done();
    })
  });

  it('GET /available_payments returns valid response', function (done) {
    request.get(`${URL}/available_payments`, function (_err, res, body) {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    })
  });

  it('POST /login has a valid response', function (done) {
    request.post(`${URL}/login`, {json: {userName: 'Sn0wF1re'}}, function (err, res, body) {
      expect(res.statusCode).to.be.equal(200)
      expect(body).to.be.equal('Welcome Sn0wF1re');
      done();
    })
  });
});
