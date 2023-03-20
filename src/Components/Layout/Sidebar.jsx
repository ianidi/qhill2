import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useWeb3React } from "@web3-react/core";
import { RadioButton } from "@yandex/ui/RadioButton/desktop/bundle";
import { useDispatch, useSelector } from "react-redux";

import { selectTheme, setTheme } from "../../Store/AppSlice";
import {
  Container,
  Logo,
  LogoSm,
  ThemeContainer,
  Theme,
  ThemeItem,
  ThemeImageContainer,
  MenuLink,
  Icon,
  MenuTitle,
} from "./Sidebar.styled";
import "./Sidebar.scss";
import { ReactComponent as LogoImage } from "../../Asset/Images/logo.svg";
import { ReactComponent as LogoSmImage } from "../../Asset/Images/logo_sm.svg";
import { ReactComponent as MarketImage } from "../../Asset/Images/market.svg";
import { ReactComponent as FundImage } from "../../Asset/Images/fund.svg";
import { ReactComponent as InvestmentImage } from "../../Asset/Images/investment.svg";
import { ReactComponent as LightImage } from "../../Asset/Images/light.svg";
import { ReactComponent as DarkImage } from "../../Asset/Images/dark.svg";

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const { active } = useWeb3React();
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);

  return (
    <Container>
      <Logo>
        <NavLink to="/">
          <LogoImage />
        </NavLink>
      </Logo>
      <LogoSm>
        <NavLink to="/">
          <LogoSmImage />
        </NavLink>
      </LogoSm>
      <div>
        <OverlayScrollbarsComponent
          options={{
            scrollbars: { autoHide: "never" },
          }}
          style={{ maxHeight: "80vh" }}
          className="os-theme-thin-dark"
        >
          <MenuItem
            icon={<MarketImage />}
            title={t(`Sidebar.Menu.Market`)}
            to="/market"
          />
          {active && (
            <React.Fragment>
              <MenuItem
                icon={<FundImage />}
                title={t(`Sidebar.Menu.Fund`)}
                to="/fund"
              />
              <MenuItem
                icon={<InvestmentImage />}
                title={t(`Sidebar.Menu.Investment`)}
                to="/investment"
              />
            </React.Fragment>
          )}
        </OverlayScrollbarsComponent>
      </div>
      <ThemeContainer>
        <Theme>
          <RadioButton
            size="m"
            view="default"
            value={theme}
            options={[
              {
                value: "light",
                children: (
                  <ThemeItem>
                    <ThemeImageContainer>
                      <LightImage />
                    </ThemeImageContainer>
                    <div>{t(`Sidebar.Theme.Light`)}</div>
                  </ThemeItem>
                ),
              },
              {
                value: "dark",
                children: (
                  <ThemeItem>
                    <ThemeImageContainer>
                      <DarkImage />
                    </ThemeImageContainer>
                    <div>{t(`Sidebar.Theme.Dark`)}</div>
                  </ThemeItem>
                ),
              },
            ]}
            onChange={(event) => dispatch(setTheme(event.target.value))}
          />
        </Theme>
      </ThemeContainer>
    </Container>
  );
};

function MenuItem({ icon, title, to }) {
  return (
    <React.Fragment>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "menuLink__container menuLink_active"
            : "menuLink__container"
        }
      >
        <MenuLink>
          <Icon>{icon}</Icon>
          <MenuTitle>{title}</MenuTitle>
        </MenuLink>
      </NavLink>
    </React.Fragment>
  );
}

export default Sidebar;
