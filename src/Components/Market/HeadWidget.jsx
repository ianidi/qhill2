import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import Blockies from "react-blockies";
import { toast } from "react-toastify";

import { faker } from "@faker-js/faker";

import {
  Container,
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
  RightContainer,
  AUMContainer,
  AUMCaption,
  AUMValue,
  InvestorCount,
} from "./HeadWidget.styled";
import Numeral from "../UI/Numeral";
import { ReactComponent as CopyImage } from "../../Asset/Images/copy.svg";
import NetworkLogoImage from "../../Asset/Images/network_logo.png";
import { ReactComponent as PeopleImage } from "../../Asset/Images/people.svg";

const HeadWidget = ({
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

  const { account } = useWeb3React();

  const memberName = "Tonny Montana";

  const networks = [{ title: "DeBank" }, { title: "Zerion" }];

  const own = account === manager;

  const navigateToMember = () => {
    navigate(`/member/${manager}`);
  };

  return (
    <Container>
      <Head>
        <LogoContainer>
          {/* <BtcImage /> */}
          {/* <img
            src={faker.image.avatar()}
            style={{ height: "144px", width: "144px" }}
            alt=""
          /> */}
          <LogoWrapper>
            <Blockies seed={manager} size={37} scale={4} />
          </LogoWrapper>
        </LogoContainer>
        <HeadInfo>
          <HeadTitleContainer>
            <HeadTitle>{name}</HeadTitle>
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
              <Blockies seed={manager} size={10} scale={3} />
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

          <NetworkContainer>
            {networks.map((item, index) => (
              <NetworkItem key={index}>
                <img
                  src={NetworkLogoImage}
                  alt=""
                  style={{ width: 24, height: 24 }}
                />
                <div>{item.title}</div>
              </NetworkItem>
            ))}
          </NetworkContainer>
        </HeadInfo>
      </Head>
      <RightContainer>
        <AUMContainer>
          <AUMCaption>
            <div>AUM</div>
            <InvestorCount>
              <PeopleImage />
              <div>{holders}</div>
            </InvestorCount>
          </AUMCaption>
          <AUMValue>{aum} USDT</AUMValue>
        </AUMContainer>
      </RightContainer>
    </Container>
  );
};

export default HeadWidget;
