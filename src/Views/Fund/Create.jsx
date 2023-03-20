import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import FroalaEditorComponent from "react-froala-wysiwyg";
import { Checkbox } from "@yandex/ui/Checkbox/desktop/bundle";
import { Tumbler } from "@yandex/ui/Tumbler/desktop/bundle";
import { TooltipStateful } from "@yandex/ui/Tooltip/desktop/bundle";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { string, number } from "yup";
import { useQuery } from "@tanstack/react-query";
import { useWeb3React } from "@web3-react/core";

import {
  Title,
  Container,
  SectionTitle,
  Dot,
  AvatarUploadContainer,
  AvatarImageContainer,
  ButtonBlue,
  Label,
  Divider,
  Description,
  InputContainer,
  Input,
  ControlContainer,
  ControlWrapper,
  ControlTitle,
  InfoImageContainer,
  TooltipLabelContainer,
  InputLabelContainer,
  CommissionInputContainer,
  CommissionInputWrapper,
  InputCommissionContainer,
  InputCommission,
  InputBefore,
  InputWrapper,
  TumblerControlContainer,
  TumblerInfoImageContainer,
} from "./Create.styled";
import { options, restrictions } from "../../Common/Constant";
import "froala-editor/js/plugins.pkgd.min.js";
// import "froala-editor/js/languages/fr.js";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import {
  selectFundName,
  selectFundDescription,
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
  setFundName,
  setFundDescription,
  setFundSubscribtionFee,
  setFundManagementFee,
  setFundPerformanceFee,
  setFundPeriod,
  setFundIndent,
  setFundHWM,
  setFundCapExtended,
  setFundCapToBtc,
  setFundCapToUsdt,
  setFundTradingPairs,
  setCreateModalOpen,
} from "../../Store/AppSlice";
import Select from "../../Components/UI/Select";
import { getTradePairs } from "../../Store/API/API";
import client from "../../Store/API/Ethereum";

import AvatarPlaceholderImage from "../../Asset/Images/AvatarPlaceholder.png";
import { ReactComponent as PlusImage } from "../../Asset/Images/plus.svg";
import { ReactComponent as InfoImage } from "../../Asset/Images/info.svg";
import Loading from "../../Components/UI/Loading";

const FundCreate = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const { library } = useWeb3React();

  const { data: tradePairs } = useQuery(["getTradePairs"], () =>
    getTradePairs()
  );
  const { data: newFundId } = useQuery(
    ["newFundId"],
    () =>
      client.newFundId({
        library,
      }),
    {
      refetchInterval: 10000,
    }
  );
  //TODO: use newFundId

  const fundName = useSelector(selectFundName);
  const fundDescription = useSelector(selectFundDescription);
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

  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  const confirm = async () => {
    try {
      await string()
        .required("Please enter fund name")
        .min(3, "Fund name must be at least 3 characters long")
        .validate(fundName, { strict: true });
      await string()
        .required("Please enter fund description")
        .min(3, "Fund description must be at least 3 characters long")
        .validate(fundDescription, { strict: true });
      await number()
        .required("Please enter fund subscribtion fee")
        .typeError("Please enter fund subscribtion fee")
        .min(
          restrictions.fundSubscribtionFee.min,
          `Fund subscribtion fee must be at least ${restrictions.fundSubscribtionFee.min} %`
        )
        .max(
          restrictions.fundSubscribtionFee.max,
          `Fund subscribtion fee cannot be greater than ${restrictions.fundSubscribtionFee.max} %`
        )
        .validate(fundSubscribtionFee);
      await number()
        .required("Please enter fund management fee")
        .typeError("Please enter fund management fee")
        .min(
          restrictions.fundManagementFee.min,
          `Fund management fee must be at least ${restrictions.fundManagementFee.min} %`
        )
        .max(
          restrictions.fundManagementFee.max,
          `Fund management fee cannot be greater than ${restrictions.fundManagementFee.max} %`
        )
        .validate(fundManagementFee);
      await number()
        .required("Please enter fund performance fee")
        .typeError("Please enter fund performance fee")
        .min(
          restrictions.fundPerformanceFee.min,
          `Fund performance fee must be at least ${restrictions.fundPerformanceFee.min} %`
        )
        .max(
          restrictions.fundPerformanceFee.max,
          `Fund performance fee cannot be greater than ${restrictions.fundPerformanceFee.max} %`
        )
        .validate(fundPerformanceFee);
    } catch (e) {
      toast.error(e.errors[0]);
      return;
    }

    if (fundPeriod === null) {
      toast.error("Please select period");
      return;
    }

    if (fundIndent === null) {
      toast.error("Please select indent");
      return;
    }

    if (fundTradingPairs.length === 0) {
      toast.error("Please select trading pairs");
      return;
    }

    dispatch(setCreateModalOpen(true));
  };

  return (
    <React.Fragment>
      <Title>Create DeFund</Title>
      <Container>
        <SectionTitle>
          <Dot />
          <div>Main info</div>
        </SectionTitle>

        <AvatarUploadContainer>
          <AvatarImageContainer>
            <img src={AvatarPlaceholderImage} alt="" />
          </AvatarImageContainer>
          <input type="file" style={{ display: "none" }} ref={fileInput} />
          <ButtonBlue onClick={selectFile}>
            <PlusImage />
            Upload new picture
          </ButtonBlue>
        </AvatarUploadContainer>

        <Label>Name</Label>
        <InputContainer>
          <Input
            defaultValue={fundName}
            type="text"
            spellCheck={false}
            autoComplete="off"
            placeholder="Enter name"
            maxLength={20}
            onChange={(e) => dispatch(setFundName(e.target.value))}
          />
        </InputContainer>

        <Label>Description</Label>
        <FroalaEditorComponent
          config={{
            placeholderText: "Enter description",
            heightMin: 150,
            charCounterMax: 10000,
          }}
          tag="textarea"
          model={fundDescription}
          onModelChange={(val) => dispatch(setFundDescription(val))}
        />
        <Divider />

        <SectionTitle>
          <Dot />
          <div>Commissions</div>
        </SectionTitle>

        <CommissionInputContainer>
          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Subscribtion fee (SF)</div>
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
            </InputLabelContainer>
            <InputCommissionContainer>
              <InputBefore>%</InputBefore>
              <InputWrapper>
                <InputCommission
                  defaultValue={fundSubscribtionFee}
                  type="number"
                  spellCheck={false}
                  autoComplete="off"
                  onChange={(e) =>
                    dispatch(setFundSubscribtionFee(e.target.value))
                  }
                  maxLength={6}
                />
              </InputWrapper>
            </InputCommissionContainer>
          </CommissionInputWrapper>

          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Management fee (MF)</div>
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
            </InputLabelContainer>
            <InputCommissionContainer>
              <InputBefore>%</InputBefore>
              <InputWrapper>
                <InputCommission
                  defaultValue={fundManagementFee}
                  type="number"
                  spellCheck={false}
                  autoComplete="off"
                  onChange={(e) =>
                    dispatch(setFundManagementFee(e.target.value))
                  }
                  maxLength={6}
                />
              </InputWrapper>
            </InputCommissionContainer>
          </CommissionInputWrapper>

          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Performance fee (PF)</div>
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
            </InputLabelContainer>
            <InputCommissionContainer>
              <InputBefore>%</InputBefore>
              <InputWrapper>
                <InputCommission
                  defaultValue={fundPerformanceFee}
                  type="number"
                  spellCheck={false}
                  autoComplete="off"
                  onChange={(e) =>
                    dispatch(setFundPerformanceFee(e.target.value))
                  }
                  maxLength={6}
                />
              </InputWrapper>
            </InputCommissionContainer>
          </CommissionInputWrapper>

          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Period</div>
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
            </InputLabelContainer>
            <Select
              options={options.fundPeriod}
              placeholder="Period"
              value={fundPeriod}
              name="fundPeriod"
              setValue={(val) => dispatch(setFundPeriod(val))}
            />
          </CommissionInputWrapper>

          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Indent</div>
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
            </InputLabelContainer>
            <Select
              options={options.fundIndent}
              placeholder="Indent"
              value={fundIndent}
              name="fundIndent"
              setValue={(val) => dispatch(setFundIndent(val))}
            />
          </CommissionInputWrapper>
        </CommissionInputContainer>

        <TumblerControlContainer>
          <ControlWrapper onClick={() => dispatch(setFundHWM(!fundHWM))}>
            <div>HWM</div>
            <TumblerInfoImageContainer>
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
            </TumblerInfoImageContainer>
            <Tumbler label={false} size="l" view="default" checked={fundHWM} />
          </ControlWrapper>
        </TumblerControlContainer>

        <Divider />

        <SectionTitle>
          <Dot />
          <div>White lists</div>
        </SectionTitle>

        <ControlContainer>
          <ControlWrapper
            onClick={() => dispatch(setFundCapExtended(!fundCapExtended))}
          >
            <Checkbox
              label={false}
              size="m"
              view="default"
              checked={fundCapExtended}
            />
            <ControlTitle>TOP50 cap extended</ControlTitle>
          </ControlWrapper>
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
        </ControlContainer>

        <ControlContainer>
          <ControlWrapper
            onClick={() => dispatch(setFundCapToBtc(!fundCapToBtc))}
          >
            <Checkbox
              label={false}
              size="m"
              view="default"
              checked={fundCapToBtc}
            />
            <ControlTitle>TOP50 cap to BTC</ControlTitle>
          </ControlWrapper>
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
        </ControlContainer>

        <ControlContainer>
          <ControlWrapper
            onClick={() => dispatch(setFundCapToUsdt(!fundCapToUsdt))}
          >
            <Checkbox
              label={false}
              size="m"
              view="default"
              checked={fundCapToUsdt}
            />
            <ControlTitle>TOP50 cap to USDT/USDC/DAI</ControlTitle>
          </ControlWrapper>
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
        </ControlContainer>

        <TooltipLabelContainer>
          <div>Trading pairs</div>
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
        </TooltipLabelContainer>

        {tradePairs ? (
          <Select
            options={tradePairs}
            placeholder="Trading pairs"
            value={fundTradingPairs}
            name="fundTradingPairs"
            setValue={(val) => dispatch(setFundTradingPairs(val))}
            isMulti
            isSearchable
          />
        ) : (
          <Loading color="#000" />
        )}

        <Divider />

        <Description>
          You're about to create a new deFund on Ethereum and will have to
          confirm a transaction with your currently connected wallet. The exact
          amount will be determined by your wallet.
          {/*The creation will cost approximately 0.08423 ETH.*/}
        </Description>
        <ButtonBlue onClick={confirm}>Confirm</ButtonBlue>
      </Container>
    </React.Fragment>
  );
};

export default FundCreate;
