const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateProfileInput(data) {
  let errors = {};
  let {
    handle,
    status,
    skills,
    website,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram
  } = data;

  // validator.isEmpty() only accepts string arguments
  handle = !isEmpty(handle) ? handle : "";
  status = !isEmpty(status) ? status : "";
  skills = !isEmpty(skills) ? skills : "";

  // Handle
  if (!validator.isLength(handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 40 characters";
  }
  if (validator.isEmpty(handle)) {
    errors.handle = "Profile handle is required";
  }
  // Status
  if (validator.isEmpty(status)) {
    errors.status = "Status field is required";
  }
  // Skills
  if (validator.isEmpty(skills)) {
    errors.skills = "Skills field is required";
  }
  // Website;
  if (!isEmpty(website)) {
    if (!validator.isURL(website)) {
      errors.website = "Not a valid URL";
    }
  }
  // Social;
  if (!isEmpty(youtube)) {
    if (!validator.isURL(youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }
  if (!isEmpty(twitter)) {
    if (!validator.isURL(twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }
  if (!isEmpty(facebook)) {
    if (!validator.isURL(facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }
  if (!isEmpty(linkedin)) {
    if (!validator.isURL(linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }
  if (!isEmpty(instagram)) {
    if (!validator.isURL(instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
