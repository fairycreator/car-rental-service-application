import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

export const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    gap: 40px;
    padding: 24px 22px;
  }
`;

export const ProgressBar = styled.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid var(--primary-color-grey);
  background-color: var(--primary-color-violet);
  margin: 0;
  padding: 0;
  color: black;
  text-align: center;
`;

export const DetailsWrapper = styled.div`
  /* padding: 22px 0; */
  @media screen and (min-width: 834px) {
    /* padding: 33px 0; */
  }
`;

export const SecondTitle = styled.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`;

export const Text = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`;

export const Span = styled.span`
  color: var(--primary-color-white);
`;

export const Amount = styled.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`;

export const TrashIcon = styled.svg`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);

  @media screen and (min-width: 834px) {
    top: 24px;
    right: 24px;
  }
`;

export const AddIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: var(--primary-color-black-two);
  background-color: var(--primary-color-green-lite);
  border-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;
