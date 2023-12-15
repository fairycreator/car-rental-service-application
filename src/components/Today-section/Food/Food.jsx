import { Wrapper, List, Title, SecondTitle, ProgressBar } from './Food.styled';

export const Food = () => {
  return (
    <>
      <Title>Food</Title>
      <Wrapper>
        <ProgressBar>1360 calories</ProgressBar>
        <List>
          <li>
            <div>o</div>
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
      </Wrapper>
    </>
  );
};
