import React from "react";
import { Container, NotFoundTitle, Graphic } from "./NotFound.styled";
import NotFoundImage from "../../assets/NotFoundImage.png";

export const NotFound = () => {
  return (
    <Container>
      <Graphic src={NotFoundImage} alt="Not Found" />
      <NotFoundTitle>There's nothing on the List !</NotFoundTitle>
    </Container>
  );
};
