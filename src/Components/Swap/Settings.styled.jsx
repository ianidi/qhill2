import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 400px;
  background: #fcfcfc;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
  margin-bottom: 16px;
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
export const Label = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #6f767e;
  margin-bottom: 12px;
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
export const SlippageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${flexGap({ row: "8px", column: "8px" })}
`;
export const AutoButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 40px;
  padding: 3px 18px;
  font-size: 14px;
  font-weight: 600;
  color: #006cff;
  cursor: pointer;
  background: #f5f9ff;
  border: 0;
  border-radius: 5px;
  transition: all 0.2s ease 0s;
  &:hover {
    background: #006cff;
    color: #fff;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
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
