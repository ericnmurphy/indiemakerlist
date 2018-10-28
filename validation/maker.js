const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validateMakerInput = data => {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.twitter = !isEmpty(data.twitter) ? data.twitter : "";
  data.image = !isEmpty(data.image) ? data.image : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Maker name is required";
  }

  if (Validator.isEmpty(data.twitter)) {
    errors.twitter = "Maker Twitter handle is required";
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = "Maker image is required";
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
