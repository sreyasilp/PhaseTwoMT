const express = require('express');
const router = express.Router();
const visitRoutes = require('./visit.route');

router.use('/visit', visitRoutes);
module.exports = router;

