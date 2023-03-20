import React, { useRef, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route, useLocation } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useWeb3React } from "@web3-react/core";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import {
  Layout,
  SidebarContainer,
  NavbarContainer,
  ContentContainer,
  Content,
} from "./App.styled";
import { selectTheme } from "./Store/AppSlice";
import { light, dark } from "./Common/Theme";
import Sidebar from "./Components/Layout/Sidebar";
import Navbar from "./Components/Layout/Navbar";
import Market from "./Views/Market/Market";
import MarketView from "./Views/Market/MarketView";
import Member from "./Views/Member/Member";
import Fund from "./Views/Fund/Fund";
import FundCreate from "./Views/Fund/Create";
import Investment from "./Views/Investment/Investment";
import Profile from "./Views/Profile/Profile";
import Swap from "./Views/Swap/Swap";
import CreateModal from "./Components/Modal/CreateModal";
import WalletModal from "./Components/Modal/WalletModal";

const Page = () => {
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <div>{t(`hi`)}</div>
    </React.Fragment>
  );
};

const App = () => {
  const location = useLocation();
  const OSComponentRef = useRef(null);

  const { active } = useWeb3React();

  const theme = useSelector(selectTheme);

  useLayoutEffect(() => {
    OSComponentRef.current.osInstance().scroll({ top: 0 });
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Layout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
        <ContentContainer>
          <OverlayScrollbarsComponent
            options={{
              scrollbars: { autoHide: "never" },
            }}
            style={{ maxHeight: "calc(100vh - 100px)" }}
            className="os-theme-thin-dark"
            ref={OSComponentRef}
          >
            <Content>
              <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/market" element={<Market />} />
                <Route path="/market/:id" element={<MarketView />} />
                <Route path="/member/:address" element={<Member />} />
                {active && (
                  <React.Fragment>
                    <Route path="/fund" element={<Fund />} />
                    <Route path="/fund/create" element={<FundCreate />} />
                    <Route path="/investment" element={<Investment />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/swap" element={<Swap />} />
                  </React.Fragment>
                )}
                <Route path="page/:key" element={<Page />} />
              </Routes>
              {active && (
                <React.Fragment>
                  <CreateModal />
                </React.Fragment>
              )}
              <WalletModal />
            </Content>
          </OverlayScrollbarsComponent>
        </ContentContainer>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
