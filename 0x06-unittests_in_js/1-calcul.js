#!/usr/bin/env node
/**
 * @module 1-calcul.js
 */

/**
 * Simple Calculator.
 *
 * @param {number} a - First number
 * @param {number} b - second number
 * @param {String} type - Operation.
 *
 * @returns {number} The result from the operation.
 */
const calculateNumber = (type, a, b) => {
  const A = Math.round(a);
  const B = Math.round(b);
  let result = 0;

  if (type === 'SUM') {
    result = A + B;
  }
  if (type === 'SUBTRACT') {
    result = A - B;
  }
  if (type === 'DIVIDE') {
    result = (B !== 0) ? A / B : 'Error';
  }
  
  return result;
};

module.exports = calculateNumber;
