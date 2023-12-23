import { useState, useEffect } from 'react';

const useInput = (initialValue, yupFieldSchema) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) {
      yupFieldSchema
        .validate(value)
        .then(() => setError(null))
        .catch((err) => setError(err.message));
    }
  }, [value, touched, yupFieldSchema]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
    yupFieldSchema
      .validate(value)
      .then(() => setError(null))
      .catch((err) => setError(err.message));
  };

  return {
    value,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
  };
};

export default useInput;
