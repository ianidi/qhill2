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
  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  @media screen and (max-width: 991px) {
    margin-bottom: 32px;
  }
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
export const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${flexGap({ row: "20px", column: "20px" })}
`;
export const Widget = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 400px;
  min-width: 300px;
  align-items: flex-start;
  flex: 1;
  padding: 32px;
  background: #ffffff;
  border: 2px solid #f4f4f4;
  border-radius: 12px;
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: none;
    min-width: auto;
    flex: 0 auto;
  }
`;
export const AUMWidget = styled(Widget)`
  background: #eaf6ef;
  border: 2px solid #eaf6ef;
`;
export const WidgetTitle = styled.div`
  margin-top: 16px;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #33383f;
`;
export const WidgetCurrency = styled.span`
  color: #6f767e;
`;
export const WidgetVal = styled.div`
  margin-top: 4px;
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: ${(item) =>
    item.negative ? "#d53a3a" : item.positive ? "#68CB84" : "#1a1d1f"};
`;

export const WidgetGrowthContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${flexGap({ row: "3px", column: "3px" })}
`;
export const WidgetGrowthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  background: #f4f4f4;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #6f767e;
`;
export const WidgetValue = styled.span`
  margin-left: 4px;
  color: ${(item) =>
    item.negative ? "#d53a3a" : item.positive ? "#83bf6e" : "#1a1d1f"};
`;
