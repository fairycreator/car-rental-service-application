import sprite from '../../../assets/images/sprite.svg';
import {
  Wrapper,
  Title,
  ContentWrapper,
  ProgressBar,
  TrashIcon,
  AddIcon,
  DetailsWrapper,
  SecondTitle,
  Text,
  Amount,
  Button,
  Span,
} from './Water.styled';

export const Water = () => {
  return (
    <Wrapper>
      <Title>Water</Title>
      <ContentWrapper>
        <TrashIcon>
          <use href={`${sprite}#trash-delete`}></use>
        </TrashIcon>
        <ProgressBar>70%</ProgressBar>
        <DetailsWrapper>
          <SecondTitle>Water consumption</SecondTitle>

          <Text>
            <Amount>1500</Amount>ml
          </Text>
          <Text>
            <Span>left:</Span> 450 ml
          </Text>

          <Button type="button">
            <AddIcon>
              <use href={`${sprite}#icon-add-converted`}></use>
            </AddIcon>
            Add water intake
          </Button>
        </DetailsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
