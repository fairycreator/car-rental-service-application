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
`;

 export const IconWrapper = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
`;

 export const LineChartsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 16px;
   margin-bottom: 26px;
   gap: 26px;
 `;

 export const ChartWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 6px;
 `;

export const ValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

 export const Value = styled.h2`
   font-family: 'Poppins400';
   font-weight: 400;
   font-size: 18px;
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


