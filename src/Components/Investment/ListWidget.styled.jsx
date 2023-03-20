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
export const SwitchTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: 20px;
  @media screen and (max-width: 991px) {
    margin-bottom: 32px;
  }
`;
export const Title = styled.div`
  margin-right: 65px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
export const WidgetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexGap({ row: "24px", column: "24px" })}
`;
