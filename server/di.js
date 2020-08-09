const bottle = require('bottlejs').pop('app');
const db = require('./models');
const { BikeController } = require('./controllers');

const { BikeService } = require('./services');

const { BikeValidation } = require('./validations');

const ValidationError = require('./middlewares/error-check.middleware');

bottle.factory('BikeModel', () => {
  return db.Bike;
});

bottle.factory('BikeController', (container) => {
  return new BikeController(container.BikeService);
});

bottle.factory('BikeService', (container) => {
  return new BikeService(container.BikeModel);
});

bottle.factory('BikeValidation', () => {
  return new BikeValidation();
});

bottle.factory('CheckError', () => {
  return new ValidationError();
});

module.exports = bottle;
