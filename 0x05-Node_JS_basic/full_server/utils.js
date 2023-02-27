#!/usr/bin/env node
from fs import fs.promises;

const readDatabase = async (file_path) => {
  try {
    const data = await fs.readFile(file_path, 'utf-8')
  } catch (error) {
    throw new Error(`Cannot load the database: ${error}`);
  }
};