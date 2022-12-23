#!/usr/bin/env node

import Currency from './3-currency';

export default class Pricing {
  /**
   * A class representing a price.
   *
   * @param {number} amount - The amount of the price.
   * @param {Currency} currency - The currency of the price.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Getter for the amount attribute.
   *
   * @returns {number} The currency of the price.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Setter for the amount attribute.
   *
   * @param {number} amount - The new amount of the price.
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  /**
   * Getter for the currency attribute.
   *
   * @returns {Currency} The currency of the price.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Setter for the currency attribute.
   *
   * @param {Currency} currency - The new currency of the price.
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = currency;
  }

  /**
   * Returns a string representation of the price in the format amount currency_name (currency_code).
   *
   * @returns {string} The string representation of the price.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`
  }

  /**
   * Converts a price to a different currency.
   *
   * @param {number} amount - The amount of the price.
   * @param {number} conversionRate - The conversion rate to use for the conversion.
   * @returns {number} The converted price.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversioRate must be a number');
    }
    return amount * conversionRate;
  }
}
