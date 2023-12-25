import styled from 'styled-components';

export const MealContainer = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin-right: 196px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  }
`;

export const MealDashbord = styled.div`
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 12px;
  height: 232px;
  background: #0f0f0f;
  /* background: #fff; */
  /* borderRadius: 52px; */
  border-radius: 13px;
  max-width: 300px;
  /* width: 834px; */
  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 240px;
  }
`;

export const MealImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const MealSubscription = styled.div`
  width: 178px;
  @media screen and (min-width: 834px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MealSubText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const MealTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
`;

export const Numeration = styled.p`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
`;

export const RecordMealBlock = styled.div`
  max-width: 676px;
  margin-bottom: 24px;
`;

export const RenderContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const RenderContainerItem = styled.p`
  color: var(--primary-color-white);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  max-height: 25px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 834px) {
    /* width: 834px; */
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`;
