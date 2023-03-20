import React from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "@yandex/ui/Modal/desktop/bundle";
import { useNavigate } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useDispatch, useSelector } from "react-redux";

import {
  Head,
  TitleContainer,
  CloseContainer,
  Container,
  Title,
  Dot,
  Divider,
  Caption,
  SearchContainer,
  SearchImageContainer,
  SearchInput,
} from "./TokenListModal.styled";
import {
  setTokenListModalOpen,
  selectTokenListModalOpen,
} from "../../Store/AppSlice";

import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";
import { ReactComponent as SearchImage } from "../../Asset/Images/search.svg";

const TokenListModal = () => {
  const { t, i18n } = useTranslation();

  const tokenListModalOpen = useSelector(selectTokenListModalOpen);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Modal
      theme="normal"
      // onClose={() => dispatch(setTokenListModalOpen(false))}
      visible={tokenListModalOpen}
      zIndexGroupLevel={20}
    >
      <Container>
        <Head>
          <TitleContainer>
            <Dot />
            <Title>Select token</Title>
          </TitleContainer>
          <CloseContainer
            onClick={() => {
              dispatch(setTokenListModalOpen(false));
            }}
          >
            <CloseImage />
          </CloseContainer>
        </Head>
        <SearchContainer>
          <SearchImageContainer>
            <SearchImage />
          </SearchImageContainer>
          <SearchInput
            defaultValue=""
            type="text"
            spellCheck={false}
            autoComplete="off"
            placeholder={t(`Market.ListWidget.SearchPlaceholder`)}
          />
        </SearchContainer>
        <Divider />
        <OverlayScrollbarsComponent
          options={{
            scrollbars: { autoHide: "never" },
          }}
          style={{
            // maxHeight: "50vh"
            maxHeight: "400px",
          }}
          className="os-theme-thin-dark"
        >
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
        </OverlayScrollbarsComponent>
      </Container>
    </Modal>
  );
};

const TokenItem = () => {
  return <div style={{ height: 48, border: "1px solid #000" }}>Token</div>;
};

export default TokenListModal;
