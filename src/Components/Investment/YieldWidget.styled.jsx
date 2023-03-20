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
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #efefef;
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
`;
export const CaptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #9a9fa5;
`;
