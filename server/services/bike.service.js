class BikeService {
  constructor(model) {
    this.model = model;
  }

  bikes = async () => {
    try {
      const bikes = await this.model.find({});

      return bikes;
    } catch (err) {
      throw new Error(err);
    }
  };

  createBike = async ({ name, type, price }) => {
    try {
      await this.model.create({ name, type, price });
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };

  updateBike = async ({ id }) => {
    try {
      const { available, rentedDate } = await this.model.findById({ _id: id });
      await this.model.updateOne(
        { _id: id },
        rentedDate
          ? {
              $unset: { rentedDate: '' },
              $set: { available: !available },
            }
          : { $set: { available: !available, rentedDate: new Date() } }
      );
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };

  deleteBike = async ({ id }) => {
    try {
      await this.model.findByIdAndRemove(id);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
}

module.exports = BikeService;
