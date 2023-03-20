import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const CloseContainer = styled.div`
  cursor: pointer;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: 100%;
  max-width: 800px;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #1a1d1f;
  margin-top: 20px;
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
export const ButtonBlue = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px 20px;
  ${flexGap({ row: "8px", column: "8px" })};
  background: #2a85ff;
  border-radius: 12px;
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
