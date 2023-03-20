import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fcfcfc;
  padding: 24px;
  box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05),
    0px 32px 48px -8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(32px);
  border-radius: 16px;
  width: 100%;
  max-width: 800px;
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;
export const Dot = styled.div`
  margin-right: 16px;
  width: 16px;
  height: 32px;
  background: #2a85ff;
  border-radius: 4px;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
export const CloseContainer = styled.div`
  cursor: pointer;
`;
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #efefef;
  margin-top: 24px;
  margin-bottom: 24px;
`;
export const Caption = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #6f767e;
  margin-bottom: 24px;
`;
export const WalletContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexGap({ row: "8px", column: "24px" })}
`;
export const WalletItem = styled.div`
  display: flex;
  align-items: center;
  width: calc(50% - 24px);
  padding: 16px;
  min-height: 64px;
  background: #f4f4f4;
  border: 2px solid #efefef;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  user-select: none;
  cursor: pointer;
`;
export const WalletImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #ffffff;
  border-radius: 100px;
  margin-right: 12px;
`;
export const InstallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WalletImageContainerLg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background: #f4f4f4;
  border-radius: 100px;
  margin-top: 32px;
  margin-bottom: 10px;
`;
export const InstallTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  margin-bottom: 16px;
`;
export const InstallCaption = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #6f767e;
  margin-bottom: 32px;
  max-width: 390px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 32px;
  ${flexGap({ row: "16px", column: "16px" })}
`;
export const ButtonBack = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  ${flexGap({ row: "8px", column: "8px" })}
  border: 2px solid #efefef;
  border-radius: 12px;
  background: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
`;
export const ButtonOpen = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  border: 2px solid #2a85ff;
  border-radius: 12px;
  background: #2a85ff;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #ffffff;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: #3a8cf9;
  }
`;
