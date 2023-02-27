#!/usr/bin/env node
/**
 * Simple Express server
 * @module full_server/server
 */
// const express = require('express');
import express from 'express';
import {router} from './routes/index';

/**
 * Port number
 * @const {number}
*/
const PORT = PORT ? process.env.PORT: 1245;

/**
 * Routes
 */

/**
 * Express app
 * @const
*/
const app = express();

app.use(router);
/**
 * Listen on port.
 * @name listen
 * @memberof module:server~app
 * @param {number} PORT - port number
 * @param {function} callback - Callback function
 */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT} https://localhost:${PORT}`);
});
