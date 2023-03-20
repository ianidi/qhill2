import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #272b30;
  margin-bottom: 20px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: #fcfcfc;
`;
export const SectionTitle = styled.div`
  display: flex;
  padding-right: 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
  margin-bottom: 36px;
`;
export const Dot = styled.div`
  margin-right: 16px;
  width: 16px;
  height: 32px;
  background: #2a85ff;
  border-radius: 4px;
`;
export const AvatarUploadContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const AvatarImageContainer = styled.div`
  margin-right: 32px;
`;
export const ButtonBlue = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 200px;
  padding: 12px 20px;
  border: 2px solid #2a85ff;
  border-radius: 12px;
  ${flexGap({ row: "12px", column: "12px" })}
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
export const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #33383f;
  margin-top: 34px;
  margin-bottom: 14px;
`;
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #efefef;
  margin-top: 48px;
  margin-bottom: 48px;
`;
export const Description = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #6f767e;
  margin-bottom: 48px;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  background: #f4f4f4;
  width: 100%;
  max-width: 360px;
  user-select: none;
`;
export const Input = styled.input`
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
export const InfoImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: 2px;
  cursor: pointer;
  user-select: none;
`;
export const TooltipLabelContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #33383f;
  margin-top: 18px;
  margin-bottom: 18px;
`;
export const InputLabelContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #6f767e;
  margin-bottom: 12px;
`;
export const CommissionInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexGap({ row: "32px", column: "8px" })}
  @media screen and (max-width: 1320px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
export const CommissionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 16px);
  @media screen and (max-width: 1320px) {
    width: 50%;
  }
`;
export const InputCommissionContainer = styled.div`
  display: flex;
  align-items: center;
  /* padding: 12px; */
  border-radius: 12px;
  border: 2px solid #efefef;
  background: #fff;
  width: 100%;
  user-select: none;
  overflow: hidden;
`;
export const InputCommission = styled.input`
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  background: #fff;
  border: none;
  outline: none;
  text-decoration: none !important;
  width: 100%;
`;
export const InputBefore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #f4f4f4;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #6f767e;
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  background: #fff;
  padding: 12px;
`;
export const TumblerControlContainer = styled(ControlContainer)`
  margin-top: 32px;
  margin-bottom: 0;
`;
export const TumblerInfoImageContainer = styled(InfoImageContainer)`
  margin-right: 12px;
`;
