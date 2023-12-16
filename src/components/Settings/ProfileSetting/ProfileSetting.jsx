import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { Formik } from 'formik';
import image from '../../../assets/images/settings-page-image.png';
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
} from './ProfileSetting.styled';

export const ProfileSetting = () => {
  return (
    <PageWrapper>
      <Title>Profile setting</Title>
      <ContentWrapper>
        <Image src={image} alt="Page image" />

        <Formik initialValues={{}}>
          <FormWrapper>
            <LabelInput htmlFor="name">
              Your name
              <FieldStyled id="name" name="name" />
            </LabelInput>
            <LabelInput htmlFor="photo">
              Your photo
              <Avatar src="" alt="users avatar" />
              <input
                type="file"
                name="image"
                // set supported file types here,
                // could also check again within formik validation or backend
                accept="image/png, .svg"
                // onChange={(e) => {
                //   // Object is possibly null error w/o check
                //   if (e.currentTarget.files) {
                //     setFieldValue('image', e.currentTarget.files[0]);
                //   }
                // }}
              />
            </LabelInput>
            <LabelInput htmlFor="age">
              Your age
              <FieldStyled id="age" name="age" />
            </LabelInput>
            <FormControl sx={formControlStyled}>
              <FormLabel id="gender-radio-group" sx={formLabelStyled}>
                Gender
              </FormLabel>
              <RadioGroup
                row
                sx={{ gap: '16px' }}
                aria-labelledby="gender-radio-group"
                name="gender-radio-group"
                defaultValue=""
              >
                <FormControlLabel
                  value="Male"
                  sx={formControlLabel}
                  control={<Radio sx={radioStyled} />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  sx={formControlLabel}
                  control={<Radio sx={radioStyled} />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
            <LabelInput htmlFor="height">
              Height
              <FieldStyled id="height" name="height" />
            </LabelInput>
            <LabelInput htmlFor="weight">
              Weight
              <FieldStyled id="weight" name="weight" />
            </LabelInput>
            <FormControl sx={{ gap: '12px' }}>
              <FormLabel id="activity-radio-group" sx={formLabelStyled}>
                Your activity
              </FormLabel>
              <RadioGroup
                row
                sx={{ gap: '16px' }}
                aria-labelledby="activity-radio-group"
                name="activity-radio-group"
                defaultValue=""
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
              </RadioGroup>
            </FormControl>
            <ButtonGroup aria-label="button group" sx={buttonGroupStyled}>
              <Button sx={buttonStyled}>Save</Button>
              <Button sx={buttonStyled}>Cancel</Button>
            </ButtonGroup>
          </FormWrapper>
        </Formik>
      </ContentWrapper>
    </PageWrapper>
  );
};
