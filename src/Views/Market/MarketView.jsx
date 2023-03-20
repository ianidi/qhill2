import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { useQuery } from "@tanstack/react-query";

import { getFundById } from "../../Store/API/API";

import HeadWidget from "../../Components/Market/HeadWidget";
import YieldWidget from "../../Components/Market/YieldWidget";
import IncomeWidget from "../../Components/Market/IncomeWidget";
import DescriptionWidget from "../../Components/Market/DescriptionWidget";
import InvestModal from "../../Components/Modal/InvestModal";
import WithdrawModal from "../../Components/Modal/WithdrawModal";
import { ButtonBack } from "./MarketView.styled";
import { ReactComponent as BackImage } from "../../Asset/Images/back.svg";

const Market = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const { active } = useWeb3React();

  const {
    data: fund,
    isLoading: fundLoading,
    error: fundLoadError,
  } = useQuery(["fundById"], () => getFundById({ id }));

  if (fundLoading) {
    return "Loading...";
  }

  if (fundLoadError) {
    return "An error has occurred: " + JSON.stringify(fundLoadError);
  }

  const navigateBack = () => {
    if (location.pathname.split("/")[1] === "fund") {
      navigate(`/fund`);
    } else {
      navigate(`/market`);
    }
  };

  return (
    <React.Fragment>
      <ButtonBack onClick={navigateBack}>
        <BackImage />
        <div>Back to DeFunds Market</div>
      </ButtonBack>
      <HeadWidget {...fund} />
      <YieldWidget {...fund} />
      {/* <IncomeWidget {...fund} /> */}
      <DescriptionWidget {...fund} />
      {active && (
        <React.Fragment>
          <InvestModal />
          <WithdrawModal />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Market;
