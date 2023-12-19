import styled from 'styled-components';

export const ChartWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
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
  margin-left: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`;

export const Percentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`;
