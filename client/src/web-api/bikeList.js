import { CommonMethods } from './common';

class BikeListAPI extends CommonMethods {
  async getBikeList() {
    const res = await this.sendResponse('/bikes', 'GET');
    return res.map(this.transformData);
  }

  async addBikeToList(body) {
    const res = await this.sendResponse('/bikes', 'POST', body);
    return res;
  }

  async deleteBikeFromList(body) {
    const res = await this.sendResponse('/bikes', 'DELETE', body);
    return res;
  }

  async changeBike(body) {
    const res = await this.sendResponse('/bikes', 'PATCH', body);
    return res;
  }

  transformData(bike) {
    return {
      id: bike._id,
      name: bike.name,
      type: bike.type,
      price: bike.price,
      available: bike.available,
      rentedDate: bike.rentedDate,
    };
  }
}

export const bikeListAPI = new BikeListAPI();
