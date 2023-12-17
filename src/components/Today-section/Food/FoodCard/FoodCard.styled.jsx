import styled from 'styled-components';

export const ChartWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Title = styled.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Amount = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`;
