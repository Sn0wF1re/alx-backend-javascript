const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('math in sendPaymentRequestToApi() is same as Utils.calculateNumber()', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(50, 100);
    expect(spy.calledWith('SUM', 50, 100)).to.be.true;
    expect(spy.callCount).to.be.equal(1);
    spy.restore();
  });
});
