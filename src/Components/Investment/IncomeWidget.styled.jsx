import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: #fcfcfc;
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
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
  background: #68cb84;
  border-radius: 4px;
`;
export const Title = styled.div`
  padding-right: 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
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
  width: calc(7.14% - 8px);
  padding-left: 8px;
  padding-right: 8px;
  &:first-child {
    text-align: initial;
    justify-content: flex-start;
  }
  color: ${(item) =>
    item.negative ? "#FF6A55" : item.positive ? "#68CB84" : "inherit"};
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
export const TextTotal = styled.span`
  color: #1a1d1f;
`;
export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.01em;
  background: ${(item) =>
    item.negative ? "#FF6A55" : item.positive ? "#68CB84" : "#f4f4f4"};
  color: ${(item) =>
    item.negative ? "#fff" : item.positive ? "#1A1D1F" : "#1a1d1f"};
`;
