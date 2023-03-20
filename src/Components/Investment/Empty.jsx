import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Container, Title, Caption, ButtonBlue } from "./Empty.styled";

import oops from "../../Asset/Images/oops.png";
import oops2x from "../../Asset/Images/oops@2x.png";
import oops3x from "../../Asset/Images/oops@3x.png";
import { ReactComponent as PlusImage } from "../../Asset/Images/plus.svg";

const Empty = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  return (
    <Container>
      <img src={oops} srcSet={`${oops2x} 2x, ${oops3x} 3x`} alt="" />
      <Title>You don’t have any investments yet</Title>
      <Caption>Go to the Market and choose the DeFund to invest</Caption>
      <ButtonBlue onClick={() => navigate("/market")}>
        <PlusImage />
        To DeFunds Market
      </ButtonBlue>
    </Container>
  );
};

export default Empty;
