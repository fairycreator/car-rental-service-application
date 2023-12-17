import { DailyGoal } from './DailyGoal/DailyGoal';
import { Food } from './Food/Food';
import { Water } from './Water/Water';
import sprite from '../../assets/images/sprite.svg';
import {
  TitleWrapper,
  List,
  Item,
  Title,
  StyledLink,
  Icon,
  ItemFood,
  Wrapper,
} from './Today.styled';

export const Today = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Today</Title>
        <StyledLink to="/dashboard">
          On the way to the goal
          <Icon>
            <use href={`${sprite}#icon-arrowright`}></use>
          </Icon>
        </StyledLink>
      </TitleWrapper>
      <List>
        <Item>
          <DailyGoal />
        </Item>
        <Item>
          <Water />
        </Item>
        <ItemFood>
          <Food />
        </ItemFood>
      </List>
    </Wrapper>
  );
};
