class BikeController {
  constructor(entityService) {
    this.entityService = entityService;
  }

  getBikes = async (req, res) => {
    try {
      const result = await this.entityService.bikes();

      return res.send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

  createBike = async (req, res) => {
    try {
      const result = await this.entityService.createBike(req.body);

      res.send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

  updateBike = async (req, res) => {
    try {
      const result = await this.entityService.updateBike(req.body);

      res.send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

  deleteBike = async (req, res) => {
    try {
      const result = await this.entityService.deleteBike(req.body);

      res.send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  };
}

module.exports = BikeController;
