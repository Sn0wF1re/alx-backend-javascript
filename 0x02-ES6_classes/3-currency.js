export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(cde) {
    this._code = cde;
  }

  get name() {
    return this._name;
  }

  set name(nme) {
    this._name = nme;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
