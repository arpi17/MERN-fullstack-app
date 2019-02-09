const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateLoginInput(data) {
  let errors = {};
  let { email, password } = data
  
  // validator.isEmpty() only accepts string arguments
  email     = !isEmpty(email)     ? email     : '';
  password  = !isEmpty(password)  ? password  : '';

  // Email validation
  if (!validator.isEmail(email)) {
    errors.email = 'Invalid email';
  }
  if (validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }
  // Password validation
  if (validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}