import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Popup } from "@yandex/ui/Popup/desktop/bundle";
import { useDispatch, useSelector } from "react-redux";

import { setTokenListModalOpen } from "../../Store/AppSlice";
import {
  Container,
  SwapContainer,
  SectionTitle,
  TitleContainer,
  Dot,
  SettingsImageContainer,
  ButtonBlue,
  Divider,
  ArrowContainer,
  SwapFieldsContainer,
  ValueContainer,
  ValueInput,
  ValueLeft,
  ValueRight,
  BalanceContainer,
  Balance,
  Max,
  TitleRow,
  DividerSmall,
} from "./Swap.styled";
import { options } from "../../Common/Constant";
import Select from "../../Components/UI/Select";
import Settings from "../../Components/Swap/Settings";
import TokenListModal from "../../Components/Modal/TokenListModal";

import {
  selectSwapFrom,
  selectSwapTo,
  setSwapFrom,
  setSwapTo,
} from "../../Store/AppSlice";
import { ReactComponent as SettingsImage } from "../../Asset/Images/settings.svg";
import { ReactComponent as ArrowsImage } from "../../Asset/Images/arrows.svg";

const Swap = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const swapFrom = useSelector(selectSwapFrom);
  const swapTo = useSelector(selectSwapTo);

  const settingsRef = useRef(null);
  const [settingsVisible, setSettingsVisible] = useState(false);

  return (
    <React.Fragment>
      <TokenListModal />
      <Container>
        <SwapContainer>
          <SectionTitle>
            <TitleContainer>
              <Dot />
              <div>Swap</div>
            </TitleContainer>
            <SettingsImageContainer
              ref={settingsRef}
              onClick={() => setSettingsVisible(!settingsVisible)}
            >
              <SettingsImage />
            </SettingsImageContainer>
            <Popup
              target="anchor"
              anchor={settingsRef}
              view="default"
              direction={["bottom-end"]}
              visible={settingsVisible}
              onClose={() => setSettingsVisible(false)}
              scope="inplace"
              motionless={true}
            >
              <Settings />
            </Popup>
          </SectionTitle>

          <SwapFieldsContainer>
            <ValueContainer>
              <ValueLeft>
                <ValueInput
                  defaultValue={swapFrom}
                  type="number"
                  spellCheck={false}
                  autoComplete="off"
                  onChange={(e) => dispatch(setSwapFrom(e.target.value))}
                  maxLength={6}
                  placeholder="0"
                />
              </ValueLeft>
              <ValueRight>
                {/* <Select
                options={options.swap}
                placeholder="From"
                value={swapFrom}
                name="swapFrom"
                setValue={(val) => dispatch(setSwapFrom(val))}
              /> */}
                <div onClick={() => dispatch(setTokenListModalOpen(true))}>
                  Click to select token
                </div>
              </ValueRight>
            </ValueContainer>
            <BalanceContainer>
              <Balance>Balance: 0 ETH</Balance>
              <Max>Max</Max>
            </BalanceContainer>
            <Divider>
              <ArrowContainer>
                <ArrowsImage height={14} />
              </ArrowContainer>
            </Divider>

            <ValueContainer>
              <ValueLeft>
                <ValueInput
                  defaultValue={swapTo}
                  type="number"
                  spellCheck={false}
                  autoComplete="off"
                  maxLength={6}
                  placeholder="0"
                />
              </ValueLeft>
              <ValueRight>
                <Select
                  options={options.swap}
                  placeholder="To"
                  value={swapTo}
                  name="swapTo"
                  setValue={(val) => dispatch(setSwapTo(val))}
                />
              </ValueRight>
            </ValueContainer>
            <BalanceContainer>
              <Balance>Balance: 0 ETH</Balance>
            </BalanceContainer>
          </SwapFieldsContainer>

          <ButtonBlue onClick={() => {}}>Swap</ButtonBlue>

          <TitleRow>
            <div>Exchange Rate</div>
            <div>1 $ANRX ≈ 0.000001735 ETH</div>
          </TitleRow>
          <DividerSmall />
          <TitleRow>
            <div>Minimum Received</div>
            <div>0.0000017 ETH</div>
          </TitleRow>
          <DividerSmall />
          <TitleRow>
            <div>Price impact</div>
            <div>4.29 %</div>
          </TitleRow>
          <DividerSmall />
          <TitleRow>
            <div>Slippage Tolerance</div>
            <div>2.00%</div>
          </TitleRow>
          <DividerSmall />
          <TitleRow>
            <div>Network Fee</div>
            <div>≈ $2.15</div>
          </TitleRow>
          <DividerSmall />
        </SwapContainer>
      </Container>
    </React.Fragment>
  );
};

export default Swap;
