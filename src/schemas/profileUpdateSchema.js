import * as Yup from 'yup';

const MAX_FILE_SIZE = 102400;
const validFileExtensions = {
  image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short name')
    .max(20, 'Too long name')
    .required('Name should be filled'),
  image: Yup.mixed()
    .required('Required')
    .test('is-valid-type', 'Not a valid image type', (value) =>
      isValidFileType(value && value.name.toLowerCase(), 'image')
    )
    .test(
      'is-valid-size',
      'Max allowed size is 100KB',
      (value) => value && value.size <= MAX_FILE_SIZE
    ),
  age: Yup.number('Enter correct number')
    .positive('Age should be positive')
    .integer('Age should be integer')
    .min(18, 'Your should be older')
    .required('Age should be filled'),
  gender: Yup.string().oneOf(['male', 'female']).required(),
  height: Yup.number('Enter correct number')
    .positive('Height should be positive')
    .integer('Height should be integer')
    .required('Height should be filled'),
  weight: Yup.number('Enter correct number')
    .positive('Height should be positive')
    .integer('Height should be integer')
    .required('Height should be filled'),
  activity: Yup.number().oneOf([1.2, 1.375, 1.55, 1.725, 1.9]).required(),
});