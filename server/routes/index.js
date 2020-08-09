const { Router } = require('express');

const rootRouter = Router();

const bikeRouter = require('./bike.routes');

rootRouter.use('/bikes', bikeRouter);

module.exports = rootRouter;