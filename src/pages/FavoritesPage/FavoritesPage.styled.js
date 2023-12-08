import styled from "styled-components";

export const FavoriteCanvas = styled.div`
  padding: 20px;
  background: #f7f8fa;
`;

export const DeleteBtn = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  margin: 20px 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7875;
  }
`;
