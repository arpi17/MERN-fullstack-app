const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateExperienceInput(data) {
  let errors = {};
  let { title, company, from } = data;

  // validator.isEmpty() only accepts string arguments
  title = !isEmpty(title) ? title : "";
  company = !isEmpty(company) ? company : "";
  from = !isEmpty(from) ? from : "";

  // Title validation
  if (validator.isEmpty(title)) {
    errors.title = "Job title field is required";
  }
  // Company validation
  if (validator.isEmpty(company)) {
    errors.company = "Company field is required";
  }
  // From validation
  if (validator.isEmpty(from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
