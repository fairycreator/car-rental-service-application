import { Link } from 'react-router-dom';
import FeatureItem from '../../components/FeatureItem/FeatureItem';

import {
  Container,
  MainContent,
  Illustration,
  Title,
  Description,
  FeatureList,
  Buttons,
  WelcomePrimaryBtn,
  WelcomeOutlinedBtn,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <MainContent>
        <Illustration
          src="../assets/images/welcomepage.png"
          alt="Illustration"
        />
        <Title>Set goals and achieve them</Title>
        <Description>
          The service will help you set goals and follow them.
        </Description>
        <Buttons>
          <Link to="/signin">
            <WelcomePrimaryBtn>Sign in</WelcomePrimaryBtn>
          </Link>
          <Link to="/signup">
            <WelcomeOutlinedBtn>Sign up</WelcomeOutlinedBtn>
          </Link>
        </Buttons>
        <FeatureList>
          <FeatureItem>Set goals</FeatureItem>
          <FeatureItem>Watch your calories</FeatureItem>
          <FeatureItem>Keep track of your water intake</FeatureItem>
          <FeatureItem>Control your weight</FeatureItem>
        </FeatureList>
      </MainContent>
    </Container>
  );
};

export default WelcomePage;
