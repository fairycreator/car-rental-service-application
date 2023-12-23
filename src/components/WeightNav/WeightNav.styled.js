import styled from 'styled-components';

export const DivImage = styled.div`
  border: 1px solid #292928;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
  padding: 10px;
`;

export const DivEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const DivMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MainText = styled.h2`
  font-family: 'Poppins600', sans-serif;
  font-size: var(--main-font-size);
  font-style: normal;
  line-height: var(--main-line-height);
  color: var(--primary-color-white);
`;

export const Text = styled.p`
  font-family: 'Poppins400', sans-serif;
  font-size: var(--main-font-size);
  font-style: normal;
  line-height: var(--main-line-height);
  color: var(--primary-color-grey);
  margin-right: 4px;
`;

export const TextWeight = styled.p`
  font-family: 'Poppins500', sans-serif;
  color: var(--primary-color-white);
`;

export const MenuTitle = styled.p`
  font-family: 'Poppins500', sans-serif;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;
  color: var(--primary-color-white);
`;

export const MenuText = styled.p`
  font-family: 'Poppins400', sans-serif;
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  color: var(--primary-color-grey);
  margin-bottom: 16px;
`;

export const MenuDay = styled.p`
  font-family: 'Poppins400', sans-serif;
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  color: var(--primary-color-white);
`;

export const MenuDate = styled.p`
  font-family: 'Poppins500', sans-serif;
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  color: var(--primary-color-grey);
`;

export const BoxDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  @media screen and (min-width: 834px) {
    margin-bottom: 16px;
  }
`;

export const ButtonSend = styled.button`
  width: 300px;
  height: 36px;
  background-color: var(--primary-color-green-lite);
  border-radius: 12px;
  color: var(--primary-color-black-two);
  font-family: 'Poppins500', sans-serif;
  border: none;
  transition: var(--transition-dur-and-func);
  @media screen and (min-width: 834px) {
    width: 166px;
  }
`;

export const InputWeight = styled.input`
  width: 300px;
  height: 36px;
  padding: 8px 10px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--Color-Primary-Black-2, #0f0f0f);
  border-radius: 12px;
  color: var(--primary-color-grey);
  font-family: 'Poppins400', sans-serif;
  font-size: var(--main-font-size);
  &:focus {
    outline: none;
    border-color: var(--primary-color-green-lite);
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (min-width: 834px) {
    width: 166px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ButtonCancel = styled.button`
  border: none;
  background-color: var(--primary-color-black-one);
  color: var(--primary-color-grey);
  font-family: 'Poppins400', sans-serif;
  margin-top: 12px;
  width: 300px;
  height: 36px;
`;

export const ButtonClose = styled.button`
  background: 0 0;
  border: none;
  padding: 0px 0px;
  position: absolute;
  top: 20px;
  right: 32px;
`;

export const IconClose = styled.svg`
  display: none;
  @media screen and (min-width: 834px) {
    display: block;
    width: 16px;
    height: 16px;
    fill: var(--primary-color-grey);
    &:hover {
      stroke: var(--primary-color-green-lite);
    }
  }
`;
