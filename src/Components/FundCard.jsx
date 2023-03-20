import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import Blockies from "react-blockies";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { setInvestModalOpen, setWithdrawModalOpen } from "../Store/AppSlice";
import {
  Container,
  Top,
  Head,
  LogoContainer,
  LogoWrapper,
  HeadInfo,
  HeadTitleContainer,
  HeadTitle,
  Performance,
  HeadMemberContainer,
  MemberName,
  BlockiesContainer,
  Separator,
  MemberWallet,
  MemberWalletAddress,
  CopyContainer,
  NetworkContainer,
  NetworkItem,
  TableContainer,
  TableColumn,
  TableColumnLg,
  TableTextPurple,
  TableTextBlack,
  TableTextGreen,
  TableRow,
  TableClockRow,
  Clock,
  ClockItem,
  ChartContainer,
  ButtonsContainer,
  ButtonDetails,
  ButtonDetailsFullWidth,
  ButtonTrade,
  ButtonInvest,
  ButtonWithdraw,
  WidgetGrowthContainer,
  WidgetValue,
} from "./FundCard.styled";
import Numeral from "./UI/Numeral";
import AreaChart from "./Chart/AreaChart";

import { ReactComponent as BtcImage } from "../Asset/Images/Logo/btc.svg";
import { ReactComponent as CopyImage } from "../Asset/Images/copy.svg";
import NetworkLogoImage from "../Asset/Images/network_logo.png";
import { ReactComponent as PositiveImage } from "../Asset/Images/positive.svg";
import { ReactComponent as NegativeImage } from "../Asset/Images/negative.svg";

const info = {
  id: "29",
  name: "cfsde",
  manager: "0x321197727583a8c84b66046835c1997889B3A765",
  image: "",
  holders: 0,
  performance: 1,
  aum: 0,
  nextReport: "2022-08-18T20:39:57.353855539Z",
  createdAt: 1660752518,
};

const FundCard = ({
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
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const { library, chainId, account, active } = useWeb3React();

  const memberName = "Tonny Montana";
  const currency = "USDT";
  const FundsReceipt = 387;
  const Withdrawal = 3500;
  const MustBePaid = 3115;
  const ReportPeriod = 1;
  const NextReport = "datetime";
  const Income = 6;
  const CommissionEarned = 245658;
  const AnnualYield = 37.8;
  const Investors = 26;
  const HWM = Math.random() < 0.5;
  const MaxDD = 34;
  const Invested = Math.random() < 0.5 ? 356 : 0;
  const closed = Math.random() < 0.5;

  const networks = [{ title: "DeBank" }, { title: "Zerion" }];

  const own = account === manager;

  const navigateToFund = () => {
    navigate(`/market/${id}`);
  };

  const navigateToMember = () => {
    navigate(`/member/${manager}`);
  };

  return (
    <Container>
      <Top>
        <Head>
          <LogoContainer onClick={navigateToFund}>
            {/* <BtcImage /> */}
            {/* <img
              src={faker.image.avatar()}
              style={{ height: "100%", width: "64px" }}
              alt=""
            /> */}
            <LogoWrapper>
              <Blockies seed={manager} size={16} scale={4} />
            </LogoWrapper>
          </LogoContainer>
          <HeadInfo>
            <HeadTitleContainer>
              <HeadTitle onClick={navigateToFund}>{name}</HeadTitle>
              {/* <Performance
                color={
                  performance >= 4
                    ? "green"
                    : performance < 4 && performance > 2
                    ? "yellow"
                    : "red"
                }
              >
                <Numeral decimals={1}>{performance}</Numeral>
              </Performance> */}
            </HeadTitleContainer>
            <HeadMemberContainer>
              <BlockiesContainer onClick={navigateToMember}>
                <Blockies seed={manager} size={8} scale={3} />
              </BlockiesContainer>
              <MemberName onClick={navigateToMember}>{memberName}</MemberName>
              <Separator />
              <MemberWallet>
                <MemberWalletAddress>{manager}</MemberWalletAddress>
                <CopyContainer
                  onClick={() => {
                    navigator.clipboard.writeText(manager);
                    toast("Address copied to clipboard");
                  }}
                >
                  <CopyImage />
                </CopyContainer>
              </MemberWallet>
            </HeadMemberContainer>
          </HeadInfo>
        </Head>
        <NetworkContainer>
          {networks.map((item, index) => (
            <NetworkItem key={index}>
              <img
                src={NetworkLogoImage}
                alt=""
                style={{ width: 16, height: 16 }}
              />
              <div>{item.title}</div>
            </NetworkItem>
          ))}
        </NetworkContainer>

        {own && !closed && (
          <TableContainer>
            <TableColumn>
              <TableRow>
                {t(`FundCard.AUM`)}&nbsp;
                <TableTextPurple>
                  <Numeral>{aum}</Numeral> {currency}
                </TableTextPurple>
              </TableRow>
              <TableRow>
                {t(`FundCard.FundsReceipt`)}&nbsp;
                <TableTextBlack>
                  <Numeral>{FundsReceipt}</Numeral> {currency}
                </TableTextBlack>
              </TableRow>
              <TableRow>
                {t(`FundCard.Withdrawal`)}&nbsp;
                <TableTextBlack>
                  {Withdrawal} {currency}
                </TableTextBlack>
              </TableRow>
              <TableRow>
                {t(`FundCard.MustBePaid`)}&nbsp;
                <TableTextBlack>
                  {MustBePaid} {currency}
                </TableTextBlack>
              </TableRow>
            </TableColumn>
            <TableColumn>
              <TableRow>
                {t(`FundCard.ReportPeriod`)}&nbsp;
                <TableTextBlack>
                  {t(`Common.Week`, { count: ReportPeriod })}
                </TableTextBlack>
              </TableRow>
              <TableClockRow>
                <div>{t(`FundCard.NextReport`)}</div>
                <Clock>
                  <ClockItem>{t(`Common.Clock.Day`, { count: 4 })}</ClockItem>
                  <div>:</div>
                  <ClockItem>{t(`Common.Clock.Hour`, { count: 2 })}</ClockItem>
                  <div>:</div>
                  <ClockItem>
                    {t(`Common.Clock.Minute`, { count: 5 })}
                  </ClockItem>
                </Clock>
              </TableClockRow>
            </TableColumn>
          </TableContainer>
        )}

        {own && closed && (
          <TableContainer>
            <TableColumnLg>
              <TableRow>
                {t(`FundCard.Income`)}&nbsp;
                <WidgetGrowth value={Income} caption="%" />
              </TableRow>
              <TableRow>
                {t(`FundCard.CommissionEarned`)}&nbsp;
                <TableTextBlack>
                  <Numeral>{CommissionEarned}</Numeral> {currency}
                </TableTextBlack>
              </TableRow>
              <TableRow>
                {t(`FundCard.TotalInvestors`)}&nbsp;
                <TableTextBlack>
                  <Numeral>{holders}</Numeral>
                </TableTextBlack>
              </TableRow>
            </TableColumnLg>
          </TableContainer>
        )}

        {!own && (
          <TableContainer>
            <TableColumn>
              <TableRow>
                {t(`FundCard.AUM`)}&nbsp;
                <TableTextBlack>
                  <Numeral>{aum}</Numeral> {currency}
                </TableTextBlack>
              </TableRow>
              <TableRow>
                {t(`FundCard.AnnualYield`)}&nbsp;
                <WidgetGrowth value={AnnualYield} caption="%" />
              </TableRow>
              <TableRow>
                {t(`FundCard.Investors`)}&nbsp;
                <TableTextBlack>
                  <Numeral>{Investors}</Numeral>
                </TableTextBlack>
              </TableRow>
            </TableColumn>
            <TableColumn>
              <TableRow>
                {t(`FundCard.HWM.Title`)}&nbsp;
                <TableTextBlack>
                  {HWM ? t(`FundCard.HWM.Enabled`) : t(`FundCard.HWM.Disabled`)}
                </TableTextBlack>
              </TableRow>
              <TableRow>
                {t(`FundCard.MaxDD`)}&nbsp;
                <TableTextBlack>
                  <Numeral>{MaxDD}</Numeral> %
                </TableTextBlack>
              </TableRow>
              {Invested > 0 && (
                <TableRow>
                  {t(`FundCard.Invested`)}&nbsp;
                  <TableTextGreen>
                    <Numeral>{Invested}</Numeral> {currency}
                  </TableTextGreen>
                </TableRow>
              )}
            </TableColumn>
          </TableContainer>
        )}
      </Top>
      <ChartContainer>
        <AreaChart
          type={own ? "trade" : !own && Invested > 0 ? "withdraw" : "invest"}
          chartData={chartData}
        />
      </ChartContainer>
      {active ? (
        <React.Fragment>
          {own && !closed && (
            <ButtonsContainer>
              <ButtonDetails onClick={navigateToFund}>
                {t(`FundCard.Button.Details`)}
              </ButtonDetails>
              <ButtonTrade
              //onClick={() => dispatch(setTradeModalOpen(true))}
              >
                {t(`FundCard.Button.Trade`)}
              </ButtonTrade>
            </ButtonsContainer>
          )}
          {own && closed && (
            <ButtonsContainer>
              <ButtonDetailsFullWidth onClick={navigateToFund}>
                {t(`FundCard.Button.Details`)}
              </ButtonDetailsFullWidth>
            </ButtonsContainer>
          )}
          {!own && Invested === 0 && (
            <ButtonsContainer>
              <ButtonDetails onClick={navigateToFund}>
                {t(`FundCard.Button.Details`)}
              </ButtonDetails>
              <ButtonInvest onClick={navigateToFund}>
                {t(`FundCard.Button.Invest`)}
              </ButtonInvest>
            </ButtonsContainer>
          )}
          {!own && Invested > 0 && (
            <ButtonsContainer>
              <ButtonDetails onClick={navigateToFund}>
                {t(`FundCard.Button.Details`)}
              </ButtonDetails>
              <ButtonWithdraw onClick={navigateToFund}>
                {t(`FundCard.Button.Withdraw`)}
              </ButtonWithdraw>
            </ButtonsContainer>
          )}
        </React.Fragment>
      ) : (
        <ButtonsContainer>
          <ButtonDetailsFullWidth onClick={navigateToFund}>
            {t(`FundCard.Button.Details`)}
          </ButtonDetailsFullWidth>
        </ButtonsContainer>
      )}
    </Container>
  );
};

const WidgetGrowth = ({ children, value, caption, negative = false }) => {
  return (
    <WidgetGrowthContainer>
      {!negative ? <PositiveImage /> : <NegativeImage />}
      <WidgetValue>
        <Numeral decimals={2}>{value}</Numeral> {caption}
      </WidgetValue>
      &nbsp;{children}
    </WidgetGrowthContainer>
  );
};

export default FundCard;
