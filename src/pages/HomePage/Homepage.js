import React from "react";
import {
  HomePage,
  LinkButton,
  Hero,
  Title,
  SubTitle,
  ContentContainer,
} from "./HomePage.styled";

const Home = () => {
  return (
    <HomePage>
      <Hero>
        <ContentContainer>
          <Title>Welcome to our car rental service</Title>
          <SubTitle>
            We offer a wide selection of cars for rent for every taste and the
            budget. Reliability, comfort and affordable prices are our main
            priorities priorities.
          </SubTitle>
          <LinkButton href="/catalog">Learn more</LinkButton>
        </ContentContainer>
      </Hero>
    </HomePage>
  );
};

export default Home;
