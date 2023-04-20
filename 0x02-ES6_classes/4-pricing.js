import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(x) {
    this._amount = x;
  }

  get currency() {
    return this._currency;
  }

  set currency(x) {
    if (x instanceof Currency) {
      this._currency = x;
    }
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency._name} (${this._currency._code})`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
