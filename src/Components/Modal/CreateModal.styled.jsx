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
  margin-bottom: 42px;
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
export const TableContainer = styled.div`
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 8px;
  overflow: hidden;
`;
export const TableHead = styled.div`
  background: #ffffff;
  padding: 12px;
  min-height: 52px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.01em;
  color: #6f767e;
  ${flexGap({ row: "12px", column: "8px" })}
`;
export const TableCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: calc(25% - 8px);
  padding-left: 8px;
  padding-right: 8px;
  &:first-child {
    text-align: initial;
    justify-content: flex-start;
  }
`;
export const TableBody = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
`;
export const TableRow = styled.div`
  padding: 12px;
  background: #ffffff;
  min-height: 52px;
  display: flex;
  align-items: center;
  ${flexGap({ row: "12px", column: "8px" })}
  &:nth-child(odd) {
    background: rgba(244, 244, 244, 0.5);
  }
  &:last-child {
    min-height: auto;
  }
`;
export const CheckContainer = styled.div`
  margin-top: 44px;
  margin-bottom: 20px;
`;
export const CheckItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  margin-bottom: 24px;
`;
export const CheckImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;
export const TextGray = styled.span`
  color: #6f767e;
`;
export const TextBlue = styled.span`
  color: #2a85ff;
  text-transform: ${(val) => (val.capital ? "none" : "lowercase")};
`;
export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  margin-bottom: 16px;
`;
export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
export const ControlTitle = styled.div`
  margin-left: 12px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  ${flexGap({ row: "16px", column: "16px" })}
`;
export const ButtonCancel = styled.button`
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
export const ButtonBlue = styled.button`
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
