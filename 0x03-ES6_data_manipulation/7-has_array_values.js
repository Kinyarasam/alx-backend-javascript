#!/usr/bin/env node

/**
 * Returns a boolean indicating if all the elements in the array exist within the set.
 *
 * @param {Set} set - The set to check.
 * @param {Array} array - The array to check against the set.
 * @returns {Boolean} True if all the elements in the array exist in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
