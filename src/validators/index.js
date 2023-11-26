import isEmail from "validator/lib/isemail";

const validateConfirmPassword = (password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    return "Passwword do not match";
  } else {
    return "";
  }
};

const validateEmail = (email) => {
  if (!isEmail(email)) {
    return "Invalid Email";
  } else {
    return "";
  }
};

export const validateRegisterForm = (
  name,
  email,
  password,
  passwordConfirm
) => {
  let error = [];

  const emailError = validateEmail(email);
  const passwordConfirmError = validateConfirmPassword(
    password,
    passwordConfirm
  );

  if (emailError) {
    error.push(emailError);
  }
  if (passwordConfirmError) {
    error.push(passwordConfirmError);
  }

  return error;
};
