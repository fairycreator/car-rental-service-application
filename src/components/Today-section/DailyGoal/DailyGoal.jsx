import sprite from '../../../assets/images/sprite.svg';
import {
  Wrapper,
  Title,
  List,
  Item,
  BubbleIcon,
  MilkIcon,
  Text,
  Amount,
  Span,
} from './DailyGoal.styled';

export const DailyGoal = () => {
  const dailyCaloriesGoal = 1700;
  const dailyWaterGoal = 1500;

  return (
    <Wrapper>
      <Title>Daily goal</Title>
      <List>
        <Item>
          <BubbleIcon>
            <use href={`${sprite}#bubble`}></use>
          </BubbleIcon>
          <Text>
            <p>Calories</p>
            <Amount>{dailyCaloriesGoal}</Amount>
          </Text>
        </Item>
        <Item>
          <MilkIcon>
            <use href={`${sprite}#milk`}></use>
          </MilkIcon>
          <Text>
            <p> Water</p>
            <Amount>
              {dailyWaterGoal} <Span>ml</Span>
            </Amount>
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};
