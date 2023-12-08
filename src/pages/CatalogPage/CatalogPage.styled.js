import styled from "styled-components";
import Button from "../../components/Button/Button";

export const CatalogPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f8fa;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px; /* Or the max-width you prefer */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const CarImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CarInfo = styled.div`
  padding: 0.5rem 1rem;
`;

export const CarName = styled.h2`
  font-size: 1rem;
  font-weight: bold;
`;

export const CarPrice = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const CarDetails = styled.p`
  font-size: 0.8rem;
  color: #999;
`;

export const LoadMoreButton = styled(Button)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #0056b3;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003d82;
  }
`;
