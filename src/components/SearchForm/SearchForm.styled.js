import styled from "styled-components";
import Select from "react-select";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SubForm = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
`;

export const StyledSelect = styled(Select)`
  .Select__control {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 4px 8px;
    font-size: 0.9rem;

    &:hover {
      border-color: #adb5bd;
    }
  }

  .Select__menu {
    font-size: 0.9rem;
  }

  .Select__single-value {
    color: #495057;
  }
`;

export const EnterText = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LabelMilage = styled.input.attrs({
  type: "number",
})`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: #495057;

  &::placeholder {
    color: #6c757d;
  }
`;

export const BtnSearch = styled.button`
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0b5ed7;
  }
`;
