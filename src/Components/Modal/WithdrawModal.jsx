import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { compare, smallerEq, larger } from "mathjs";
import { Modal } from "@yandex/ui/Modal/desktop/bundle";
import { Checkbox } from "@yandex/ui/Checkbox/desktop/bundle";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { defer } from "rxjs";

import {
  selectWithdrawAmount,
  selectWithdrawAgreement,
  selectWithdrawLoading,
  selectWithdrawSuccess,
  selectWithdrawModalOpen,
  setWithdrawAmount,
  setWithdrawAgreement,
  setWithdrawModalOpen,
  selectApproveLoading,
  approve,
  withdraw,
  //   withdrawFund,
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
  ClockContainer,
  Clock,
  ClockTitle,
  ClockItem,
} from "./WithdrawModal.styled";
import Success from "./Success";
import Loading from "../UI/Loading";

import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";
import { ReactComponent as UnlockImage } from "../../Asset/Images/unlock.svg";

const WithdrawModal = () => {
  const { t, i18n } = useTranslation();

  const { id } = useParams();

  const dispatch = useDispatch();
  const { library, chainId, account } = useWeb3React();

  const withdrawAmount = useSelector(selectWithdrawAmount);
  const withdrawAgreement = useSelector(selectWithdrawAgreement);
  const withdrawLoading = useSelector(selectWithdrawLoading);
  const withdrawSuccess = useSelector(selectWithdrawSuccess);
  const withdrawModalOpen = useSelector(selectWithdrawModalOpen);
  const approveLoading = useSelector(selectApproveLoading);

  const { data: tokenBalance, isLoading: tokenBalanceLoading } = useQuery(
    ["tokenBalance"],
    () =>
      client.tokenBalance({
        library,
        account,
        fundId: id,
      }),
    { refetchInterval: 5000 }
  );

  return (
    <Modal
      theme="normal"
      // onClose={() => dispatch(setWithdrawModalOpen(false))}
      visible={withdrawModalOpen}
      zIndexGroupLevel={20}
    >
      <Container>
        {withdrawSuccess ? (
          <Success type="withdraw" />
        ) : (
          <React.Fragment>
            <Head>
              <TitleContainer>
                <Dot />
                <Title>Withdraw</Title>
              </TitleContainer>
              <CloseContainer
                onClick={() => dispatch(setWithdrawModalOpen(false))}
              >
                <CloseImage />
              </CloseContainer>
            </Head>

            <CheckContainer>
              <CheckItem>
                {/* <CheckImageContainer>
                  <CheckImage />
                </CheckImageContainer> */}
                <div>
                  Redemption of tokens will occur at the end of the reporting
                  period
                </div>
              </CheckItem>
            </CheckContainer>

            <ClockContainer>
              <ClockTitle>{t(`FundCard.NextReport`)}</ClockTitle>
              <Clock>
                <ClockItem>{t(`Common.Clock.Day`, { count: 4 })}</ClockItem>
                <div>:</div>
                <ClockItem>{t(`Common.Clock.Hour`, { count: 2 })}</ClockItem>
                <div>:</div>
                <ClockItem>{t(`Common.Clock.Minute`, { count: 5 })}</ClockItem>
              </Clock>
            </ClockContainer>

            <CommissionInputContainer>
              <CommissionInputWrapper>
                <InputLabelContainer>
                  <div>Enter the amount you want to withdraw&nbsp;</div>
                  {tokenBalance?.balance && (
                    <div
                      onClick={() =>
                        dispatch(setWithdrawAmount(tokenBalance?.balance))
                      }
                    >
                      (MAX)
                    </div>
                  )}
                </InputLabelContainer>
                <InputCommissionContainer>
                  <InputBefore>USDT</InputBefore>
                  <InputWrapper>
                    <InputCommission
                      //defaultValue={withdrawAmount}
                      value={withdrawAmount}
                      type="number"
                      spellCheck={false}
                      autoComplete="off"
                      onChange={(e) =>
                        dispatch(setWithdrawAmount(e.target.value))
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
                  {/* <AvailableLogoContainer>
                <UsdtImage />
              </AvailableLogoContainer> */}
                  {tokenBalanceLoading ? (
                    <Loading color="#000" />
                  ) : (
                    <React.Fragment>
                      {tokenBalance?.balance && (
                        <React.Fragment>
                          <Numeral decimals={2}>
                            {tokenBalance?.balance}
                          </Numeral>
                          &nbsp;<TextGray>tokens</TextGray>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                </AvailableContainer>
              </CommissionInputWrapper>
            </CommissionInputContainer>

            {!withdrawLoading &&
              tokenBalance?.allowance &&
              compare(withdrawAmount, tokenBalance?.allowance) === 1 && (
                <ButtonUnlock
                  disabled={approveLoading}
                  onClick={() =>
                    dispatch(
                      approve({
                        library,
                        token: tokenBalance?.token,
                        amount: withdrawAmount,
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
                onClick={() =>
                  dispatch(setWithdrawAgreement(!withdrawAgreement))
                }
              >
                <Checkbox
                  label={false}
                  size="m"
                  view="default"
                  checked={withdrawAgreement}
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
                disabled={withdrawLoading}
                onClick={() => {
                  if (!withdrawLoading) {
                    dispatch(setWithdrawModalOpen(false));
                  }
                }}
              >
                Cancel
              </ButtonCancel>
              <ButtonBlue
                disabled={
                  !withdrawAgreement ||
                  withdrawLoading ||
                  (tokenBalance?.allowance &&
                    compare(withdrawAmount, tokenBalance?.allowance) === 1) ||
                  smallerEq(withdrawAmount, 0) ||
                  larger(withdrawAmount, tokenBalance?.balance)
                }
                onClick={() =>
                  dispatch(
                    withdraw({ library, fundId: id, amount: withdrawAmount })
                  )
                }
              >
                {withdrawLoading ? (
                  <React.Fragment>
                    <Loading />
                    Loading
                  </React.Fragment>
                ) : (
                  "Withdraw"
                )}
              </ButtonBlue>
            </ButtonsContainer>
          </React.Fragment>
        )}
      </Container>
    </Modal>
  );
};

export default WithdrawModal;
