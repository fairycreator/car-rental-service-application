import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerDiary = styled.div`
  padding-top: 20px;
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`;

export const Title = styled.h2`
  color: var(--primary-color-white);
  font-size: 18px;
  line-height: 1.33;
`;
export const StyledLink = styled(Link)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`;

export const FoodBlocks = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`;
