import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { add, compare, smallerEq, larger } from "mathjs";
import { Modal } from "@yandex/ui/Modal/desktop/bundle";
import { Checkbox } from "@yandex/ui/Checkbox/desktop/bundle";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";

import {
  selectInvestAmount,
  selectFundName,
  selectFundSubscribtionFee,
  selectFundManagementFee,
  selectFundPerformanceFee,
  selectFundPeriod,
  selectFundIndent,
  selectFundHWM,
  selectFundCapExtended,
  selectFundCapToBtc,
  selectFundCapToUsdt,
  selectFundTradingPairs,
  selectInvestAgreement,
  selectInvestLoading,
  selectInvestSuccess,
  selectInvestModalOpen,
  setInvestAmount,
  setInvestAgreement,
  setInvestModalOpen,
  selectApproveLoading,
  approve,
  invest,
} from "../../Store/AppSlice";
import client from "../../Store/API/Ethereum";
import Numeral from "../UI/Numeral";
import {
  Container,
  Head,
  TitleContainer,
  Dot,
  Title,
  CloseContainer,
  Divider,
  Total,
  TableContainer,
  TableHead,
  TableCol,
  TableBody,
  TableRow,
  CheckContainer,
  CheckItem,
  CheckImageContainer,
  TextGray,
  TextBlue,
  ControlContainer,
  ControlWrapper,
  ControlTitle,
  ButtonsContainer,
  ButtonCancel,
  ButtonBlue,
  ButtonUnlock,
  UnlockImageContainer,
  AvailableContainer,
  AvailableLogoContainer,
  InputLabelContainer,
  CommissionInputContainer,
  CommissionInputWrapper,
  InputCommissionContainer,
  InputCommission,
  InputBefore,
  InputWrapper,
} from "./InvestModal.styled";
import Success from "./Success";
import Loading from "../UI/Loading";

import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";
import { ReactComponent as CheckImage } from "../../Asset/Images/check.svg";
import { ReactComponent as UsdtImage } from "../../Asset/Images/Logo/usdt.svg";
import { ReactComponent as UnlockImage } from "../../Asset/Images/unlock.svg";

const InvestModal = () => {
  const { t, i18n } = useTranslation();

  const { id } = useParams();

  const dispatch = useDispatch();
  const { library, account } = useWeb3React();

  const investAmount = useSelector(selectInvestAmount);
  const fundName = useSelector(selectFundName);
  const fundPeriod = useSelector(selectFundPeriod);
  const fundIndent = useSelector(selectFundIndent);
  const fundHWM = useSelector(selectFundHWM);
  const fundCapExtended = useSelector(selectFundCapExtended);
  const fundCapToBtc = useSelector(selectFundCapToBtc);
  const fundCapToUsdt = useSelector(selectFundCapToUsdt);
  const fundTradingPairs = useSelector(selectFundTradingPairs);
  const investAgreement = useSelector(selectInvestAgreement);
  const investLoading = useSelector(selectInvestLoading);
  const investSuccess = useSelector(selectInvestSuccess);
  const investModalOpen = useSelector(selectInvestModalOpen);
  const approveLoading = useSelector(selectApproveLoading);

  const { data: serviceFees } = useQuery(
    ["serviceFees"],
    () =>
      client.serviceFees({
        library,
      }),
    {
      refetchInterval: 10000,
    }
  );

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

  const { data: balance, isLoading: balanceLoading } = useQuery(
    ["balance"],
    () =>
      client.balanceOf({
        library,
        account,
        token: process.env.REACT_APP_TOKEN_ADDRESS,
      }),
    { refetchInterval: 5000 }
  );

  const { data: allowance } = useQuery(
    ["allowance"],
    () =>
      client.allowance({
        library,
        account,
        token: process.env.REACT_APP_TOKEN_ADDRESS,
      }),
    { refetchInterval: 5000 }
  );

  return (
    <Modal
      theme="normal"
      // onClose={() => dispatch(setInvestModalOpen(false))}
      visible={investModalOpen}
      zIndexGroupLevel={20}
    >
      <Container>
        {investSuccess ? (
          <Success type="invest" />
        ) : (
          <React.Fragment>
            <Head>
              <TitleContainer>
                <Dot />
                <Title>
                  You invest in the DeFund with the following parameters
                </Title>
              </TitleContainer>
              <CloseContainer
                onClick={() => dispatch(setInvestModalOpen(false))}
              >
                <CloseImage />
              </CloseContainer>
            </Head>
            <TableContainer>
              <TableHead>
                <TableCol />
                <TableCol>Trader</TableCol>
                <TableCol>Service</TableCol>
                <TableCol>Total</TableCol>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCol>
                    <div>
                      Subscribtion fee<TextGray> (SF)</TextGray>
                    </div>
                  </TableCol>
                  {fundFees?.sf ? (
                    <TableCol>{fundFees?.sf}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                  {serviceFees?.sf ? (
                    <TableCol>{serviceFees?.sf}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                  {fundFees?.sf && serviceFees?.sf ? (
                    <TableCol>{add(fundFees?.sf, serviceFees?.sf)}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                </TableRow>
                <TableRow>
                  <TableCol>
                    <div>
                      Management fee<TextGray> (MF)</TextGray>
                    </div>
                  </TableCol>
                  {fundFees?.mf ? (
                    <TableCol>{fundFees?.mf}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                  {serviceFees?.mf ? (
                    <TableCol>{serviceFees?.mf}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                  {fundFees?.mf && serviceFees?.mf ? (
                    <TableCol>{add(fundFees?.mf, serviceFees?.mf)}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                </TableRow>
                <TableRow>
                  <TableCol>
                    <div>
                      Performance fee<TextGray> (PF)</TextGray>
                    </div>
                  </TableCol>
                  {fundFees?.pf ? (
                    <TableCol>{fundFees?.pf}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                  {serviceFees?.pf ? (
                    <TableCol>{serviceFees?.pf}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                  {fundFees?.pf && serviceFees?.pf ? (
                    <TableCol>{add(fundFees?.pf, serviceFees?.pf)}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                </TableRow>
                <TableRow />
              </TableBody>
            </TableContainer>
            <CheckContainer>
              {fundHWM && (
                <CheckItem>
                  <CheckImageContainer>
                    <CheckImage />
                  </CheckImageContainer>
                  <div>
                    Take <TextBlue capital>HWM</TextBlue> into account when
                    calculating commissions
                  </div>
                </CheckItem>
              )}
              <CheckItem>
                <CheckImageContainer>
                  <CheckImage />
                </CheckImageContainer>
                <div>
                  Summing up and calculating commissions occurs{" "}
                  <TextBlue>{fundPeriod?.label}</TextBlue> with{" "}
                  <TextBlue>{fundIndent?.label} indent</TextBlue>
                </div>
              </CheckItem>
              {fundCapExtended && (
                <CheckItem>
                  <CheckImageContainer>
                    <CheckImage />
                  </CheckImageContainer>
                  <div>TOP50 cap extended</div>
                </CheckItem>
              )}
              {fundCapToBtc && (
                <CheckItem>
                  <CheckImageContainer>
                    <CheckImage />
                  </CheckImageContainer>
                  <div>TOP50 cap to BTC</div>
                </CheckItem>
              )}
              {fundCapToUsdt && (
                <CheckItem>
                  <CheckImageContainer>
                    <CheckImage />
                  </CheckImageContainer>
                  <div>TOP50 cap to USDT/USDC/DAI</div>
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
                    </React.Fragment>
                  )}
                </div>
              </CheckItem>
            </CheckContainer>
            <CommissionInputContainer>
              <CommissionInputWrapper>
                <InputLabelContainer>
                  <div>Enter the amount you want to invest&nbsp;</div>
                  {balance && (
                    <div onClick={() => dispatch(setInvestAmount(balance))}>
                      (MAX)
                    </div>
                  )}
                </InputLabelContainer>
                <InputCommissionContainer>
                  <InputBefore>USDT</InputBefore>
                  <InputWrapper>
                    <InputCommission
                      value={investAmount}
                      type="number"
                      spellCheck={false}
                      autoComplete="off"
                      onChange={(e) =>
                        dispatch(setInvestAmount(e.target.value))
                      }
                      maxLength={6}
                    />
                  </InputWrapper>
                </InputCommissionContainer>
              </CommissionInputWrapper>
              <CommissionInputWrapper>
                <InputLabelContainer>
                  <div>Available</div>
                </InputLabelContainer>
                <AvailableContainer>
                  {balanceLoading ? (
                    <Loading color="#000" />
                  ) : (
                    <React.Fragment>
                      {balance && (
                        <AvailableLogoContainer>
                          <UsdtImage />
                        </AvailableLogoContainer>
                      )}
                      <React.Fragment>
                        {balance && (
                          <React.Fragment>
                            <Numeral decimals={2}>{balance}</Numeral>
                            &nbsp;<TextGray>USDT</TextGray>
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    </React.Fragment>
                  )}
                </AvailableContainer>
              </CommissionInputWrapper>
            </CommissionInputContainer>

            {!investLoading &&
              allowance &&
              compare(investAmount, allowance) === 1 && (
                <ButtonUnlock
                  disabled={approveLoading}
                  onClick={() =>
                    dispatch(
                      approve({
                        library,
                        token: process.env.REACT_APP_TOKEN_ADDRESS,
                        amount: investAmount,
                      })
                    )
                  }
                >
                  {approveLoading ? (
                    <React.Fragment>
                      <Loading />
                      Loading
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <UnlockImageContainer>
                        <UnlockImage />
                      </UnlockImageContainer>
                      <div>Approve</div>
                    </React.Fragment>
                  )}
                </ButtonUnlock>
              )}
            <ControlContainer>
              <ControlWrapper
                onClick={() => dispatch(setInvestAgreement(!investAgreement))}
              >
                <Checkbox
                  label={false}
                  size="m"
                  view="default"
                  checked={investAgreement}
                />
                <ControlTitle>
                  I confirm transaction with my current wallet and agree to pay
                  for it’s creation. The exact amount will be determined by my
                  wallet.
                </ControlTitle>
              </ControlWrapper>
            </ControlContainer>
            <Divider />
            <ButtonsContainer>
              <ButtonCancel
                disabled={investLoading}
                onClick={() => {
                  if (!investLoading) {
                    dispatch(setInvestModalOpen(false));
                  }
                }}
              >
                Cancel
              </ButtonCancel>
              <ButtonBlue
                disabled={
                  !investAgreement ||
                  investLoading ||
                  (allowance && compare(investAmount, allowance) === 1) ||
                  smallerEq(investAmount, 0) ||
                  larger(investAmount, balance)
                }
                onClick={() =>
                  dispatch(
                    invest({
                      library,
                      fundId: id,
                      amount: investAmount,
                    })
                  )
                }
              >
                {investLoading ? (
                  <React.Fragment>
                    <Loading />
                    Loading
                  </React.Fragment>
                ) : (
                  "Invest"
                )}
              </ButtonBlue>
            </ButtonsContainer>
          </React.Fragment>
        )}
      </Container>
    </Modal>
  );
};

export default InvestModal;
