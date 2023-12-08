import styled, { css } from "styled-components";

export const ButtonClass = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
  margin: 20px 0;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #cccccc;
      cursor: not-allowed;
    `}
`;
