import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  gap: 20px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);
`;

export const ProgressBar = styled.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid var(--primary-color-grey);
  background-color: white;
`;

export const DetailsWrapper = styled.div`
  padding: 22px 0;
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
