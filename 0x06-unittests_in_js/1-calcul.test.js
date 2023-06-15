const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('sum numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe('SUBTRACT', function () {
    it('subtract from a small number', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('subtract equal numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.3), 0);
    });
    it('subtract with b being negative', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.6), 6);
    });
  });
  describe('DIVIDE', function () {
    it('divide non-zero numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('division by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
