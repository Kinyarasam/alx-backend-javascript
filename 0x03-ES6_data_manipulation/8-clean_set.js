#!/usr/bin/env node

/**
 * Returns a string of all the set values that start with a specific string.
 *
 * @param {Set} set - The set to process.
 * @param {String} startString - The string that values must start with.
 * @returns {String} The string of set values.
 */
export default function cleanSet(set, startString) {
  return [...set] // Convert the set to an array
    .filter((value) => value.startsWith(startString)) // Filter values that start with startString
    .map((value) => value.replace(startString, '')) // Remove startString from the values
    .join('-'); // Join the values with a dash
}
