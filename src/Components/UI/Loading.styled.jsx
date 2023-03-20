import styled, { keyframes } from "styled-components";
import * as theme from "../../Common/Theme";
import { flexGap } from "../../Common/FlexGap";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(val) => `${val.size}px`};
  height: ${(val) => `${val.size}px`};
  margin-right: 6px;
`;
export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${(val) => `${val.size}px`};
  height: ${(val) => `${val.size}px`};
`;
export const SpinnerElement0 = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${(val) => `${val.size - 8}px`};
  height: ${(val) => `${val.size - 8}px`};
  border: ${(val) => `2px solid ${val.color}`};
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${(val) => `${val.color} transparent transparent transparent`};
`;
export const SpinnerElement1 = styled(SpinnerElement0)`
  animation-delay: -0.45s;
`;
export const SpinnerElement2 = styled(SpinnerElement0)`
  animation-delay: -0.3s;
`;
export const SpinnerElement3 = styled(SpinnerElement0)`
  animation-delay: -0.15s;
`;
