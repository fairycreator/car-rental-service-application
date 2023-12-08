import styled from "styled-components";
import { ReactComponent as GoHeart } from "../../assets/heart.svg";

export const Item = styled.li`
  position: relative;
  border-radius: 14px;
  max-width: 474px;
  min-height: 426px;
  overflow: hidden;
  gap: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ThumbImage = styled.div`
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 268px;
  object-fit: contain;
  object-position: 50% 50%;
`;

export const Paragraf = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 20px 0;
`;

export const Span = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Descr = styled.p`
  margin: 0;
  margin-bottom: 10px;
  padding: 0 10px;
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  align-items: center;
  width: 200px;
  min-height: 20px;
  padding: 5px;
  margin: 20px auto;
  cursor: pointer;
  color: white;
  background-color: #3470ff;
  border: 1px solid #3470ff;
  border-radius: 6px;
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

export const StyledHeart = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;

  top: 14px;
  right: 14px;
  cursor: pointer;
  &:hover {
  }
`;

export const StyledHeartIcon = styled(GoHeart)`
  width: 18px;
  height: 18px;
  fill: ${({ $isInFavorites }) =>
    $isInFavorites ? "rgba(255, 52, 120, 1)" : "transparent"};
  stroke: ${({ $isInFavorites }) =>
    $isInFavorites ? "rgba(252, 75, 5, 1)" : "#fd0707"};
`;
