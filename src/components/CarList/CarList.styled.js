import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(319px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  padding-top: 16px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  background-color: white;

  box-shadow: 7px 7px 7px #0000004d, -23px 0 20px -23px #000c,
    23px 0 20px -23px #000c, inset 0 0 40px #0000001a;
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
