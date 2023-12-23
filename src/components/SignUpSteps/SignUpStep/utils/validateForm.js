import { signUpSchema } from '../../../../schemas/signUpSchema';

export const validateForm = async (
  nameValue,
  emailValue,
  passwordValue,
  setIsFormValid
) => {
  try {
    await signUpSchema.fields.name.validate(nameValue);
    await signUpSchema.fields.email.validate(emailValue);
    await signUpSchema.fields.password.validate(passwordValue);
    setIsFormValid(true);
  } catch (error) {
    setIsFormValid(false);
  }
};
