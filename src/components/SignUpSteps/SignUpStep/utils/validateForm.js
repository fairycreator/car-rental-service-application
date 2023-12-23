import { signUpSchema } from '../../../../schemas/signUpSchema';

export const validateForm = async (
  name,
  email,
  password,
  setError,
  setIsFormValid
) => {
  // Validate each field using the Yup schema
  const nameValidation = await signUpSchema.fields.name
    .validate(name.value)
    .then(() => null)
    .catch((err) => err.message);

  const emailValidation = await signUpSchema.fields.email
    .validate(email.value)
    .then(() => null)
    .catch((err) => err.message);

  const passwordValidation = await signUpSchema.fields.password
    .validate(password.value)
    .then(() => null)
    .catch((err) => err.message);

  // Set the errors for each field
  setError(name, nameValidation);
  setError(email, emailValidation);
  setError(password, passwordValidation);

  // Check if all fields are valid
  const allFieldsValid =
    !nameValidation && !emailValidation && !passwordValidation;
  setIsFormValid(allFieldsValid);
};
