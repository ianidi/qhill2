import styled from "styled-components";
import * as theme from "../../Common/Theme";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const BlockiesContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;
  cursor: pointer;
`;
export const ConnectContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 320px;
  /* min-height: 48px; */
  border: 2px solid #efefef;
  padding: 8px;
  margin-right: 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    min-width: 200px;
  }
`;
export const ConnectImageContainer = styled.div`
  margin-right: 8px;
  width: 34px;
  height: 34px;
`;
