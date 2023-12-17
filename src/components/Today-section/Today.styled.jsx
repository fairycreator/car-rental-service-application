import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  width: 300px;

  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`;

export const Icon = styled.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
`;
