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
          <Title>Ласкаво просимо до нашого сервісу оренди автомобілів</Title>
          <SubTitle>
            Ми пропонуємо широкий вибір автомобілів для оренди на будь-який смак
            і бюджет. Надійність, комфорт і доступні ціни - наші головні
            пріоритети.
          </SubTitle>
          <LinkButton href="/catalog">Дізнатися більше</LinkButton>
        </ContentContainer>
      </Hero>
    </HomePage>
  );
};

export default Home;
