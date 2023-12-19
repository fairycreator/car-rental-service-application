import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    flex-direction: row;
    padding: 36px 40px;
    gap: 40px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

export const SecondTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Calories = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
`;

export const Item = styled.li`
  display: flex;
`;

export const ChartInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`;

export const Amount = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`;

export const Text = styled.p`
  color: var(--primary-color-grey);
`;
