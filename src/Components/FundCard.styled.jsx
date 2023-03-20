import styled from "styled-components";
import * as theme from "../Common/Theme";
import { flexGap } from "../Common/FlexGap";

export const Container = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  max-width: calc(50% - 12px);
  width: 100%;
  align-items: flex-start;
  background: #ffffff;
  border: 2px solid #f4f4f4;
  border-radius: 12px;
  @media screen and (max-width: 1400px) {
    width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: none;
    min-width: auto;
    flex: 0 auto;
  }
`;
export const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
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
  width: 64px;
  height: 64px;
  margin-right: 16px;
  cursor: pointer;
`;
export const LogoWrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  width: 64px;
  height: 64px;
`;
export const HeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const HeadTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeadTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
  cursor: pointer;
`;
export const Performance = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4px 8px;
  border-radius: 6px;
  background: ${(item) =>
    item.color === "red"
      ? "#FAC8C8"
      : item.color === "yellow"
      ? "#FBDEB3"
      : "#B5E4CA"};
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
`;
export const HeadMemberContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #9a9fa5;
`;
export const MemberName = styled.div`
  cursor: pointer;
`;
export const BlockiesContainer = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  cursor: pointer;
`;
export const Separator = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  width: 2px;
  height: 8px;
  background: #efefef;
  border-radius: 2px;
`;
export const MemberWallet = styled.div`
  display: flex;
  align-items: center;
`;
export const MemberWalletAddress = styled.div`
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CopyContainer = styled.div`
  margin-left: 8px;
  cursor: pointer;
`;
export const NetworkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
  ${flexGap({ row: "8px", column: "8px" })}
`;
export const NetworkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  background: #f4f4f4;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  ${flexGap({ row: "4px", column: "4px" })}
`;
export const TableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  ${flexGap({ row: "16px", column: "16px" })}
`;
export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 16px);
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #6f767e;
`;
export const TableColumnLg = styled(TableColumn)`
  width: calc(100% - 16px);
`;
export const TableTextPurple = styled.span`
  color: #9d5eed;
`;
export const TableTextBlack = styled.span`
  color: #1a1d1f;
`;
export const TableTextGreen = styled.span`
  color: #68cb84;
`;
export const TableRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 6px;
`;
export const TableClockRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;
export const Clock = styled.div`
  display: flex;
  color: #1a1d1f;
  margin-top: 6px;
  ${flexGap({ row: "4px", column: "4px" })}
`;
export const ClockItem = styled.div`
  padding: 0px 7px;
  background: #efefef;
  border-radius: 6px;
`;
export const ChartContainer = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  overflow: visible;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  ${flexGap({ row: "16px", column: "16px" })}
`;
export const ButtonDetails = styled.button`
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
export const ButtonDetailsFullWidth = styled(ButtonDetails)`
  width: 100%;
`;
export const ButtonTrade = styled.button`
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
export const ButtonInvest = styled(ButtonTrade)`
  border: 2px solid #2a85ff;
  color: #2a85ff;
`;
export const ButtonWithdraw = styled(ButtonTrade)`
  border: 2px solid #68cb84;
  color: #68cb84;
`;
export const WidgetGrowthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin-left: 4px;
  border-radius: 4px;
  background: ${(val) => (val.negative ? "#d53a3a40" : "#83bf6e40")};
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: ${(val) => (val.negative ? "#d53a3a" : "#83bf6e")};
`;
export const WidgetValue = styled.span`
  margin-left: 4px;
`;
