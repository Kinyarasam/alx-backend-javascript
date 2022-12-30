#!/usr/bin/node

import Car from './10-car';

/**
 * Class EVCar that extends a 'Car' class.
 *
 * @extends Car
 */
export default class EVCar extends Car {
  /**
   * Constructor
   *
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor of the car.
   * @param {string} color - The color of the car.
   * @param {string} range - The range of the color.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  /**
   * Get the range of the color.
   *
   * @returns {string} The range of the car.
   */
  get range() {
    return this._range;
  }

  /**
   * Set the range of the color
   *
   * @param {string} range - The range of the car.
   * @returns {string} The range of the car.
   */
  set range(range) {
    this._range = range;
  }

  /**
   * Overrides the cloneCAr function of the Car class to return a new instance of the car class instead of EVCar.
   *
   * @returns {Car} A new instance of the Car class.
   */
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
