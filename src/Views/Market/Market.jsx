import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getFund } from "../../Store/API/API";
import Empty from "../../Components/Market/Empty";
import ListWidget from "../../Components/Market/ListWidget";

const Market = () => {
  const {
    data: fund,
    isLoading: fundLoading,
    error: fundLoadError,
  } = useQuery(["fund"], () => getFund({ account: null }));

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
          <ListWidget funds={fund} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Market;
