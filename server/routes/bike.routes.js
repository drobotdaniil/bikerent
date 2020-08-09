const { Router } = require('express');
const di = require('../di');
const { BikeController, BikeValidation, CheckError } = di.container;

const router = Router();

router.post(
  '/',
  BikeValidation.checkBike(),
  CheckError.handleError,
  BikeController.createBike
);

router.get('/', BikeController.getBikes);

router.delete('/', BikeController.deleteBike);

router.patch('/', BikeController.updateBike);

module.exports = router;
