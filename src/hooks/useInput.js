import { useState } from 'react';

const useInput = (initialValue = '', validationRules = {}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  const validate = () => {
    if (!validationRules) return;

    const { required, minLength, maxLength, pattern } = validationRules;

    if (required && !value.trim()) {
      setError('This field is required');
    } else if (minLength && value.length < minLength) {
      setError(`Minimum length is ${minLength} characters`);
    } else if (maxLength && value.length > maxLength) {
      setError(`Maximum length is ${maxLength} characters`);
    } else if (pattern && !pattern.test(value)) {
      setError('Invalid format');
    } else {
      setError(null);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (touched) {
      validate();
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validate();
  };

  return {
    value,
    error,
    touched,
    onChange: handleChange,
    onBlur: handleBlur,
  };
};

export default useInput;
