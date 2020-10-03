const express = require('express');
const router = express.Router();
const vacationsController = require('../controllers/vacationsController');

router.post('/createVacation', vacationsController.createVacation);
router.get('/getAllVacations', vacationsController.getAllVacations);
router.get('/deleteVacation', vacationsController.deleteVacation);
router.post('/updateVacation', vacationsController.updateVacation);
module.exports = router;