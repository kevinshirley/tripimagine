const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.timezone = !isEmpty(data.timezone) ? data.timezone : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 25 })) {
    errors.handle = 'Handle needs to be between 2 and 25 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle field is required';
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = 'Phone number field is required';
  }
  
  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required';
  }

  if (Validator.isEmpty(data.timezone)) {
    errors.timezone = 'Timezone field is required';
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};
