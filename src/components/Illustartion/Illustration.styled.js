import styled from 'styled-components';
// import welcomeDesktop from '../../assets/backgroundImages/welcomepage.jpg';
// import welcomeDesktop2x from '../../assets/backgroundImages/welcomepage.jpg';
// import welcomeTablet from '../../assets/backgroundImages/welcomepage.jpg';
// import welcomeTablet2x from '../../assets/backgroundImages/welcomepage.jpg';
import welcomeMobile from '../../assets/backgroundImages/welcomepage.jpg';
import welcomeMobile2x from '../../assets/backgroundImages/welcomepage.jpg';
import signMobile from '../../assets/backgroundImages/welcomepage.jpg';
import signMobile2x from '../../assets/backgroundImages/welcomepage.jpg';

const getBackgroundImage = ($pathname = ' ', highResolution = false) => {
  switch (true) {
    case $pathname.includes('/welcome'):
      return `url(${highResolution ? welcomeMobile2x : welcomeMobile})`;
    case $pathname.includes('/signin'):
    case $pathname.includes('/signup'):
    case $pathname.includes('/forgot-password'):
      return `url(${highResolution ? signMobile2x : signMobile})`;
    default:
      return 'none';
  }
};

export const Illustration = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  height: 296px;
  width: 300px;
  background-image: ${(props) => getBackgroundImage(props.$pathname)};

  @media (orientation: portrait) {
    background-size: 80%;
  }

  @media only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: ${(props) => getBackgroundImage(props.$pathname, true)};
  }

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-top: 0;
    background-image: ${(props) => getBackgroundImage(props.$pathname)};

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: ${(props) => getBackgroundImage(props.$pathname)};
    }
  }

  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-image: ${(props) => getBackgroundImage(props.$pathname)};

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: ${(props) => getBackgroundImage(props.$pathname)};
    }
  }
`;
