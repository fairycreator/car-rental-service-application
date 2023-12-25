import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerDiary = styled.div`
  padding-top: 20px;
  max-width: 300px;
  @media screen and (min-width: 834px) {
    max-width: 558px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-family: 'Poppins400';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;
export const StyledLink = styled(Link)`
  color: #b6b6b6;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

export const FoodBlocks = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`;
