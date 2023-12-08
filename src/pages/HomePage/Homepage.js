import React from "react";
import { HomePage, Img, Link, Title, SubTitle } from "./HomePage.styled";
import Background from "./";

const Home = () => {
  return (
    <HomePage>
      <Title>Ласкаво просимо до нашого сервісу оренди автомобілів</Title>
      <Img src={Background} alt="car rental service" />
      <SubTitle>
        Ми пропонуємо широкий вибір автомобілів для оренди на будь-який смак і
        бюджет. Надійність, комфорт і доступні ціни - наші головні пріоритети.
      </SubTitle>
      <Link href="#">Дізнатися більше</Link>
    </HomePage>
  );
};

export default Home;
