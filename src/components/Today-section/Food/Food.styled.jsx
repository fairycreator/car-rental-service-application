import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
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
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
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

export const ProgressBar = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 100%;
  background-color: white;
  color: black;
  text-align: center;
`;
