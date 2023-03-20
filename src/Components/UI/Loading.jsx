import React from "react";
import {
  SpinnerContainer,
  Spinner,
  SpinnerElement0,
  SpinnerElement1,
  SpinnerElement2,
  SpinnerElement3,
} from "./Loading.styled";

const Loading = ({ loading = true, color = "#fff", size = 24 }) => {
  if (loading !== true) {
    return null;
  }

  return (
    <SpinnerContainer size={size}>
      <Spinner size={size}>
        <SpinnerElement0 size={size} color={color} />
        <SpinnerElement1 size={size} color={color} />
        <SpinnerElement2 size={size} color={color} />
        <SpinnerElement3 size={size} color={color} />
      </Spinner>
    </SpinnerContainer>
  );
};

export default Loading;
