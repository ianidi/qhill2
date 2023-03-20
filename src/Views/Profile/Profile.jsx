import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useWeb3React } from "@web3-react/core";
import FroalaEditorComponent from "react-froala-wysiwyg";
import { Tumbler } from "@yandex/ui/Tumbler/desktop/bundle";
import { TooltipStateful } from "@yandex/ui/Tooltip/desktop/bundle";

import "froala-editor/js/plugins.pkgd.min.js";
// import "froala-editor/js/languages/fr.js";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import {
  Container,
  SectionTitle,
  Dot,
  AvatarUploadContainer,
  AvatarImageContainer,
  ButtonBlue,
  Label,
  Divider,
  InputContainer,
  Input,
  // ControlContainer,
  ControlWrapper,
  InfoImageContainer,
  InputLabelContainer,
  TumblerControlContainer,
  TumblerInfoImageContainer,
} from "./Profile.styled";

import AvatarPlaceholderImage from "../../Asset/Images/AvatarPlaceholder.png";
import { ReactComponent as PlusImage } from "../../Asset/Images/plus.svg";
import { ReactComponent as InfoImage } from "../../Asset/Images/info.svg";

import { uploadImage, saveProfile } from "../../Store/API/API";

const Profile = () => {
  const { t, i18n } = useTranslation();

  const { library, account } = useWeb3React();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CV, setCV] = useState("");
  const [checked, setChecked] = useState(false);

  const [imageURL, setImageURL] = useState();

  const fileInput = useRef();

  const clickFileInput = () => {
    fileInput.current.click();
  };

  const selectFile = async (e) => {
    // const files = Array.from(e.target.files)

    setImageURL(URL.createObjectURL(e.target.files[0]));
    // this.setState({ uploading: true })

    const formData = new FormData();

    formData.append("image", e.target.files[0]);

    const res = await uploadImage({ formData });

    console.log(res);
  };

  const save = async () => {
    let signature = "";

    var message = "edit profile";

    try {
      signature = await library.getSigner().signMessage(message);
    } catch (e) {
      console.log(e);
    }

    if (signature) {
      await saveProfile({ address: account, signature, name, email, CV });
    }
  };

  return (
    <Container>
      <SectionTitle>
        <Dot />
        <div>Profile information</div>
      </SectionTitle>

      <AvatarUploadContainer>
        <AvatarImageContainer>
          {imageURL ? (
            <img src={imageURL} alt="" />
          ) : (
            <img src={AvatarPlaceholderImage} alt="" />
          )}
        </AvatarImageContainer>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInput}
          accept="image/*"
          onChange={selectFile}
        />
        <ButtonBlue onClick={clickFileInput}>
          <PlusImage />
          Upload new picture
        </ButtonBlue>
      </AvatarUploadContainer>

      <Label>Display name</Label>
      <InputContainer>
        <Input
          defaultValue=""
          type="text"
          spellCheck={false}
          autoComplete="off"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </InputContainer>

      <Label>Email</Label>
      <InputContainer>
        <Input
          defaultValue=""
          type="email"
          spellCheck={false}
          autoComplete="off"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>

      <InputLabelContainer style={{ marginTop: 40 }}>
        <div>CV</div>
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
      <FroalaEditorComponent
        config={{
          placeholderText: "Enter description",
          charCounterCount: false,
          heightMin: 150,
        }}
        tag="textarea"
        model={CV}
        onModelChange={(val) => setCV(val)}
      />

      <Divider />

      <SectionTitle>
        <Dot />
        <div>Notifications</div>
      </SectionTitle>

      <TumblerControlContainer>
        <ControlWrapper onClick={() => setChecked(!checked)}>
          <div>Reporting period</div>
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
          <Tumbler label={false} size="l" view="default" checked={checked} />
        </ControlWrapper>
      </TumblerControlContainer>

      <TumblerControlContainer>
        <ControlWrapper onClick={() => setChecked(!checked)}>
          <div>Fund conditions change</div>
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
          <Tumbler label={false} size="l" view="default" checked={checked} />
        </ControlWrapper>
      </TumblerControlContainer>

      <Divider />

      <ButtonBlue onClick={save}>Save</ButtonBlue>
    </Container>
  );
};

export default Profile;
