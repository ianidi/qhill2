import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useWeb3React } from "@web3-react/core";

import { getFund } from "../../Store/API/API";

import TotalWidget from "../../Components/Investment/TotalWidget";
import YieldWidget from "../../Components/Investment/YieldWidget";
import IncomeWidget from "../../Components/Investment/IncomeWidget";
import ListWidget from "../../Components/Investment/ListWidget";
import Empty from "../../Components/Investment/Empty";

const Investment = () => {
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
          <YieldWidget
            chartData={[
              { dt: "2021-08-18T19:30:58.694843276Z", rate: 1000 },
              { dt: "2022-08-18T19:30:58.694846602Z", rate: 1242 },
              { dt: "2023-08-18T19:30:58.694846792Z", rate: 1653 },
            ]}
          />
          {/* <IncomeWidget /> */}
          <ListWidget funds={fund} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Investment;
