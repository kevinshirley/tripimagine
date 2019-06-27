const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTripInput(data) {
  let errors = {};

  data.destination = !isEmpty(data.destination) ? data.destination : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  data.to = !isEmpty(data.to) ? data.to : '';
  data.budget = !isEmpty(data.budget) ? data.budget : '';
  data.message = !isEmpty(data.message) ? data.message : '';

  if (!Validator.isLength(data.destination, { min: 2, max: 30 })) {
    errors.destination = 'Destination field needs to be at least 2 characters';
  }

  if (Validator.isEmpty(data.destination)) {
    errors.destination = 'Destination field is required';
  }
  
  if (Validator.isEmpty(data.from)) {
    errors.from = 'Date from field is required';
  }

  if (Validator.isEmpty(data.to)) {
    errors.to = 'Date to field is required';
  }

  if (!Validator.isLength(data.message, { min: 6, max: 500 })) {
    errors.message = 'Message field needs to be at least 6 characters';
  }

  if (Validator.isEmpty(data.message)) {
    errors.message = 'Message field is required';
  }

  if (!isEmpty(data.budget)) {
    if (!Validator.isNumeric(data.budget)) {
      errors.budget = 'Budget field can only be numeric values';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};
