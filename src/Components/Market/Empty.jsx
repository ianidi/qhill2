import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Title } from "./Empty.styled";
import oops from "../../Asset/Images/oops.png";
import oops2x from "../../Asset/Images/oops@2x.png";
import oops3x from "../../Asset/Images/oops@3x.png";

const Empty = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <img src={oops} srcSet={`${oops2x} 2x, ${oops3x} 3x`} alt="" />
      <Title>No DeFunds found</Title>
    </Container>
  );
};

export default Empty;
