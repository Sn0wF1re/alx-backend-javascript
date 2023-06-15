const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('test the result of getPaymentTokenFromAPI(true)', function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
