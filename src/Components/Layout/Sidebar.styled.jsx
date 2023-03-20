import styled from "styled-components";
import * as theme from "../../Common/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
  height: 100%;
  box-shadow: 10px 10px 20px #f2f2f7;
  @media screen and (max-width: 991px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const LogoSm = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;
export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Theme = styled.div`
  color: #737373;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

export const ThemeItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const ThemeImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const MenuLink = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 991px) {
    margin-top: 0;
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const MenuTitle = styled.div`
  margin-left: 24px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
