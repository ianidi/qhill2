import React from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  Head,
  SwitchTitleContainer,
  Title,
  SwitchContainer,
  SwitchItem,
  WidgetContainer,
} from "./ListWidget.styled";
import FundCard from "../FundCard";

const ListWidget = ({ funds }) => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Head>
        <SwitchTitleContainer>
          <Title>My Investment DeFunds</Title>
        </SwitchTitleContainer>
        <SwitchContainer>
          <SwitchItem active>Active</SwitchItem>
          <SwitchItem>Closed</SwitchItem>
        </SwitchContainer>
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
