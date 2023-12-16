import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MonthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`;

export const IconArrowLeftWrapper = styled.svg`
  width: 16px;
  height: 16px;
  transform: rotate(180deg);
  fill: var(--primary-color-grey);

  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`;

export const IconArrowUprapper = styled.svg`
  width: 16px;
  height: 16px;
  transform: rotate(180deg);
  fill: var(--primary-color-grey);
`;

export const LineChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 26px;
  gap: 26px;

  @media screen and (min-width: 834px) {
    margin-bottom: 40px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 20px;
    gap: 20px;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ValueWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    justify-content: start;
    gap: 40px;
  }
`;

export const Value = styled.h2`
  font-family: 'Poppins400';
  font-weight: 400;
  font-size: 18px;

  @media screen and (min-width: 834px) {
  font-size: 22px;
  line-height: 1.5;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins400';
  font-weight: 400;
`;

export const AverageValue = styled.span`
  font-family: 'Poppins500';
  font-weight: 500;
  color: var(--primary-color-grey);
  margin-left: 8px;
`;
