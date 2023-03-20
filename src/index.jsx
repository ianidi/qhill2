import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureRootTheme } from "@yandex/ui/Theme";
import { theme } from "@yandex/ui/Theme/presets/default";
import { ToastContainer } from "react-toastify";
import { Web3Provider } from "@ethersproject/providers";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { Buffer } from "buffer";
import { Web3ReactProvider } from "@web3-react/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./Common/i18n/i18n";
import App from "./App";
import { store } from "./Store/Store";

import "./index.scss";
import "./Asset/Styles/Toastify.scss";
import "overlayscrollbars/css/OverlayScrollbars.css";
import "reactjs-popup/dist/index.css";

window.Buffer = window.Buffer || Buffer;

configureRootTheme({ theme });

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const supportedChainIds = [1, 3, 4, 5, 42, 69];

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  appName: "qhill",
  supportedChainIds,
});

const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds,
});

export const Web3Context = React.createContext();

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3Context.Provider value={{ CoinbaseWallet, WalletConnect, Injected }}>
        <QueryClientProvider client={queryClient}>
          <HashRouter>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover
              closeButton={false}
              theme="colored"
            />
            <App />
          </HashRouter>
        </QueryClientProvider>
      </Web3Context.Provider>
    </Web3ReactProvider>
  </Provider>
);

document.addEventListener("wheel", function (event) {
  if (document.activeElement.type === "number") {
    document.activeElement.blur();
  }
});
