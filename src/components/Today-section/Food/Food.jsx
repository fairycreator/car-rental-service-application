import {
  Wrapper,
  ContentWrapper,
  List,
  Title,
  SecondTitle,
} from './Food.styled';

// import { CircularProgressBar } from '../CircularProgressBar/CircularProgressBar';

// import { CircularDeterminate } from '../CircularProgressBar/CircularProgressBar';

// import { DynamicDoughnutChart } from '../CircularProgressBar/CircularProgressBar';

import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
import { ProgressBarWrapper } from '../CircularProgressBar/CircularProgressBar.styled';

export const Food = () => {
  return (
    <Wrapper>
      <Title>Food</Title>
      <ContentWrapper>
        <ProgressBarWrapper>
          <CircularProgressBar />
        </ProgressBarWrapper>
        {/* <CircularWithValueLabel /> */}
        {/* <DynamicDoughnutChart /> */}
        {/* <CircularDeterminate /> */}
        {/* <CircularProgressBar /> */}
        {/* <ProgressBar>1360 calories</ProgressBar> */}
        <List>
          <li>
            {/* <CircularDeterminate /> */}
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
