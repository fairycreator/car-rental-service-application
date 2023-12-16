import sprite from '../../../assets/images/sprite.svg';
import {
  Title,
  List,
  Item,
  BubbleIcon,
  MilkIcon,
  Text,
  Amount,
} from './DailyGoal.styled';

export const DailyGoal = () => {
  return (
    <div>
      <Title>Daily goal</Title>
      <List>
        <Item>
          <BubbleIcon>
            <use href={`${sprite}#bubble`}></use>
          </BubbleIcon>
          <Text>
            Calories <br /> <Amount>1700</Amount>
          </Text>
        </Item>
        <Item>
          <MilkIcon>
            <use href={`${sprite}#milk`}></use>
          </MilkIcon>
          <Text>
            Water <br />
            <Amount>1500</Amount> ml
          </Text>
        </Item>
      </List>
    </div>
  );
};
