import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
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
  margin-top: 12px;
  margin-bottom: 12px;
`;
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
  max-width: 440px;
`;
export const Caption = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #6f767e;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 24px;
  border-radius: 12px;
  background: #f4f4f4;
  width: 100%;
  user-select: none;
`;
export const SearchImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;
export const SearchInput = styled.input`
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  background: #f4f4f4;
  border: none;
  outline: none;
  text-decoration: none !important;
  width: 100%;
`;
