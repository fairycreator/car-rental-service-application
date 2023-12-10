import styled from "styled-components";

export const Title = styled.p`
  margin: 0;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0;
  gap: 20px;
  padding-top: 40px;
`;

export const SubForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  gap: 20px;
`;

export const EnterText = styled.div`
  display: flex;
  width: 320px;
  height: 40px;
  border: none;
  align-items: flex-start;
  margin-top: 20px;

  margin: 0;
`;

export const LabelMilage1 = styled.input`
  display: flex;
  width: 160px;
  height: 38px;
  border: none;
  margin: 0;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 4px 0px 0px 4px;
  border-right: 1px solid lightgray;
  background-color: white;
  align-items: flex-start;
`;
export const LabelMilage2 = styled.input`
  display: flex;
  width: 160px;
  height: 38px;
  border: none;
  margin: 0;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 0px 4px 4px 0px;
  background-color: white;
  border-left: 1px solid lightgray;
`;
export const BtnSearch = styled.button`
  width: 100px;
  height: 38px;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 4px;
  background: #3470ff;
  transition: all 0.3s ease-in-out;
  &.active {
    background-color: #afffff;
    color: #000000;
  }
  &:hover {
    scale: 1.1;
    color: red;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
