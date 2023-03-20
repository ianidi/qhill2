import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Blockies from "react-blockies";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  LeftContainer,
  RightContainer,
  BlockiesContainer,
  ConnectContainer,
  ConnectImageContainer,
} from "./Navbar.styled";
import { selectWallet, setWalletModalOpen } from "../../Store/AppSlice";
import { networks, networkParams, options } from "../../Common/Constant";
import Select from "../UI/Select";
import { toHex } from "../../Common/Utils";
import { ReactComponent as ConnectOffImage } from "../../Asset/Images/connect_off.svg";
import { ReactComponent as ConnectOnImage } from "../../Asset/Images/connect_on.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { library, chainId, account, active } = useWeb3React();
  const wallet = useSelector(selectWallet);

  const dispatch = useDispatch();

  const switchNetwork = async ({ network }) => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }],
      });
    } catch (switchError) {
      if (switchError.code === 4902 || switchError.code === -32603) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]],
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const selectedNetwork = networks.find((item) => item.id === chainId) || null;

  return (
    <React.Fragment>
      <Container>
        <LeftContainer>
          {!active ? (
            <ConnectContainer
              onClick={() => dispatch(setWalletModalOpen(true))}
            >
              <ConnectImageContainer>
                <ConnectOffImage />
              </ConnectImageContainer>
              <div>{t(`Navbar.ConnectWallet`)}</div>
            </ConnectContainer>
          ) : (
            <React.Fragment>
              <ConnectContainer
                onClick={() => dispatch(setWalletModalOpen(true))}
              >
                <ConnectImageContainer>
                  <ConnectOnImage />
                </ConnectImageContainer>
                <div>{wallet}</div>
              </ConnectContainer>

              <Select
                options={networks}
                placeholder="Network"
                value={selectedNetwork}
                name="network"
                setValue={(val) => switchNetwork({ network: val.id })}
              />
            </React.Fragment>
          )}
        </LeftContainer>
        <RightContainer>
          <Select
            options={options.i18n}
            placeholder="EN"
            value={{ id: i18n.language, label: i18n.language.toUpperCase() }}
            name="i18n"
            setValue={(val) => {
              i18n.changeLanguage(val.id);
            }}
          />
          {active && (
            <BlockiesContainer onClick={() => navigate("/profile")}>
              <Blockies seed={account} size={16} scale={3} />
            </BlockiesContainer>
          )}
        </RightContainer>
      </Container>
    </React.Fragment>
  );
};

export default Navbar;
