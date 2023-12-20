import { styled } from 'styled-components';

export const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  /* visibility: hidden; */
  /* opacity: 0;    */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBlock = styled.div`
  padding: 10px;
  width: 300px;
  height: 546px;
  border-radius: 12px;
  background-color: #0f0f0f;
`;

export const Title = styled.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: 'Poppins500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
`;

export const RecordInputBig = styled.input`
  width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  background: #0f0f0f;

  ::placeholder {
    font-family: 'Poppins400';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  /* justify-content: center;
  align-items: center; */
`;

export const SubInputBlock = styled.div`
  width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SubInput = styled.input`
  display: flex;
  width: 120px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  background: #0f0f0f;
`;

export const ButtonBlock = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Button = styled.div`
  width: 256px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  /* Button text/1 */
  font-family: 'Poppins500';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-left: auto;
  margin-right: auto;
  '
`;