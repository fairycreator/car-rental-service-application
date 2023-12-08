import styled from "styled-components";
import { ReactComponent as HeartSvg } from "../../assets/heart.svg";

export const Item = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ThumbImage = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Paragraf = styled.div`
  padding: 10px;
  p {
    margin: 0;
    color: #333;
    font-size: 1em;
  }
`;

export const Span = styled.span`
  font-weight: bold;
`;

export const Descr = styled.div`
  padding: 0 10px 10px;
  color: #666;
  font-size: 0.9em;
`;

export const Btn = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 0 0 8px 8px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledHeart = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const StyledHeartIcon = styled(HeartSvg)`
  fill: ${(props) => (props.$isInFavorites ? "red" : "none")};
  stroke: ${(props) => (props.$isInFavorites ? "red" : "black")};
`;
