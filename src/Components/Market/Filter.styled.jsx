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
export const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #6f767e;
`;
export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  cursor: pointer;
  user-select: none;
  margin-top: 12px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
  ${flexGap({ row: "16px", column: "16px" })}
`;
export const ButtonReset = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
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
  &:hover {
    /*background: #9d5eed20;*/
  }
`;

export const ButtonApply = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  border: 2px solid #9d5eed;
  border-radius: 12px;
  background: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #9d5eed;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  &:hover {
    /*background: #9d5eed20;*/
  }
`;
