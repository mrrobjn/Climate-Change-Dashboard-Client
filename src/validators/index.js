export const validateConfirmPassword = (password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    return "Passwword do not match";
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
  const passwordConfirmError = validateConfirmPassword(
    password,
    passwordConfirm
  );

  if (passwordConfirmError) {
    error.push(passwordConfirmError);
  }

  return error;
};
