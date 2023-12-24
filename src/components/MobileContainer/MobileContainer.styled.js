import styled from 'styled-components';

export const IconMenu = styled.svg`
  @media screen and (max-width: 833px) {
    width: 16px;
    height: 16px;
    fill: var(--primary-color-grey);

    &:hover {
      stroke: var(--primary-color-green-lite);
    }
  }
  @media screen and (min-width: 834px) {
    display: none;
  }
`;

export const ButtonClose = styled.button`
  background: 0 0;
  border: none;
  padding: 0px 0px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const IconClose = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
  &:hover {
    stroke: var(--primary-color-green-lite);
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  top: 153px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  width: 300px;
  height: 184px;
  padding: 24px 0px 24px 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  background-color: var(--primary-color-black-two);
`;

export const DivLogo = styled.div`
  display: flex;
`;
