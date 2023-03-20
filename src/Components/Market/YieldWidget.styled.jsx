import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexGap({ row: "8px", column: "8px" })}
  margin-bottom: 8px;
`;
export const ChartWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(67% - 4px);
  padding: 24px;
  border-radius: 8px;
  background: #fcfcfc;
  @media screen and (max-width: 1320px) {
    width: 100%;
  }
`;
export const ChartContainer = styled.div`
  display: block;
  width: 100%;
  overflow: visible;
`;
export const ROIContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33% - 4px);
  padding: 24px;
  border-radius: 8px;
  background: #fcfcfc;
  @media screen and (max-width: 1320px) {
    order: -1;
    width: 100%;
  }
`;
export const ChartHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
  display: flex;
  align-items: center;
  padding-right: 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
export const SwitchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
export const SwitchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 8px;
  background: ${(item) => (item.active ? "#efefef" : "transparent")};
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  cursor: pointer;
  user-select: none;
  transition: all 300ms;
  &:hover {
    background: #e4e4e4;
  }
`;
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #efefef;
  margin-top: 12px;
  margin-bottom: 12px;
`;
export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 8px; */
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
`;
export const GrayText = styled.span`
  color: #6f767e;
`;
export const GreenText = styled.span`
  color: #68cb84;
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
export const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 24px;
`;
export const Clock = styled.div`
  display: flex;
  color: #1a1d1f;
  margin-top: 6px;
  ${flexGap({ row: "4px", column: "4px" })}
`;
export const ClockNoMarginTop = styled(Clock)`
  margin-top: 0;
`;
export const ClockTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #6f767e;
`;
export const ClockItem = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  padding: 0px 7px;
  background: #efefef;
  border-radius: 6px;
`;

export const ButtonTrade = styled.button`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
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
export const ButtonInvest = styled(ButtonTrade)`
  border: 2px solid #2a85ff;
  color: #2a85ff;
`;
export const ButtonWithdraw = styled(ButtonTrade)`
  border: 2px solid #68cb84;
  color: #68cb84;
`;
export const CheckContainer = styled.div`
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
export const FigureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
