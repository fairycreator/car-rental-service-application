import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f4f8;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  color: #555;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 30px;
`;

export const Img = styled.img`
  max-width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
`;

export const Link = styled.a`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
