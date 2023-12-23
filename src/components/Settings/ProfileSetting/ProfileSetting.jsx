import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import { validationSchema } from '../../../schemas/profileUpdateSchema';
import { selectUserData } from '../../../redux/auth/authSelectors';
// import { updateUser } from '../../../redux/auth/authOperations';
import image from '../../../assets/images/settings-page-image.png';
import sprite from '../../../assets/images/sprite.svg';
import {
  PageWrapper,
  Title,
  ContentWrapper,
  Image,
  FormWrapper,
  LabelInput,
  FieldStyled,
  Avatar,
  formControlStyled,
  formLabelStyled,
  formControlLabel,
  radioStyled,
  buttonGroupStyled,
  buttonStyled,
  ErrorMessageStyled,
  InputWrapper,
  IconWrapper,
  DownloadButton,
  InputStyled,
  DownloadSpan,
} from './ProfileSetting.styled';

let selectedImage;

export const ProfileSetting = () => {
  // const dispatch = useDispatch();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/main');
  const currentUserData = useSelector(selectUserData);
  const { name, avatar, age, gender, height, weight, activityLevel } =
    currentUserData;

  const initialValues = {
    name,
    avatar: '',
    age,
    gender,
    height,
    weight,
    activityLevel,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formik.values.activityLevel = Number(values.activityLevel);

      let formData = new FormData();
      if (selectedImage) {
        formData.append('avatar', formik.values.avatar);
      }
      formData.append('name', formik.values.name);
      formData.append('age', formik.values.age);
      formData.append('gender', formik.values.gender);
      formData.append('height', formik.values.height);
      formData.append('weight', formik.values.weight);
      formData.append('activityLevel', formik.values.activityLevel);

      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
        selectedImage = null;
      }
      // console.log(avatar);
      // console.log(formik.values);
      // dispatch(updateUser(formData));
    },
  });

  return (
    <PageWrapper>
      <Title>Profile setting</Title>
      <ContentWrapper>
        <Image src={image} alt="Page image" />

        <Formik>
          <FormWrapper onSubmit={formik.handleSubmit}>
            <LabelInput htmlFor="name">
              Your name
              <FieldStyled
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name && (
                <ErrorMessageStyled id="feedback" name="name">
                  {formik.errors.name}
                </ErrorMessageStyled>
              )}
            </LabelInput>
            <LabelInput>
              Your photo
              <InputWrapper>
                <Avatar
                  src={
                    !selectedImage
                      ? avatar
                      : URL.createObjectURL(formik.values.avatar)
                  }
                  alt="user avatar"
                  file={formik.values.avatar}
                />
                <DownloadButton type="button" htmlFor="avatar">
                  <InputStyled
                    id="avatar"
                    name="avatar"
                    type="file"
                    accept="image/png, .svg, .jpg, .gif, .jpeg, .webp"
                    onChange={(e) => {
                      if (!e.currentTarget.files) {
                        // toastError('No image selected')
                        return;
                      }
                      selectedImage = e.currentTarget.files[0];
                      formik.setFieldValue('avatar', selectedImage);
                    }}
                  />
                  <IconWrapper>
                    <use href={`${sprite}#icon-direct-inbox`} />
                  </IconWrapper>
                  <DownloadSpan>
                    {selectedImage
                      ? formik.values.avatar.name
                      : 'Download new photo'}
                  </DownloadSpan>
                </DownloadButton>
              </InputWrapper>
            </LabelInput>
            <LabelInput htmlFor="age">
              Your age
              <FieldStyled
                id="age"
                name="age"
                type="number"
                value={formik.values.age}
                onChange={formik.handleChange}
              />
              {formik.errors.age && formik.touched.age && (
                <ErrorMessageStyled id="feedback" name="age">
                  {formik.errors.age}
                </ErrorMessageStyled>
              )}
            </LabelInput>
            <FormControl sx={formControlStyled}>
              <FormLabel id="gender" sx={formLabelStyled}>
                Gender
              </FormLabel>
              <RadioGroup
                row
                sx={{ gap: '16px' }}
                aria-labelledby="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value="male"
                  sx={formControlLabel}
                  control={<Radio sx={radioStyled} />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  sx={formControlLabel}
                  control={<Radio sx={radioStyled} />}
                  label="Female"
                />
                {formik.errors.gender && formik.touched.gender && (
                  <ErrorMessageStyled id="feedback" name="gender">
                    {formik.errors.gender}
                  </ErrorMessageStyled>
                )}
              </RadioGroup>
            </FormControl>
            <LabelInput htmlFor="height">
              Height
              <FieldStyled
                id="height"
                name="height"
                type="number"
                value={formik.values.height}
                onChange={formik.handleChange}
              />
              {formik.errors.height && formik.touched.height && (
                <ErrorMessageStyled id="feedback" name="height">
                  {formik.errors.height}
                </ErrorMessageStyled>
              )}
              <ErrorMessageStyled name="height" component="span" />
            </LabelInput>
            <LabelInput htmlFor="weight">
              Weight
              <FieldStyled
                id="weight"
                name="weight"
                type="number"
                value={formik.values.weight}
                onChange={formik.handleChange}
              />
              {formik.errors.weight && formik.touched.weight && (
                <ErrorMessageStyled id="feedback" name="weight">
                  {formik.errors.weight}
                </ErrorMessageStyled>
              )}
              <ErrorMessageStyled name="weight" component="span" />
            </LabelInput>
            <FormControl sx={{ gap: '12px' }}>
              <FormLabel id="activityLevel" sx={formLabelStyled}>
                Your activity
              </FormLabel>
              <RadioGroup
                row
                sx={{ gap: '16px' }}
                aria-labelledby="activityLevel"
                name="activityLevel"
                type="number"
                value={formik.values.activityLevel}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value="1.2"
                  sx={formControlLabel}
                  control={<Radio sx={radioStyled} />}
                  label="1.2 - if you do not have physical activity and sedentary work"
                />
                <FormControlLabel
                  value="1.375"
                  sx={formControlLabel}
                  control={<Radio sx={radioStyled} />}
                  label="1.375 - if you do short runs or light gymnastics 1-3 times a
                  week"
                />
                <FormControlLabel
                  value="1.55"
                  sx={formControlLabel}
                  control={<Radio sx={radioStyled} />}
                  label="1.55 - if you play sports with average loads 3-5 times a week"
                />
                <FormControlLabel
                  value="1.725"
                  sx={formControlLabel}
                  control={<Radio sx={radioStyled} />}
                  label="1.725 - if you train fully 6-7 times a week"
                />
                <FormControlLabel
                  value="1.9"
                  sx={formControlLabel}
                  control={<Radio sx={radioStyled} />}
                  label="1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program"
                />
                {formik.errors.activityLevel &&
                  formik.touched.activityLevel && (
                    <ErrorMessageStyled id="feedback" name="activityLevel">
                      {formik.errors.activityLevel}
                    </ErrorMessageStyled>
                  )}
              </RadioGroup>
            </FormControl>
            <ButtonGroup aria-label="button group" sx={buttonGroupStyled}>
              <Button sx={buttonStyled} type="submit">
                Save
              </Button>
              <Button sx={buttonStyled}>
                <Link to={backLinkHref.current}>Cancel</Link>
              </Button>
            </ButtonGroup>
          </FormWrapper>
        </Formik>
      </ContentWrapper>
    </PageWrapper>
  );
};
