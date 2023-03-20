import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TooltipStateful } from "@yandex/ui/Tooltip/desktop/bundle";

import {
  Container,
  Title,
  Divider,
  Label,
  InfoImageContainer,
  SlippageContainer,
  AutoButton,
  InputContainer,
  Input,
} from "./Settings.styled";

import { ReactComponent as InfoImage } from "../../Asset/Images/info.svg";

const Settings = () => {
  const { t, i18n } = useTranslation();

  const [value, setValue] = useState("");

  return (
    <Container>
      <Title>Transaction settings</Title>
      <Label>
        <div>Slippage tolerance</div>
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
      </Label>
      <SlippageContainer>
        <AutoButton>Auto</AutoButton>
        <InputContainer>
          <Input
            defaultValue=""
            type="text"
            spellCheck={false}
            autoComplete="off"
            placeholder="0.10"
            maxLength={10}
            // onChange={(e) => dispatch(setSlippage(e.target.value))}
          />
        </InputContainer>
      </SlippageContainer>
      {/* <Divider /> */}
    </Container>
  );
};

export default Settings;
