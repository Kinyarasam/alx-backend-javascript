#!/usr/bin/env node
/**
 * Prompts the user for their name and outputs it.
 * @param {string} message - The message to display to the user
 * @param {string} name - The name input by the user
 * @returns {void}
 */
process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    const name = chunk.trim()
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
