import styled from 'styled-components';

export const MealContainer = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 834px) {
    margin-right: 150px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  }
`;

export const MealDashbord = styled.div`
  margin-top: 12px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 12px;
  height: 232px;
  background: #0f0f0f;
  /* background: #fff; */
  /* borderRadius: 52px; */
  border-radius: 13px;
  max-width: 300px;
  position: relative;
  /* width: 834px; */
  @media screen and (min-width: 834px) {
    max-width: 780px;
    padding: 32px 14px;
    gap: 32px;
    margin-top: 6px;
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
export const MealSubTextMain = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;
  width: 100%;
  @media screen and (min-width: 834px) {
    margin-top: 0px;
    width: auto;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const MealSubText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const MealSubWrapper = styled.div`
  display: flex;
  gap: 20px;
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
  max-width: 780px;

  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`;

export const RenderContainer = styled.div`
  position: relative;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 12px;
`;

export const RenderContainerItemName = styled.p`
  color: var(--primary-color-white);
  width: calc(100% - 30px);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  @media screen and (min-width: 834px) {
    width: 105px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const RenderContainerItem = styled.p`
  margin-left: 20px;
  color: var(--primary-color-white);
  /* Body text/1 */
  font-family: 'Poppins400';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  max-height: 25px;
  @media screen and (min-width: 834px) {
    min-width: 80px;
    position: relative;
    left: 120px;
  }
`;

// export const NutrWrap = styled.div`
//   display: flex;
//   @media screen and (min-width: 834px) {
//     gap: 32px;
//   }
// `;

export const Wrapper = styled.div`
  @media screen and (min-width: 834px) {
    /* width: 834px; */
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  gap: 6px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 15px;
  @media screen and (min-width: 834px) {
    /* position: static; */
    top: 0px;
  }
`;
