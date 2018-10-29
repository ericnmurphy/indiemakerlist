const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validateProjectInput = data => {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.url = !isEmpty(data.url) ? data.url : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Project name is required";
  }

  if (!isEmpty(data.url)) {
    if (!Validator.isURL(data.url)) {
      errors.url = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
