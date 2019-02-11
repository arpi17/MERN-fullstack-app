const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validatePostInput(data) {
  let errors = {};
  let { text } = data;

  // validator.isEmpty() only accepts string arguments
  text = !isEmpty(text) ? text : "";

  // Text validation
  if (!validator.isLength(text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters";
  }
  if (validator.isEmpty(text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
