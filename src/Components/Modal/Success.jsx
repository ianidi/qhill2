import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Head,
  CloseContainer,
  Container,
  Title,
  Caption,
  ButtonBlue,
} from "./Success.styled";
import {
  setCreateModalOpen,
  setInvestModalOpen,
  setWithdrawModalOpen,
} from "../../Store/AppSlice";

import hand from "../../Asset/Images/hand.png";
import hand2x from "../../Asset/Images/hand@2x.png";
import hand3x from "../../Asset/Images/hand@3x.png";
import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";

const Success = ({ type }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Head>
        <CloseContainer
          onClick={() => {
            if (type === "create") {
              navigate("/fund");
              dispatch(setCreateModalOpen(false));
            }
            if (type === "invest") {
              dispatch(setInvestModalOpen(false));
            }
            if (type === "withdraw") {
              dispatch(setWithdrawModalOpen(false));
            }
          }}
        >
          <CloseImage />
        </CloseContainer>
      </Head>
      <Container>
        <img src={hand} srcSet={`${hand2x} 2x, ${hand3x} 3x`} alt="" />
        <Title>{t(`Modal.Success.Title`)}</Title>
        {type === "create" && (
          <React.Fragment>
            <Caption>{t(`Modal.Success.Caption`)}</Caption>
            <ButtonBlue
              onClick={() => {
                navigate("/fund");
                dispatch(setCreateModalOpen(false));
              }}
            >
              {t(`Modal.Success.Button.SeeMyFunds`)}
            </ButtonBlue>
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Success;
