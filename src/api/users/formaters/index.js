//Validator
const isEmpty = (string) => string && string.trim() === "";

exports.validateData = (data) => {
  let errors = {};
  if (isEmpty(data.email)) errors.email = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

exports.formatData = (data) => {
  let content = {};
  if (!isEmpty(data.email)) {
    content.email = data.email;
  }
  if (!isEmpty(data.name)) {
    content.name = data.name;
  }
  if (!isEmpty(data.lastname)) {
    content.lastname = data.lastname;
  }

  return content;
};
