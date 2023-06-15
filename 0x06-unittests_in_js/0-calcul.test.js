const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('adds whole numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should round down decimals', function () {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
  });
  it('should round up the decimals', function () {
    assert.strictEqual(calculateNumber(2.6, 4.7), 8);
  });
  it('should round one int down and another up', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
});
