import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
} from './ProfileSetting.styled';
import { theme } from '../../../GlobalStyle';

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
            <FormControl
              sx={{
                gap: '12px',
                [theme.breakpoints.down('tablet')]: {
                  width: '300px',
                },
                [theme.breakpoints.up('tablet')]: {
                  width: '212px',
                },
              }}
            >
              <FormLabel
                id="gender-radio-group"
                sx={{
                  fontFamily: 'Poppins500',
                  fontSize: '14px',
                  color: 'white.main',
                  '&.Mui-focused': {
                    color: 'white.main',
                  },
                }}
              >
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
                  sx={{
                    gap: '8px',
                    margin: '0px',
                    '& .MuiTypography-root': {
                      fontFamily: 'Poppins400',
                      fontWeight: 400,
                      fontSize: '14px',
                    },
                    '& .MuiButtonBase-root': {
                      padding: '0px',
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: 'grey.main',
                        '&.Mui-checked': {
                          color: 'greenlite.main',
                        },
                        '& .MuiSvgIcon-root': {
                          width: '12px',
                          height: '12px',
                        },
                      }}
                    />
                  }
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  sx={{
                    gap: '8px',
                    margin: '0px',
                    '& .MuiTypography-root': {
                      fontFamily: 'Poppins400',
                      fontWeight: 400,
                      fontSize: '14px',
                    },
                    '& .MuiButtonBase-root': {
                      padding: '0px',
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: 'grey.main',
                        '&.Mui-checked': {
                          color: 'greenlite.main',
                        },
                        '& .MuiSvgIcon-root': {
                          width: '12px',
                          height: '12px',
                        },
                      }}
                    />
                  }
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
              <FormLabel
                id="activity-radio-group"
                sx={{
                  fontFamily: 'Poppins500',
                  fontSize: '14px',
                  color: 'white.main',
                  '&.Mui-focused': {
                    color: 'white.main',
                  },
                }}
              >
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
                  sx={{
                    gap: '8px',
                    margin: '0px',
                    '& .MuiTypography-root': {
                      fontFamily: 'Poppins400',
                      fontWeight: 400,
                      fontSize: '14px',
                    },
                    '& .MuiButtonBase-root': {
                      padding: '0px',
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: 'grey.main',
                        '&.Mui-checked': {
                          color: 'greenlite.main',
                        },
                        '& .MuiSvgIcon-root': {
                          width: '12px',
                          height: '12px',
                        },
                      }}
                    />
                  }
                  label="1.2 - if you do not have physical activity and sedentary work"
                />
                <FormControlLabel
                  value="1.375"
                  sx={{
                    gap: '8px',
                    margin: '0px',
                    '& .MuiTypography-root': {
                      fontFamily: 'Poppins400',
                      fontWeight: 400,
                      fontSize: '14px',
                    },
                    '& .MuiButtonBase-root': {
                      padding: '0px',
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: 'grey.main',
                        '&.Mui-checked': {
                          color: 'greenlite.main',
                        },
                        '& .MuiSvgIcon-root': {
                          width: '12px',
                          height: '12px',
                        },
                      }}
                    />
                  }
                  label="1.375 - if you do short runs or light gymnastics 1-3 times a
                  week"
                />
                <FormControlLabel
                  value="1.55"
                  sx={{
                    gap: '8px',
                    margin: '0px',
                    '& .MuiTypography-root': {
                      fontFamily: 'Poppins400',
                      fontWeight: 400,
                      fontSize: '14px',
                    },
                    '& .MuiButtonBase-root': {
                      padding: '0px',
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: 'grey.main',
                        '&.Mui-checked': {
                          color: 'greenlite.main',
                        },
                        '& .MuiSvgIcon-root': {
                          width: '12px',
                          height: '12px',
                        },
                      }}
                    />
                  }
                  label="1.55 - if you play sports with average loads 3-5 times a week"
                />
                <FormControlLabel
                  value="1.725"
                  sx={{
                    gap: '8px',
                    margin: '0px',
                    '& .MuiTypography-root': {
                      fontFamily: 'Poppins400',
                      fontWeight: 400,
                      fontSize: '14px',
                    },
                    '& .MuiButtonBase-root': {
                      padding: '0px',
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: 'grey.main',
                        '&.Mui-checked': {
                          color: 'greenlite.main',
                        },
                        '& .MuiSvgIcon-root': {
                          width: '12px',
                          height: '12px',
                        },
                      }}
                    />
                  }
                  label="1.725 - if you train fully 6-7 times a week"
                />
                <FormControlLabel
                  value="1.9"
                  sx={{
                    gap: '8px',
                    margin: '0px',
                    '& .MuiTypography-root': {
                      fontFamily: 'Poppins400',
                      fontWeight: 400,
                      fontSize: '14px',
                    },
                    '& .MuiButtonBase-root': {
                      padding: '0px',
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: 'grey.main',
                        '&.Mui-checked': {
                          color: 'greenlite.main',
                        },
                        '& .MuiSvgIcon-root': {
                          width: '12px',
                          height: '12px',
                        },
                      }}
                    />
                  }
                  label="1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program"
                />
              </RadioGroup>
            </FormControl>
            <div>
              <button type="submit">Save</button>
              <button type="button">Cancel</button>
            </div>
          </FormWrapper>
        </Formik>
      </ContentWrapper>
    </PageWrapper>
  );
};