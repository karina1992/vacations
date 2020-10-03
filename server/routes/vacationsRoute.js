const express = require('express');
const router = express.Router();
const vacationsController = require('../controllers/vacationsController');

router.post('/createVacation', vacationsController.createVacation);

module.exports = router;