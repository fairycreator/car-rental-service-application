import styled from 'styled-components';

export const FeatureListItem = styled.li`
  color: white;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '•';
    color: var(--primary-color-green-lite);
    font-size: 20px;
    vertical-align: middle;
    padding-right: 10px;
  }
`;
