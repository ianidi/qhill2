import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "@yandex/ui/Modal/desktop/bundle";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Head,
  TitleContainer,
  Dot,
  Title,
  CloseContainer,
  Divider,
  Caption,
  WalletContainer,
  WalletItem,
  WalletImageContainer,
  InstallContainer,
  WalletImageContainerLg,
  InstallTitle,
  InstallCaption,
  ButtonsContainer,
  ButtonBack,
  ButtonOpen,
} from "./WalletModal.styled";
import { Web3Context } from "../../index";

import { ReactComponent as BackImage } from "../../Asset/Images/back.svg";
import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";
import { ReactComponent as MetamaskImage } from "../../Asset/Images/Wallet/metamask.svg";
import { ReactComponent as WalletConnectImage } from "../../Asset/Images/Wallet/walletconnect.svg";
import { ReactComponent as CoinbaseImage } from "../../Asset/Images/Wallet/coinbase.svg";
import {
  setWallet,
  setWalletModalOpen,
  selectWalletModalOpen,
} from "../../Store/AppSlice";

const WalletModal = () => {
  const { t, i18n } = useTranslation();

  const [click, setClick] = useState(false);
  const { CoinbaseWallet, WalletConnect, Injected } = useContext(Web3Context);
  const { activate, deactivate } = useWeb3React();

  const dispatch = useDispatch();

  const walletModalOpen = useSelector(selectWalletModalOpen);

  const wallets = [
    {
      title: "MetaMask",
      provider: Injected,
      image: <MetamaskImage />,
    },
    {
      title: "WalletConnect",
      provider: WalletConnect,
      image: <WalletConnectImage />,
    },
    {
      title: "Coinbase Wallet",
      provider: CoinbaseWallet,
      image: <CoinbaseImage />,
    },
    // { title: "Torus" },
    // { title: "Opera" },
    // { title: "Trezor" },
    // { title: "Fortmatic" },
    // { title: "Ledger" },
    // { title: "Authereum" },
    // { title: "Keystone" },
    // { title: "Portis" },
  ];

  return (
    <Modal
      theme="normal"
      // onClose={() => dispatch(setWalletModalOpen(false))}
      visible={walletModalOpen}
      zIndexGroupLevel={20}
    >
      <Container>
        <Head>
          <TitleContainer>
            <Dot />
            <Title>{t(`Modal.Wallet.Title`)}</Title>
          </TitleContainer>
          <CloseContainer onClick={() => dispatch(setWalletModalOpen(false))}>
            <CloseImage />
          </CloseContainer>
        </Head>

        <Divider />

        {!click ? (
          <React.Fragment>
            <Caption>{t(`Modal.Wallet.Caption`)}</Caption>
            <WalletContainer>
              {wallets.map((item, index) => (
                <WalletItem
                  key={index}
                  onClick={() => {
                    activate(item.provider);
                    dispatch(setWallet(item.title));
                    dispatch(setWalletModalOpen(false));
                  }}
                >
                  <WalletImageContainer>{item.image}</WalletImageContainer>
                  <div>{item.title}</div>
                </WalletItem>
              ))}
            </WalletContainer>
          </React.Fragment>
        ) : (
          <InstallContainer>
            <WalletImageContainerLg>
              <MetamaskImage style={{ width: 32, height: 32 }} />
            </WalletImageContainerLg>
            <InstallTitle>MetaMask</InstallTitle>
            <InstallCaption>{t(`Modal.Wallet.InstallMetamask`)}</InstallCaption>

            <ButtonsContainer>
              <ButtonBack onClick={() => setClick(false)}>
                <BackImage />
                {t(`Modal.Wallet.Button.Back`)}
              </ButtonBack>
              <ButtonOpen>{t(`Modal.Wallet.Button.OpenMetaMask`)}</ButtonOpen>
            </ButtonsContainer>
          </InstallContainer>
        )}
      </Container>
    </Modal>
  );
};

export default WalletModal;
