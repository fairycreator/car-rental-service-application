import styled from "styled-components";
import bgImg from "../../assets/background-car-rental.jpeg";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Hero = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.3)
    ),
    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ContentContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  text-align: center;
  padding: 24px;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const SubTitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const LinkButton = styled.a`
  display: inline-block;
  border-radius: 22px;
  padding: 18px 24px;
  background: #3470ff;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
