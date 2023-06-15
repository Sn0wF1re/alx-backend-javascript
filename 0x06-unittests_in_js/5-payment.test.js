const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let spy;
  beforeEach(function () {
    if (!spy) spy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    spy.resetHistory();
  });

  it('call sendPaymentRequestToApi() with 100, 20', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(120);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
    stub.restore();
  });
  it('call sendPaymentRequestToApi() with 10, 10', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(20);
    sendPaymentRequestToApi(10, 10);
    expect(stub.calledWith('SUM', 10, 10)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
    stub.restore();
  });
});
