#!/usr/bin/env node

/**
 * Returns a new ArrayBuffer with an Int8 value at a specific position.
 *
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position in the ArrayBuffer to set the value.
 * @param {Number} value - The Int8 value to set.
 * @returns {ArrayBuffer} The new ArrayBuffer with the Int8 value set.
 * @throws {Error} If adding the value is not possible.
 */
export default function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer with the specified length.
  const buffer = new ArrayBuffer(length);

  // Check if the position is within the range of the buffer.
  if (position < 0 || position >= buffer.byteLength) {
    throw new Error('Position outside range');
  }

  // Create a new Int8Array view of the buffer
  const typedArray = new Int8Array(buffer);

  // Set the value at the specified position
  typedArray[position] = value;

  return buffer;
}
