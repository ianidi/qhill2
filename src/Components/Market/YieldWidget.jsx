import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useWeb3React } from "@web3-react/core";
import { TooltipStateful } from "@yandex/ui/Tooltip/desktop/bundle";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ChartWidgetContainer,
  ChartContainer,
  ROIContainer,
  ChartHead,
  Head,
  TitleContainer,
  Dot,
  Title,
  SwitchContainer,
  SwitchItem,
  Divider,
  TitleRow,
  GrayText,
  GreenText,
  InfoImageContainer,
  ClockContainer,
  Clock,
  ClockNoMarginTop,
  ClockTitle,
  ClockItem,
  ButtonTrade,
  ButtonInvest,
  ButtonWithdraw,
  CheckContainer,
  CheckItem,
  CheckImageContainer,
  TextGray,
  FigureContainer,
} from "./YieldWidget.styled";
import {
  setInvestModalOpen,
  setWithdrawModalOpen,
  setWalletModalOpen,
  setSwapModalOpen,
} from "../../Store/AppSlice";
import client from "../../Store/API/Ethereum";
import YieldChart from "../Chart/YieldChart";
import Loading from "../UI/Loading";
import { ReactComponent as InfoImage } from "../../Asset/Images/info.svg";
import { ReactComponent as CheckImage } from "../../Asset/Images/check.svg";

const YieldWidget = ({
  id,
  name,
  manager,
  image,
  holders,
  performance,
  aum,
  nextReport,
  createdAt,
  chartData,
}) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { library, account, active } = useWeb3React();

  const { data: fundFees } = useQuery(
    ["fundFees"],
    () =>
      client.fundFees({
        library,
        fundId: id,
      }),
    {
      refetchInterval: 10000,
    }
  );

  const [tab, setTab] = useState("commission");

  const fundCapExtended = true;
  const fundCapToBtc = true;
  const fundCapToUsdt = true;

  const currency = "USDT";

  const fundTradingPairs = [{ label: "BTC/USDT" }];

  const type = "1";

  const closed = false;

  const Invested = Number(Math.random() < 0.5);

  const own = account === manager;

  const invest = () => {
    if (!active) {
      dispatch(setWalletModalOpen(true));
      return;
    }
    dispatch(setInvestModalOpen(true));
  };

  const withdraw = () => {
    dispatch(setWithdrawModalOpen(true));
  };

  const trade = () => {
    navigate("/swap");
    // dispatch(setSwapModalOpen(true));
  };

  return (
    <Container>
      <ChartWidgetContainer>
        <ChartHead>
          <TitleContainer>
            <Dot />
            <Title>Chart of yield</Title>
          </TitleContainer>
        </ChartHead>

        <ChartContainer>
          <YieldChart type="invest" height={400} chartData={chartData} />
        </ChartContainer>
      </ChartWidgetContainer>

      {type === "1" && (
        <ROIContainer>
          <Head>
            <TitleContainer>
              <Dot />
              <Title>
                Investment conditions
                <InfoImageContainer>
                  <TooltipStateful
                    view="default"
                    size="m"
                    hasTail
                    direction={["bottom", "right"]}
                    content="Stateful hover"
                  >
                    <div className="info__tooltip">
                      <InfoImage />
                    </div>
                  </TooltipStateful>
                </InfoImageContainer>
              </Title>
            </TitleContainer>
          </Head>

          <SwitchContainer>
            <SwitchItem
              active={tab === "commission"}
              onClick={() => setTab("commission")}
            >
              Commissions
            </SwitchItem>
            <SwitchItem
              active={tab === "whitelist"}
              onClick={() => setTab("whitelist")}
            >
              White list
            </SwitchItem>
          </SwitchContainer>

          {tab === "commission" && (
            <React.Fragment>
              <TitleRow>
                <div>
                  Subscription fee&nbsp;<GrayText>(SF)</GrayText>
                </div>
                {fundFees?.sf ? (
                  <div>{fundFees?.sf}%</div>
                ) : (
                  <div>
                    <Loading color="#000" />
                  </div>
                )}
              </TitleRow>
              <Divider />
              <TitleRow>
                <div>
                  Management fee&nbsp;<GrayText>(MF)</GrayText>
                </div>

                {fundFees?.mf ? (
                  <div>{fundFees?.mf}%</div>
                ) : (
                  <div>
                    <Loading color="#000" />
                  </div>
                )}
              </TitleRow>
              <Divider />
              <TitleRow>
                <div>
                  Performance fee&nbsp;<GrayText>(PF)</GrayText>
                </div>
                {fundFees?.pf ? (
                  <div>{fundFees?.pf}%</div>
                ) : (
                  <div>
                    <Loading color="#000" />
                  </div>
                )}
              </TitleRow>
              <Divider />
              <TitleRow>
                <div>Period</div>
                <div>Monthly</div>
              </TitleRow>
              <Divider />
              <TitleRow>
                <div>HWM</div>
                <div>no</div>
              </TitleRow>
              <Divider />

              <ClockContainer>
                <ClockTitle>{t(`FundCard.NextReport`)}</ClockTitle>
                <Clock>
                  <ClockItem>{t(`Common.Clock.Day`, { count: 4 })}</ClockItem>
                  <div>:</div>
                  <ClockItem>{t(`Common.Clock.Hour`, { count: 2 })}</ClockItem>
                  <div>:</div>
                  <ClockItem>
                    {t(`Common.Clock.Minute`, { count: 5 })}
                  </ClockItem>
                </Clock>
              </ClockContainer>
            </React.Fragment>
          )}
          {tab === "whitelist" && (
            <CheckContainer>
              {fundCapExtended && (
                <CheckItem>
                  <CheckImageContainer>
                    <CheckImage />
                  </CheckImageContainer>
                  <div>TOP50 cap extended</div>
                  <InfoImageContainer>
                    <TooltipStateful
                      view="default"
                      size="m"
                      hasTail
                      direction={["bottom", "right"]}
                      content="Stateful hover"
                    >
                      <div className="info__tooltip">
                        <InfoImage />
                      </div>
                    </TooltipStateful>
                  </InfoImageContainer>
                </CheckItem>
              )}
              {fundCapToBtc && (
                <CheckItem>
                  <CheckImageContainer>
                    <CheckImage />
                  </CheckImageContainer>
                  <div>TOP50 cap to BTC</div>
                  <InfoImageContainer>
                    <TooltipStateful
                      view="default"
                      size="m"
                      hasTail
                      direction={["bottom", "right"]}
                      content="Stateful hover"
                    >
                      <div className="info__tooltip">
                        <InfoImage />
                      </div>
                    </TooltipStateful>
                  </InfoImageContainer>
                </CheckItem>
              )}
              {fundCapToUsdt && (
                <CheckItem>
                  <CheckImageContainer>
                    <CheckImage />
                  </CheckImageContainer>
                  <div>TOP50 cap to USDT/USDC/DAI</div>
                  <InfoImageContainer>
                    <TooltipStateful
                      view="default"
                      size="m"
                      hasTail
                      direction={["bottom", "right"]}
                      content="Stateful hover"
                    >
                      <div className="info__tooltip">
                        <InfoImage />
                      </div>
                    </TooltipStateful>
                  </InfoImageContainer>
                </CheckItem>
              )}
              <CheckItem>
                <CheckImageContainer>
                  <CheckImage />
                </CheckImageContainer>
                <div>
                  <TextGray>Trading pairs:&nbsp;</TextGray>
                  {fundTradingPairs.length > 0 && (
                    <React.Fragment>
                      {fundTradingPairs.map((item, index) => (
                        <React.Fragment key={index}>
                          {item.label}
                          {index !== fundTradingPairs.length - 1 && (
                            <React.Fragment>{", "}</React.Fragment>
                          )}
                        </React.Fragment>
                      ))}
                      {/* TODO: add info tooltip */}
                    </React.Fragment>
                  )}
                </div>
              </CheckItem>
            </CheckContainer>
          )}

          {!closed && (
            <React.Fragment>
              <ButtonInvest onClick={invest}>
                {t(`FundCard.Button.Invest`)}
              </ButtonInvest>
              <ButtonWithdraw onClick={withdraw}>
                {t(`FundCard.Button.Withdraw`)}
              </ButtonWithdraw>
              <ButtonTrade onClick={trade}>
                {t(`FundCard.Button.Trade`)}
              </ButtonTrade>
            </React.Fragment>
          )}
        </ROIContainer>
      )}

      {type === "2" && (
        <ROIContainer>
          <Head>
            <TitleContainer>
              <Dot />
              <Title>Investment indicators</Title>
            </TitleContainer>
          </Head>

          <TitleRow>
            <div>Invested</div>
            <FigureContainer>
              <span>4554&nbsp;</span>
              <GrayText>{currency}</GrayText>
              <InfoImageContainer>
                <TooltipStateful
                  view="default"
                  size="m"
                  hasTail
                  direction={["bottom", "right"]}
                  content="Stateful hover"
                >
                  <div className="info__tooltip">
                    <InfoImage />
                  </div>
                </TooltipStateful>
              </InfoImageContainer>
            </FigureContainer>
          </TitleRow>
          <Divider />
          <TitleRow>
            <div>PnL</div>
            <FigureContainer>
              <span>1554&nbsp;</span>
              <GrayText>{currency}</GrayText>
              <InfoImageContainer>
                <TooltipStateful
                  view="default"
                  size="m"
                  hasTail
                  direction={["bottom", "right"]}
                  content="Stateful hover"
                >
                  <div className="info__tooltip">
                    <InfoImage />
                  </div>
                </TooltipStateful>
              </InfoImageContainer>
            </FigureContainer>
          </TitleRow>
          <Divider />
          <TitleRow>
            <div>Commission paid</div>
            <FigureContainer>
              <span>454&nbsp;</span>
              <GrayText>{currency}</GrayText>
              <InfoImageContainer>
                <TooltipStateful
                  view="default"
                  size="m"
                  hasTail
                  direction={["bottom", "right"]}
                  content="Stateful hover"
                >
                  <div className="info__tooltip">
                    <InfoImage />
                  </div>
                </TooltipStateful>
              </InfoImageContainer>
            </FigureContainer>
          </TitleRow>
          <Divider />
          <TitleRow>
            <div>
              Income&nbsp;
              <GrayText>(%)</GrayText>
            </div>
            <FigureContainer>
              <span>31%</span>
            </FigureContainer>
          </TitleRow>
          <Divider />
          <TitleRow>
            <div>Investment date</div>
            <FigureContainer>
              <span>12.02.2022</span>
            </FigureContainer>
          </TitleRow>
          <Divider />
          <TitleRow>
            <div>My assets in DeFund</div>
            <FigureContainer>
              <GreenText>6108 USDT</GreenText>
            </FigureContainer>
          </TitleRow>

          {!closed && (
            <ButtonInvest onClick={invest}>
              {t(`FundCard.Button.Invest`)}
            </ButtonInvest>
          )}
          {Invested > 0 && (
            <ButtonWithdraw onClick={withdraw}>
              {t(`FundCard.Button.Withdraw`)}
            </ButtonWithdraw>
          )}
        </ROIContainer>
      )}

      {type === "3" && (
        <ROIContainer>
          <Head>
            <TitleContainer>
              <Dot />
              <Title>Investment indicators</Title>
            </TitleContainer>
          </Head>

          <TitleRow>
            <div>Сommission received</div>
            <FigureContainer>
              <span>4540&nbsp;</span>
              <GrayText>{currency}</GrayText>
            </FigureContainer>
          </TitleRow>
          <Divider />
          <TitleRow>
            <div>End of the period</div>
            <FigureContainer>
              <ClockNoMarginTop>
                <ClockItem>{t(`Common.Clock.Day`, { count: 4 })}</ClockItem>
                <div>:</div>
                <ClockItem>{t(`Common.Clock.Hour`, { count: 2 })}</ClockItem>
                <div>:</div>
                <ClockItem>{t(`Common.Clock.Minute`, { count: 5 })}</ClockItem>
              </ClockNoMarginTop>
            </FigureContainer>
          </TitleRow>
          <Divider />
          <TitleRow>
            <div>Must be repaid</div>
            <FigureContainer>
              <span>4540&nbsp;</span>
              <GrayText>{currency}</GrayText>
            </FigureContainer>
          </TitleRow>
          <Divider />
          <TitleRow>
            <div>My assets in DeFund</div>
            <FigureContainer>
              <GreenText>2109 USDT</GreenText>
            </FigureContainer>
          </TitleRow>

          {!closed && (
            <ButtonInvest onClick={invest}>
              {t(`FundCard.Button.Invest`)}
            </ButtonInvest>
          )}
          {Invested > 0 && (
            <ButtonWithdraw onClick={withdraw}>
              {t(`FundCard.Button.Withdraw`)}
            </ButtonWithdraw>
          )}
          {!closed && (
            <ButtonTrade onClick={trade}>
              {t(`FundCard.Button.Trade`)}
            </ButtonTrade>
          )}
        </ROIContainer>
      )}
    </Container>
  );
};

export default YieldWidget;
