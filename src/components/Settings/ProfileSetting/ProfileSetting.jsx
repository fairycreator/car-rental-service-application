import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import { validationSchema } from '../../../schemas/profileUpdateSchema';
import image from '../../../assets/images/settings-page-image.png';
import defaultAvatar from '../../../assets/images/default-avatar.png';
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

const showImage = (data) => {
  const reader = new FileReader();
  reader.readAsDataURL(data);
  function isFileImage(data) {
    return data && data['type'].split('/')[0] === 'image';
  }
  reader.onload = () => {
    isFileImage(data) ? reader.result : '/default.svg';
  };
  // console.log(data);
  // console.log(reader.result);
  return reader.result;
};

export const ProfileSetting = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/main');

  const initialValues = {
    name: 'test',
    image: '',
    age: 18,
    gender: 'male',
    height: 10,
    weight: 10,
    activity: 1.2,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formik.values.activity = Number(values.activity);
      console.log(values);
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
                {formik.values.image ? (
                  <Avatar
                    src={showImage(formik.values.image)}
                    alt="user avatar"
                    file={formik.values.image}
                  />
                ) : (
                  <Avatar
                    src={defaultAvatar}
                    alt="user avatar"
                    file={formik.values.image}
                  />
                )}
                <DownloadButton type="button" htmlFor="image">
                  <InputStyled
                    id="image"
                    name="image"
                    type="file"
                    accept="image/png, .svg, .jpg, .gif, .jpeg, .webp"
                    onChange={(e) => {
                      if (e.currentTarget.files) {
                        formik.setFieldValue('image', e.currentTarget.files[0]);
                      }
                    }}
                  />
                  <IconWrapper>
                    <use href={`${sprite}#icon-direct-inbox`} />
                  </IconWrapper>
                  <DownloadSpan>
                    {formik.values.image.name
                      ? formik.values.image.name
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
              <FormLabel id="activity" sx={formLabelStyled}>
                Your activity
              </FormLabel>
              <RadioGroup
                row
                sx={{ gap: '16px' }}
                aria-labelledby="activity"
                name="activity"
                type="number"
                value={formik.values.activity}
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
                {formik.errors.activity && formik.touched.activity && (
                  <ErrorMessageStyled id="feedback" name="activity">
                    {formik.errors.activity}
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
