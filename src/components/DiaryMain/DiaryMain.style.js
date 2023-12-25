import { styled } from 'styled-components';

export const ContainerDiary = styled.div`
  padding-top: 20px;
  max-width: 300px;
  @media screen and (min-width: 834px) {
    max-width: 558px;
  }
`;

export const ContentBlock = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
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
export const SeeMore = styled.p`
  color: #b6b6b6;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

export const FoodBlock = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const MealTitle = styled.h3`
  min-width: 100px;
  color: var(--Color-Primary-White, #fff);
  /* Headline text/H3 */
  font-family: 'Poppins500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;

export const MealOptions = styled.p`
  width: 160px;
  color: #fff;
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  align-items: center;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 834px) {
    width: AUTO;
  }
`;
export const TitleBlock = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
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
