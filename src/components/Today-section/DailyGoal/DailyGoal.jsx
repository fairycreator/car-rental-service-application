import sprite from '../../../assets/images/sprite.svg';
import {
  Wrapper,
  List,
  Item,
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
        <Item>
          <BubbleIcon>
            <use href={`${sprite}#icon-bubble`}></use>
          </BubbleIcon>
          <Text>
            Calories <br /> <Amount>1700</Amount>
          </Text>
        </Item>
        <Item>
          <MilkIcon>
            <use href={`${sprite}#icon-milk`}></use>
          </MilkIcon>
          <Text>
            Water <br />
            <Amount>1500</Amount> ml
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};
