import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: #fcfcfc;
  width: 480px;
`;
export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 4px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
  margin-bottom: 24px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
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
  margin-bottom: 24px;
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
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
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
export const TumblerControlContainer = styled(ControlContainer)`
  margin-top: 32px;
  margin-bottom: 0;
`;
export const TumblerInfoImageContainer = styled(InfoImageContainer)`
  margin-right: 12px;
`;

export const SwapFieldsContainer = styled.div`
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 36px;
`;
export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;
export const ValueInput = styled.input`
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  background: #fff;
  border: none;
  outline: none;
  text-decoration: none !important;
  width: 100%;
`;
export const ValueLeft = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;
export const ValueRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
`;
export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Balance = styled.div`
  color: #888;
  font-size: 13px;
`;
export const Max = styled.div`
  margin-left: 12px;
  padding: 3px 8px;
  font-size: 12px;
  font-weight: 600;
  color: #006cff;
  cursor: pointer;
  text-transform: uppercase;
  background: #f5f9ff;
  border: 0;
  border-radius: 5px;
  transition: all 0.2s ease 0s;
  &:hover {
    background: #006cff;
    color: #fff;
  }
`;
export const SettingsImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
  cursor: pointer;

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #efefef;
  border-radius: 8px;
  margin-left: 6px;
  background: #fff;
  cursor: pointer; */
`;

export const ArrowContainer = styled.div`
  position: absolute;
  left: calc(50% - 14.5px);
  top: -14.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 29px;
  height: 29px;
  padding: 0px 6px;
  background: #f8f8f8;
  border: 0;
  border-radius: 50%;
  transition: all 0.15s ease 0s;
  &:hover {
    background: #f2f1f1;
  }
`;
export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: -0.01em;
  color: #888888;
`;
export const DividerSmall = styled.div`
  /* height: 1px; */
  width: 100%;
  background: #efefef;
  margin-top: 8px;
  margin-bottom: 8px;
`;
