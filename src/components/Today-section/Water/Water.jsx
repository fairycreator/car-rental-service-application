import sprite from '../../../assets/images/sprite.svg';
import {
  Title,
  Wrapper,
  ProgressBar,
  TrashIcon,
  AddIcon,
  DetailsWrapper,
  SecondTitle,
  Text,
  Amount,
  Button,
} from './Water.styled';

export const Water = () => {
  return (
    <>
      <Title>Water</Title>
      <Wrapper>
        <TrashIcon>
          <use href={`${sprite}#icon-arrow-down`}></use>
        </TrashIcon>
        <ProgressBar>%</ProgressBar>
        <DetailsWrapper>
          <SecondTitle>Water consumption</SecondTitle>
          <Text>
            <Amount>1500</Amount>ml <br />
            left: 450 ml
          </Text>
          <Button type="button">
            <AddIcon>
              <use href={`${sprite}#icon-add-converted`}></use>
            </AddIcon>
            Add water intake
          </Button>
        </DetailsWrapper>
      </Wrapper>
    </>
  );
};
