import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useWeb3React } from "@web3-react/core";

import { getFund } from "../../Store/API/API";
import Empty from "../../Components/Fund/Empty";
import TotalWidget from "../../Components/Fund/TotalWidget";
import ListWidget from "../../Components/Fund/ListWidget";

const Fund = () => {
  const { account } = useWeb3React();

  const {
    data: fund,
    isLoading: fundLoading,
    error: fundLoadError,
  } = useQuery(["fund"], () => getFund({ account }));

  if (fundLoading) {
    return "Loading...";
  }

  if (fundLoadError) {
    return "An error has occurred: " + JSON.stringify(fundLoadError);
  }

  return (
    <React.Fragment>
      {fund?.lenght === 0 ? (
        <Empty />
      ) : (
        <React.Fragment>
          <TotalWidget />
          <ListWidget funds={fund} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Fund;
