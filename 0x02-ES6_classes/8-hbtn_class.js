#!/usr/bin/node

/**
 * A class representing HolbertonClass.
 */
export default class HolbertonClass {
  /**
   * Create a Holberton class.
   *
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Get the size of the class.
   *
   * @returns {number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Set the size of the class.
   *
   * @param {number} size - The new size of the class.
   * @throws {TypeError} If size is not a number.
   */
  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = size;
  }

  /**
   * Get the location of the class.
   *
   * @returns {string} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * set the location of the class.
   *
   * @param {string} location - The new location of the class.
   * @throws {TypeError} If the location is not a string.
   */
  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = location;
  }

  /**
   * Convert the class to a number.
   *
   * @returns {number} The size of the class.
   */
  valueOf() {
    return this._size;
  }

  /**
   * Convert the class to a string.
   *
   * @returns {string} The location of the class.
   */
  toString() {
    return this._location;
  }

  /**
   * Alternatively.
   *
   * [Symbol.toPrimitive](value) {
   *   if (value === 'number') {
   *     return this.size;
   *   }
   *   if (value === 'string') {
   *     return this.location;
   *   }
   *   return this;
   * }
   */
}
