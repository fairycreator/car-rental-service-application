import {
  RecCard,
  Image,
  CardTextWrapper,
  CardTitle,
  CardCalloriesWrapper,
  CardWeight,
  CardCallories,
} from './RecommendedCard.styled';

export const RecommendedCard = ({
  name ,
  amount ,
  img ,
  calories ,
}) => {
  return (
    <RecCard>
      <Image src={img} alt="img" />
      <CardTextWrapper>
        <CardTitle>{name}</CardTitle>
        <CardCalloriesWrapper>
          <CardWeight>{amount}</CardWeight>
          <CardCallories>{calories} calories</CardCallories>
        </CardCalloriesWrapper>
      </CardTextWrapper>
    </RecCard>
  );
};