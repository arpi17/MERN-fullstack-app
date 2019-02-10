const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateEducationInput(data) {
  let errors = {};
  let { school, degree, fieldofstudy, from } = data;

  // validator.isEmpty() only accepts string arguments
  school = !isEmpty(school) ? school : "";
  degree = !isEmpty(degree) ? degree : "";
  fieldofstudy = !isEmpty(fieldofstudy) ? fieldofstudy : "";
  from = !isEmpty(from) ? from : "";

  // School validation
  if (validator.isEmpty(school)) {
    errors.school = "School field is required";
  }
  // Degree validation
  if (validator.isEmpty(degree)) {
    errors.degree = "Degree field is required";
  }
  // Field of Study validation
  if (validator.isEmpty(fieldofstudy)) {
    errors.fieldofstudy = "Field of study is required";
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
