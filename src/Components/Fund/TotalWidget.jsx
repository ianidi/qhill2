import React from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  TitleContainer,
  Title,
  WidgetContainer,
  Widget,
  AUMWidget,
  WidgetTitle,
  WidgetCurrency,
  WidgetVal,
  WidgetGrowthWrapper,
  WidgetValue,
} from "./TotalWidget.styled";
import Select from "../UI/Select";
import Numeral from "../UI/Numeral";

import { ReactComponent as AUMImage } from "../../Asset/Images/aum.svg";
import { ReactComponent as CommissionImage } from "../../Asset/Images/commission.svg";
import { ReactComponent as InvestorsImage } from "../../Asset/Images/investors.svg";
import { ReactComponent as PositiveImage } from "../../Asset/Images/positive.svg";
import { ReactComponent as NegativeImage } from "../../Asset/Images/negative.svg";

const TotalWidget = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <TitleContainer>
        <Title>Total DeFunds’ indicators</Title>
        <Select
          //options={options.brand}
          placeholder="This month"
          //value={brand}
          name="brand"
          //setValue={(val) => dispatch(setBrand(val))}
        />
      </TitleContainer>
      <WidgetContainer>
        <AUMWidget>
          <AUMImage />
          <WidgetTitle>
            AUM <WidgetCurrency>(USDT)</WidgetCurrency>
          </WidgetTitle>
          <WidgetVal>
            <Numeral>121212</Numeral>
          </WidgetVal>
          <WidgetGrowth
            value={444}
            caption="USDT"
            containerStyle={{ background: "#fff" }}
          >
            this month
          </WidgetGrowth>
        </AUMWidget>
        <Widget>
          <CommissionImage />
          <WidgetTitle>
            Сommission <WidgetCurrency>(USDT)</WidgetCurrency>
          </WidgetTitle>
          <WidgetVal>
            <Numeral>6969</Numeral>
          </WidgetVal>
        </Widget>
        <Widget>
          <InvestorsImage />
          <WidgetTitle>Investors</WidgetTitle>
          <WidgetVal>
            <Numeral>55</Numeral>
          </WidgetVal>
          <WidgetGrowth value={8} caption="investors" negative>
            this month
          </WidgetGrowth>
        </Widget>
      </WidgetContainer>
    </Container>
  );
};

const WidgetGrowth = ({
  children,
  value,
  caption,
  negative = false,
  containerStyle = {},
}) => {
  return (
    <WidgetGrowthWrapper style={containerStyle}>
      {negative ? (
        <React.Fragment>
          <NegativeImage />
          <WidgetValue negative>
            <Numeral>{value}</Numeral> {caption}
          </WidgetValue>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <PositiveImage />
          <WidgetValue positive>
            <Numeral>{value}</Numeral> {caption}
          </WidgetValue>
        </React.Fragment>
      )}
      &nbsp;{children}
    </WidgetGrowthWrapper>
  );
};

export default TotalWidget;
