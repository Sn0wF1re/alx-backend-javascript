const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('sum numbers', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });
  describe('SUBTRACT', function () {
    it('subtract from a small number', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('subtract equal numbers', function () {
      expect(calculateNumber('SUBTRACT', 1.5, 2.3)).to.equal(0);
    });
    it('subtract with b being negative', function () {
      expect(calculateNumber('SUBTRACT', 1.4, -4.6)).to.equal(6);
    });
  });
  describe('DIVIDE', function () {
    it('divide non-zero numbers', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('division by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
