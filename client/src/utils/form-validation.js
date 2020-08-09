export const InputKeys = {
  name: 'name',
  price: 'price',
  select: 'select',
};

export const errorMessages = {
  [InputKeys.name]: 'Bike name should be from 1 to 20 characters',
  [InputKeys.price]: 'Incorrect price format',
  [InputKeys.select]: 'Please choose a value',
};

export const validationMethods = new Map([
  [
    InputKeys.name,
    (value) => {
      return !!value && value.length < 20;
    },
  ],
  [
    InputKeys.price,
    (value) => {
      const price = parseFloat(value);
      const isNegative = price < 0;
      return !isNaN(price) && isFinite(price) && !isNegative;
    },
  ],
  [
    InputKeys.select,
    (value) => {
      return !!value;
    },
  ],
]);

// export const bikeFormInputKeys = [InputKeys.name, InputKeys.price, InputKeys.select];
