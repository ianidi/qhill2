import React from "react";
import { useTranslation } from "react-i18next";
import { add } from "mathjs";
import { Modal } from "@yandex/ui/Modal/desktop/bundle";
import { Checkbox } from "@yandex/ui/Checkbox/desktop/bundle";
import { useWeb3React } from "@web3-react/core";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import {
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
  selectCreateAgreement,
  selectCreateLoading,
  selectCreateSuccess,
  selectCreateModalOpen,
  setCreateAgreement,
  setCreateModalOpen,
  create,
} from "../../Store/AppSlice";
import {
  Container,
  Head,
  TitleContainer,
  Dot,
  Title,
  CloseContainer,
  Divider,
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
} from "./CreateModal.styled";
import Success from "./Success";
import Loading from "../UI/Loading";
import client from "../../Store/API/Ethereum";

import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";
import { ReactComponent as CheckImage } from "../../Asset/Images/check.svg";

const CreateModal = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const { library, chainId, account } = useWeb3React();

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

  const fundName = useSelector(selectFundName);
  const fundSubscribtionFee = useSelector(selectFundSubscribtionFee);
  const fundManagementFee = useSelector(selectFundManagementFee);
  const fundPerformanceFee = useSelector(selectFundPerformanceFee);
  const fundPeriod = useSelector(selectFundPeriod);
  const fundIndent = useSelector(selectFundIndent);
  const fundHWM = useSelector(selectFundHWM);
  const fundCapExtended = useSelector(selectFundCapExtended);
  const fundCapToBtc = useSelector(selectFundCapToBtc);
  const fundCapToUsdt = useSelector(selectFundCapToUsdt);
  const fundTradingPairs = useSelector(selectFundTradingPairs);
  const createAgreement = useSelector(selectCreateAgreement);
  const createLoading = useSelector(selectCreateLoading);
  const createSuccess = useSelector(selectCreateSuccess);
  const createModalOpen = useSelector(selectCreateModalOpen);

  return (
    <Modal
      theme="normal"
      // onClose={() => dispatch(setCreateModalOpen(false))}
      visible={createModalOpen}
      zIndexGroupLevel={20}
    >
      <Container>
        {createSuccess ? (
          <Success type="create" />
        ) : (
          <React.Fragment>
            <Head>
              <TitleContainer>
                <Dot />
                <Title>You create a DeFund with the following parameters</Title>
              </TitleContainer>
              <CloseContainer
                onClick={() => dispatch(setCreateModalOpen(false))}
              >
                <CloseImage />
              </CloseContainer>
            </Head>

            <TableContainer>
              <TableHead>
                <TableCol />
                <TableCol>Trader</TableCol>
                <TableCol>Service</TableCol>
                <TableCol>Investor</TableCol>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCol>
                    <div>
                      Subscribtion fee<TextGray> (SF)</TextGray>
                    </div>
                  </TableCol>
                  <TableCol>{fundSubscribtionFee}%</TableCol>
                  {serviceFees?.sf ? (
                    <TableCol>{serviceFees?.sf}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                  {serviceFees?.sf ? (
                    <TableCol>
                      {add(fundSubscribtionFee, serviceFees?.sf)}%
                    </TableCol>
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
                  <TableCol>{fundManagementFee}%</TableCol>
                  {serviceFees?.mf ? (
                    <TableCol>{serviceFees?.mf}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                  {serviceFees?.sf ? (
                    <TableCol>
                      {add(fundManagementFee, serviceFees?.mf)}%
                    </TableCol>
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
                  <TableCol>{fundPerformanceFee}%</TableCol>
                  {serviceFees?.pf ? (
                    <TableCol>{serviceFees?.pf}%</TableCol>
                  ) : (
                    <TableCol>
                      <Loading color="#000" />
                    </TableCol>
                  )}
                  {serviceFees?.pf ? (
                    <TableCol>
                      {add(fundPerformanceFee, serviceFees?.pf)}%
                    </TableCol>
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

            <ControlContainer>
              <ControlWrapper
                onClick={() => dispatch(setCreateAgreement(!createAgreement))}
              >
                <Checkbox
                  label={false}
                  size="m"
                  view="default"
                  checked={createAgreement}
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
                disabled={createLoading}
                onClick={() => {
                  //TODO:
                  if (!createLoading) {
                    dispatch(setCreateModalOpen(false));
                  }
                }}
              >
                Cancel
              </ButtonCancel>
              <ButtonBlue
                disabled={!createAgreement || createLoading}
                onClick={() => dispatch(create({ library, account }))}
              >
                {createLoading ? (
                  <React.Fragment>
                    <Loading />
                    Loading
                  </React.Fragment>
                ) : (
                  "Create"
                )}
              </ButtonBlue>
            </ButtonsContainer>
          </React.Fragment>
        )}
      </Container>
    </Modal>
  );
};

export default CreateModal;
