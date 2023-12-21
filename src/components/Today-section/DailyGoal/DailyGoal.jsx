// import { useSelector } from 'react-redux';
// import {
//   selectUserBMRRate,
//   selectUserWaterRate,
// } from '../../../redux/auth/authSelectors';
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
  // const userBMRRate = useSelector(selectUserBMRRate);
  // const userWaterRate = useSelector(selectUserWaterRate);

  const userBMRRate = 1700;
  const userWaterRate = 1050;

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
            <Amount>{userBMRRate}</Amount>
          </Text>
        </Item>
        <Item>
          <MilkIcon>
            <use href={`${sprite}#milk`}></use>
          </MilkIcon>
          <Text>
            <p> Water</p>
            <Amount>
              {userWaterRate} <Span>ml</Span>
            </Amount>
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};
