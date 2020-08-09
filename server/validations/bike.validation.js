const { check } = require('express-validator');

class BikeValidation {
  checkBike() {
    return [
      check('name').isLength({ min: 1 }),
      check('type').isLength({ min: 1 }),
      check('price').isNumeric(),
    ];
  }
}

module.exports = BikeValidation;
