#!/usr/bin/env node

export default class Currency {
  /**
   * A class representing a currency.
   *
   * @param {string} code - The code of the currency (e.g. "USD", "EUR").
   * @param {string} name - The name of the currency (e.g. "United States Dollar", "Euro").
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Getter for the code attribute.
   *
   * @returns {string} The code of the currency.
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for the code attribute.
   *
   * @returns {string} code - The new code of the currency.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Getter for the name attribute.
   *
   * @returns {string} The name of the currency.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the name attribute.
   *
   * @param {string} name - The new name of the currency.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Returns a string representation of the currency in the format name (code).
   *
   * @returns {string} The string representation of this currency.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
