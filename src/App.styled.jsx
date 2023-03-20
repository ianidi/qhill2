import styled from "styled-components";
import * as theme from "./Common/Theme";

export const Layout = styled.div`
  height: 100vh;
  display: flex;
`;
export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  background-color: #fff;
  width: 270px;
  @media screen and (max-width: 991px) {
    width: 140px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  height: 100px;
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #fff;
  border-left: 1px solid #f4f4f4;
  width: calc(100% - 270px);
  @media screen and (max-width: 991px) {
    width: calc(100% - 140px);
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    border-left: none;
  }
`;
export const ContentContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 0;
  bottom: 0;
  width: calc(100% - 270px);
  @media screen and (max-width: 991px) {
    width: calc(100% - 140px);
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width: 767px) {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
