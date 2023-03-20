import React from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  Head,
  TitleContainer,
  Dot,
  Title,
  WidgetContainer,
  Widget,
  AUMWidget,
  WidgetTitle,
  WidgetCurrency,
  WidgetVal,
  WidgetGrowthContainer,
  WidgetGrowthWrapper,
  WidgetValue,
} from "./TotalWidget.styled";
import Select from "../UI/Select";
import Numeral from "../UI/Numeral";

import { ReactComponent as GrowthImage } from "../../Asset/Images/growth.svg";
import { ReactComponent as BarsImage } from "../../Asset/Images/bars.svg";
import { ReactComponent as CommissionImage } from "../../Asset/Images/commission.svg";

const TotalWidget = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Head>
        <TitleContainer>
          <Dot />
          <Title>Summary Investments indicators</Title>
        </TitleContainer>
        <Select
          //options={options.brand}
          placeholder="This month"
          //value={brand}
          name="brand"
          //setValue={(val) => dispatch(setBrand(val))}
        />
      </Head>
      <WidgetContainer>
        <AUMWidget>
          <GrowthImage />
          <WidgetTitle>
            Сurrent investments <WidgetCurrency>(USDT)</WidgetCurrency>
          </WidgetTitle>
          <WidgetVal>
            <Numeral>121212</Numeral>
          </WidgetVal>
          <WidgetGrowthContainer>
            <WidgetGrowth
              value={444}
              caption="USDT"
              containerStyle={{ background: "#fff" }}
            >
              invested
            </WidgetGrowth>
            <WidgetGrowth
              value={-900}
              caption="USDT"
              containerStyle={{ background: "#fff" }}
              negative
            >
              withdrawn
            </WidgetGrowth>
          </WidgetGrowthContainer>
        </AUMWidget>
        <Widget>
          <BarsImage />
          <WidgetTitle>
            Profit or loss <WidgetCurrency>(USDT)</WidgetCurrency>
          </WidgetTitle>
          <WidgetVal positive>
            +<Numeral>212</Numeral>
          </WidgetVal>
        </Widget>
        <Widget>
          <CommissionImage />
          <WidgetTitle>
            Profitability <WidgetCurrency>(%)</WidgetCurrency>
          </WidgetTitle>
          <WidgetVal negative>
            -<Numeral>55</Numeral>
          </WidgetVal>
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
        <WidgetValue negative>
          <Numeral>{value}</Numeral> {caption}
        </WidgetValue>
      ) : (
        <WidgetValue positive>
          <Numeral>{value}</Numeral> {caption}
        </WidgetValue>
      )}
      &nbsp;{children}
    </WidgetGrowthWrapper>
  );
};
export default TotalWidget;
