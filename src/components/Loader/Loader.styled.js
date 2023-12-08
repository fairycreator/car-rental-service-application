import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: relative;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #3f51b5;
    border-color: #3f51b5 transparent #3f51b5 transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;
