import styled from 'styled-components';

export const DivImage = styled.div`
  border: 1px solid #292928;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
  padding: 10px;
`;

export const DivEdit = styled.div`
  display: flex;
  gap: 4px;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
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
