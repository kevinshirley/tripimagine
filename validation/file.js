const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFileInput(data) {
  let errors = {};

  data.cloudUrl = !isEmpty(data.cloudUrl) ? data.cloudUrl : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.dateWhen = !isEmpty(data.dateWhen) ? data.dateWhen : '';

  // if (Validator.isEmpty(data.category) || data.category === "0") {
  //   errors.category = 'Category field is required';
  // }

  // if (Validator.isEmpty(data.cloudUrl)) {
  //   errors.cloudUrl = 'Cloud Url field is required';
  // }
  
  // if (Validator.isEmpty(data.name)) {
  //   errors.name = 'File field is required';
  // }

  // if (Validator.isEmpty(data.dateWhen)) {
  //   errors.dateWhen = 'When date field is required';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};
