import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { utils } from "ethers";
import Blockies from "react-blockies";
import { useQuery } from "@tanstack/react-query";

import {
  ButtonBack,
  Container,
  Head,
  LogoContainer,
  LogoWrapper,
  HeadInfo,
  HeadTitleContainer,
  HeadTitle,
} from "./Member.styled";

import AvatarPlaceholderImage from "../../Asset/Images/AvatarPlaceholder.png";
import { ReactComponent as BackImage } from "../../Asset/Images/back.svg";

// import { uploadImage } from "../../Store/API/API";

const Member = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const { address } = useParams();

  const isValidAddress = utils.isAddress(address);

  // const {
  //   status,
  //   fetchStatus,
  //   data: member,
  // } = useQuery(
  //   ["member", address],
  //   // getMemberByAddress,
  //   {
  //     enabled: isValidAddress,
  //   }
  // );

  if (!isValidAddress) {
    return null;
  }

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <ButtonBack onClick={navigateBack}>
        <BackImage />
        <div>Back to DeFunds Market</div>
      </ButtonBack>
      <Container>
        <Head>
          <LogoContainer>
            <LogoWrapper>
              <Blockies seed={address} size={37} scale={4} />
            </LogoWrapper>
          </LogoContainer>
          <HeadInfo>
            <HeadTitleContainer>
              <HeadTitle>{address}</HeadTitle>
            </HeadTitleContainer>
          </HeadInfo>
        </Head>
      </Container>
    </React.Fragment>
  );
};

export default Member;
