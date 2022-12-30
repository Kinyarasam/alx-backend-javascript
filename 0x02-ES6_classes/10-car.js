#!/usr/bin/node

/**
 * A class representing a Car.
 */
export default class Car {
  /**
   * Constructor
   *
   * @param {string} brand - 
   * @param {string} motor -
   * @param {string} color -
   */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * Get the car brand.
   *
   * @returns {string} The car brand.
   */
  get brand() {
    return this._brand;
  }

  /**
   * Set the car Brand.
   *
   * @param {string} brand - The brand of the car.
   * @throws {TypeError} If the brand is not a string.
   */
  set brand(brand) {
    /**
     * if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    */
    this._brand = brand;
  }

  /**
   * Get the motor of the car.
   *
   * @returns {string} The motor of the car.
   */
  get motor() {
    return this._motor;
  }

  /**
   * Set the motor of the car.
   *
   * @param {string} motor - The motor of the car.
   * @throws {TypeError} If the motor is not a string.
   */
  set motor(motor) {
    /*
     * if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    */
    this._motor = motor;
  }

  /**
   * Get the color of the Car.
   *
   * @returns {string} The color of the car.
   */
  get color() {
    return this._color;
  }

  /**
   * set the color of the car.
   *
   * @param {string} color - The color of the car.
   * @throws {TypeError} If the color is not a string.
   */
  set color(color) {
    /*
     * if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }
    */
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  static set [Symbol.species](hint) {
    Car.speciesHint = hint;
  }

  /**
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
