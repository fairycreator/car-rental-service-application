import { useField } from 'formik';
import { InputContainer, Input, ErrorMsg } from './TextInput.styled';

export const TextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <InputContainer>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <ErrorMsg>{meta.error}</ErrorMsg> : null}
    </InputContainer>
  );
};
