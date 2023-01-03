#!/usr/bin/env node

/**
 * Returns an updated map for all items with initial quantity at 1.
 *
 * @param {Map} map - The map to update.
 * @returns {Map} The updated map.
 * @throws {Error} If updating the quantity is not possible.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
