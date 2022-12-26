#!/usr/bin/env node

/**
 * Class representing an airport.
 */
export default class Airport {
  /**
   * Create an airport
   *
   * @param {string} name - The name of the airport.
   * @param {string} code - The airport code.
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Get the name of the airport.
   *
   * @return {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the airport.
   *
   * @param {string} name - The name of the airport.
   * @throws {TypeError} If the name is not a string.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  /**
   * Get the airport code.
   *
   * @return {string} The airport code.
   */
  get code() {
    return this._code;
  }

  /**
   * Set the airport code
   *
   * @param {string} code - The airport code.
   * @throws {TypeError} If the code is not a string.
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = code;
  }

  /**
   * Get the default string representation of the airport.
   *
   * @returns {string} The code of the airport.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
