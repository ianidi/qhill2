import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Head,
  SwitchTitleContainer,
  Title,
  SwitchContainer,
  SwitchItem,
  ButtonCreate,
  WidgetContainer,
} from "./ListWidget.styled";
import FundCard from "../FundCard";

import { ReactComponent as PlusImage } from "../../Asset/Images/plus.svg";

const ListWidget = ({ funds }) => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  return (
    <Container>
      <Head>
        <SwitchTitleContainer>
          <Title>Managed DeFunds</Title>
          <SwitchContainer>
            <SwitchItem active>Active</SwitchItem>
            <SwitchItem>Closed</SwitchItem>
          </SwitchContainer>
        </SwitchTitleContainer>

        <ButtonCreate onClick={() => navigate("/fund/create")}>
          <PlusImage />
          Create DeFund
        </ButtonCreate>
      </Head>
      <WidgetContainer>
        {funds?.map((fund) => (
          <FundCard key={fund.id} {...fund} />
        ))}
      </WidgetContainer>
    </Container>
  );
};

export default ListWidget;
