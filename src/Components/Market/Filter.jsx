import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Slider, useSliderState } from "@yandex/ui/Slider/desktop/bundle";
import { Checkbox } from "@yandex/ui/Checkbox/desktop/bundle";
import { Tumbler } from "@yandex/ui/Tumbler/desktop/bundle";
import { Radiobox, Radio } from "@yandex/ui/Radiobox/desktop/bundle";

import {
  Container,
  Head,
  TitleContainer,
  Dot,
  Title,
  CloseContainer,
  Divider,
  Label,
  ControlContainer,
  ButtonsContainer,
  ButtonReset,
  ButtonApply,
} from "./Filter.styled";
import "./Filter.scss";

import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";

const Filter = ({ setVisible }) => {
  const { t, i18n } = useTranslation();

  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("value1");

  return (
    <Container>
      <Head>
        <TitleContainer>
          <Dot />
          <Title>Showing 39 of 121 funds</Title>
        </TitleContainer>
        <CloseContainer onClick={() => setVisible(false)}>
          <CloseImage />
        </CloseContainer>
      </Head>

      <Divider />

      <Label>AUM (USDT)</Label>
      <SliderComponent range={[0, 5000]} />
      <Divider />
      <Label>Risk</Label>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>High</div>
        <Checkbox label={false} size="m" view="default" checked={checked} />
      </ControlContainer>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>Medium</div>
        <Checkbox label={false} size="m" view="default" checked={checked} />
      </ControlContainer>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>Low</div>
        <Checkbox label={false} size="m" view="default" checked={checked} />
      </ControlContainer>

      <Divider />

      <Label>Validity period</Label>
      <Radiobox
        size="m"
        view="default"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <ControlContainer onClick={() => setValue("value1")}>
          <div>All</div>
          <Radio value="value1" />
        </ControlContainer>
        <ControlContainer onClick={() => setValue("value2")}>
          <div>{">"}3 months</div>
          <Radio value="value2" />
        </ControlContainer>
        <ControlContainer onClick={() => setValue("value3")}>
          <div>{">"}6 months</div>
          <Radio value="value3" />
        </ControlContainer>
        <ControlContainer onClick={() => setValue("value4")}>
          <div>{">"}12 months</div>
          <Radio value="value4" />
        </ControlContainer>
      </Radiobox>

      <Divider />

      <Label>Rating</Label>
      <SliderComponent range={[1, 5]} />

      <Divider />

      <Label>Options</Label>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>Extended RM</div>
        <Tumbler label={false} size="m" view="default" checked={checked} />
      </ControlContainer>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>KYC Manager</div>
        <Tumbler label={false} size="m" view="default" checked={checked} />
      </ControlContainer>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>HWM</div>
        <Tumbler label={false} size="m" view="default" checked={checked} />
      </ControlContainer>

      <ButtonsContainer>
        <ButtonReset>Reset</ButtonReset>
        <ButtonApply>Apply</ButtonApply>
      </ButtonsContainer>
    </Container>
  );
};

const SliderComponent = ({ step = 1, range }) => {
  const state = useSliderState({ value: range });

  return (
    <Slider
      filled
      step={step}
      view="default"
      min={range[0]}
      max={range[1]}
      {...state}
      renderThumb={(props, Thumb) => (
        <Thumb {...props} style={{ width: 40, height: 20, borderRadius: 4 }}>
          {props.value}
        </Thumb>
      )}
    />
  );
};

export default Filter;
