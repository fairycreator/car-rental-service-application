import sprite from '../../../assets/images/sprite.svg';
import {
  Wrapper,
  List,
  BubbleIcon,
  MilkIcon,
  Text,
  Amount,
} from './DailyGoal.styled';

export const DailyGoal = () => {
  return (
    <Wrapper>
      <h3>Daily goal</h3>
      <List>
        <li>
          <BubbleIcon>
            <use href={`${sprite}#icon-bubble`}></use>
          </BubbleIcon>
          <Text>
            Calories <Amount>1700</Amount>
          </Text>
        </li>
        <li>
          <MilkIcon>
            <use href={`${sprite}#icon-milk`}></use>
          </MilkIcon>
          <Text>
            Water <Amount>1500</Amount> ml
          </Text>
        </li>
      </List>
    </Wrapper>
  );
};
