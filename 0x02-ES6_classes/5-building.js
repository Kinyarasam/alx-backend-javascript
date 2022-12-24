#!/usr/bin/env node

export default class Building {
  /**
   * A class representing a Building.
   *
   * @param {number} sqft - The size of the building in square feet.
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== 'Building') {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /**
   * Getter for the sqft attribute.
   *
   * @returns {number} The size of the building in square feet.
   */
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be an number');
    }
    this._sqft = sqft;
  }

  /**
   * implemented to provide an evacuation warning message.
   *
   * @abstract
   *
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
  */
}
