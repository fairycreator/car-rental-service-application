import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    gap: 32px;
    padding: 24px 40px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 834px) {
  }
`;

export const BubbleIcon = styled.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`;

export const MilkIcon = styled.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`;

export const Text = styled.p`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`;

export const Amount = styled.span`
  font-size: 34px;
  font-weight: 600;
  line-height: 1.11;
  color: var(--primary-color-white);
`;
