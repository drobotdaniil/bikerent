const { Schema, model } = require('mongoose');

const schema = new Schema({
  rentedDate: { type: Date },
  type: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
});

module.exports = model('Bike', schema);
