import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const ButtonBack = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 16px;
  ${flexGap({ row: "8px", column: "8px" })}
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  background: #fcfcfc;
  border: 2px solid #efefef;
  border-radius: 8px;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  margin-bottom: 24px;
`;
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
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;
export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 148px;
  height: 148px;
  margin-right: 30px;
`;
export const LogoWrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  width: 148px;
  height: 148px;
`;
export const HeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const HeadTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;
export const HeadTitle = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.03em;
  color: #1a1d1f;
`;
