import styled from 'styled-components';

export const FeatureListItem = styled.li`
  color: white;
  font-size: 14px;
  font-family: 'Poppins400';
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '•';
    color: var(--primary-color-green-lite);
    font-size: 30px;
    vertical-align: middle;
    padding-right: 8px;
  }
  /* 
  @media screen and (min-width: 834px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  } */
`;
