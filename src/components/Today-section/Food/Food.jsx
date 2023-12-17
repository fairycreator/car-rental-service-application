import {
  Wrapper,
  ContentWrapper,
  List,
  Title,
  SecondTitle,
  ProgressBar,
} from './Food.styled';

export const Food = () => {
  return (
    <Wrapper>
      <Title>Food</Title>
      <ContentWrapper>
        <ProgressBar></ProgressBar>
        <List>
          <li>
            <SecondTitle>Carbonohidrates</SecondTitle>
            <p>Goal: </p>
            <p>left: </p>
          </li>
          <li>
            <div>o</div>
            <SecondTitle>Protein</SecondTitle>
            <p>Goal: </p>
            <p>left: </p>
          </li>
          <li>
            <div>o</div>
            <SecondTitle>Fat</SecondTitle>
            <p>Goal: </p>
            <p>left: </p>
          </li>
        </List>
      </ContentWrapper>
    </Wrapper>
  );
};
