#!/usr/bin/env node
/**
 * @module 0-calcul.js
 */

/**
 * Function that rounds and returns sum of two numbers.
 *
 * @param {number} a - First number
 * @param {number} b - Second number
 *
 * @returns {number} Sum of `a` and `b`
 */
const calculateNumber = (a, b) => {
  a = Math.round(a);
  b = Math.round(b);

  return (a + b);
};

module.exports = calculateNumber;
