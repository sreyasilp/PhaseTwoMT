const express = require('express');
const router = express.Router();
const staffRoutes = require('./staff.route');

router.use('/staff', staffRoutes);
module.exports = router;

