#!/usr/bin/env node
// import {} from '../controllers/AppControllers';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Get "/" route');
});

router.get('/students', )

module.exports = { router };