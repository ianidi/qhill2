import styled from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

export const ButtonBack = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 16px;
  ${flexGap({ row: "8px", column: "8px" })}
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  background: #fcfcfc;
  border: 2px solid #efefef;
  border-radius: 8px;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  margin-bottom: 24px;
`;
