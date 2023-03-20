import React from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  ChartWidgetContainer,
  ChartContainer,
  ROIContainer,
  Head,
  TitleContainer,
  Dot,
  Title,
  Divider,
  TitleRow,
  CaptionRow,
} from "./YieldWidget.styled";
import YieldChart from "../Chart/YieldChart";
import Numeral from "../UI/Numeral";

const YieldWidget = ({ chartData }) => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <ChartWidgetContainer>
        <Head>
          <TitleContainer>
            <Dot />
            <Title>Chart of yield</Title>
          </TitleContainer>
        </Head>

        <ChartContainer>
          <YieldChart type="invest" chartData={chartData} />
        </ChartContainer>
      </ChartWidgetContainer>
      <ROIContainer>
        <Head>
          <TitleContainer>
            <Dot />
            <Title>Return summary</Title>
          </TitleContainer>
        </Head>
        <TitleRow>
          <div>Max drawdown</div>
          <div>
            <Numeral>72</Numeral>%
          </div>
        </TitleRow>
        <CaptionRow>
          <div>Current</div>
          <div>
            <Numeral>9</Numeral>%
          </div>
        </CaptionRow>
        <Divider />
        <TitleRow>
          <div>All time income</div>
          <div>
            <Numeral>136</Numeral>%
          </div>
        </TitleRow>
        <CaptionRow>
          <div>Max</div>
          <div>
            <Numeral>147</Numeral>%
          </div>
        </CaptionRow>
        <Divider />
        <TitleRow>
          <div>Max drawdown</div>
          <div>84 days</div>
        </TitleRow>
        <CaptionRow>
          <div>Current</div>
          <div>21 days</div>
        </CaptionRow>
        <Divider />
        {/* <TitleRow>
          <div>Sharpe ratio</div>
          <div>2</div>
        </TitleRow> */}
      </ROIContainer>
    </Container>
  );
};

export default YieldWidget;
