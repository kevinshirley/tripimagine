const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTripFormInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.message = !isEmpty(data.message) ? data.message : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isLength(data.phone, { min: 9, max: undefined })) {
    errors.phone = 'Phone must be valid';
  }

  if (!Validator.isNumeric(data.phone)) {
    errors.phone = 'Phone field must be numeric values only';
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Phone field is required';
  }

  if (!Validator.isLength(data.message, { min: 6, max: 500 })) {
    errors.message = 'Message must be at least 6 characters';
  }

  if (Validator.isEmpty(data.message)) {
    errors.message = 'Message field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};
