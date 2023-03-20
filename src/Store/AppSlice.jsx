import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { utils } from "ethers";
// import { toast } from "react-toastify";
import { CONFIRMATION_COUNT } from "../Common/Constant";

import client from "./API/Ethereum";

const initialState = {
  theme: "light",
  // window.matchMedia &&
  // window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ? "dark"
  //   : "light",
  wallet: null,
  fundName: "",
  fundDescription: "",
  fundSubscribtionFee: "0.5",
  fundManagementFee: "1",
  fundPerformanceFee: "15",
  fundPeriod: null,
  fundIndent: null,
  fundHWM: false,
  fundCapExtended: false,
  fundCapToBtc: false,
  fundCapToUsdt: false,
  fundTradingPairs: [],
  createTxHash: null,
  investTxHash: null,
  withdrawTxHash: null,
  approveTxHash: null,
  createAgreement: false,
  investAgreement: false,
  withdrawAgreement: false,
  createLoading: false,
  investLoading: false,
  withdrawLoading: false,
  approveLoading: false,
  createSuccess: false,
  walletModalOpen: false,
  tokenListModalOpen: false,
  createModalOpen: false,
  investModalOpen: false,
  withdrawModalOpen: false,
  investAmount: "",
  withdrawAmount: "",
  tokenForFund: "",
  tokenForFundLoading: false,
  swapFrom: null,
  swapTo: null,
};

export const create = createAsyncThunk(
  "ethereum/create",
  async ({ library, account }, { getState, rejectWithValue, dispatch }) => {
    const {
      createAgreement,
      createLoading,
      fundName,
      fundSubscribtionFee,
      fundManagementFee,
      fundPerformanceFee,
      fundPeriod,
      fundIndent,
      fundHWM,
      fundCapExtended,
      fundCapToBtc,
      fundCapToUsdt,
      fundTradingPairs,
    } = getState().app;

    if (createLoading || !createAgreement) {
      rejectWithValue();
    }

    let tx;

    try {
      tx = await client.create({
        library,
        account,
        fundName,
        fundSubscribtionFee,
        fundManagementFee,
        fundPerformanceFee,
        fundPeriod,
        fundIndent,
        fundHWM,
        fundCapExtended,
        fundCapToBtc,
        fundCapToUsdt,
        fundTradingPairs,
      });
    } catch (e) {
      console.log(e);
    }

    dispatch(setCreateTxHash(tx.hash));

    await tx.wait();

    return library.waitForTransaction(tx.hash, CONFIRMATION_COUNT);
  }
);

export const invest = createAsyncThunk(
  "ethereum/invest",
  async (
    { library, fundId, amount },
    { getState, rejectWithValue, dispatch }
  ) => {
    const { investAgreement, investLoading } = getState().app;

    if (investLoading || !investAgreement) {
      rejectWithValue();
    }

    let tx;

    try {
      tx = await client.stake({
        library,
        fundId,
        amount,
      });
    } catch (e) {
      console.log(e);
    }

    dispatch(setInvestTxHash(tx.hash));

    await tx.wait();

    return library.waitForTransaction(tx.hash, CONFIRMATION_COUNT);
  }
);

export const withdraw = createAsyncThunk(
  "ethereum/withdraw",
  async (
    { library, fundId, amount },
    { getState, rejectWithValue, dispatch }
  ) => {
    const { withdrawAgreement, withdrawLoading } = getState().app;

    if (withdrawLoading || !withdrawAgreement) {
      rejectWithValue();
    }

    let tx;

    try {
      tx = await client.unstake({
        library,
        fundId,
        amount,
      });
    } catch (e) {
      console.log(e);
    }

    dispatch(setWithdrawTxHash(tx.hash));

    await tx.wait();

    return library.waitForTransaction(tx.hash, CONFIRMATION_COUNT);
  }
);

export const approve = createAsyncThunk(
  "ethereum/approve",
  async (
    { library, token, amount },
    { getState, rejectWithValue, dispatch }
  ) => {
    const { approveLoading } = getState().app;

    if (approveLoading) {
      rejectWithValue();
    }

    let tx;

    try {
      tx = await client.approve({
        library,
        token,
        amount,
      });
    } catch (e) {
      console.log(e);
    }

    dispatch(setApproveTxHash(tx.hash));

    await tx.wait();

    return library.waitForTransaction(tx.hash, CONFIRMATION_COUNT);
  }
);

export const balanceOf = createAsyncThunk(
  "ethereum/balanceOf",
  async ({ library, account, token }) => {
    return await client.balanceOf({
      library,
      account,
      token,
    });
  }
);

export const tokenForFund = createAsyncThunk(
  "ethereum/tokenForFund",
  async ({ library, fundId }) => {
    return await client.tokenForFund({
      library,
      fundId,
    });
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
    setFundName: (state, action) => {
      state.fundName = action.payload;
    },
    setFundDescription: (state, action) => {
      state.fundDescription = action.payload;
    },
    setFundSubscribtionFee: (state, action) => {
      state.fundSubscribtionFee = action.payload;
    },
    setFundManagementFee: (state, action) => {
      state.fundManagementFee = action.payload;
    },
    setFundPerformanceFee: (state, action) => {
      state.fundPerformanceFee = action.payload;
    },
    setFundPeriod: (state, action) => {
      state.fundPeriod = action.payload;
    },
    setFundIndent: (state, action) => {
      state.fundIndent = action.payload;
    },
    setFundHWM: (state, action) => {
      state.fundHWM = action.payload;
    },
    setFundCapExtended: (state, action) => {
      state.fundCapExtended = action.payload;
    },
    setFundCapToBtc: (state, action) => {
      state.fundCapToBtc = action.payload;
    },
    setFundCapToUsdt: (state, action) => {
      state.fundCapToUsdt = action.payload;
    },
    setFundTradingPairs: (state, action) => {
      state.fundTradingPairs = action.payload;
    },
    setCreateTxHash: (state, action) => {
      state.createTxHash = action.payload;
    },
    setInvestTxHash: (state, action) => {
      state.investTxHash = action.payload;
    },
    setWithdrawTxHash: (state, action) => {
      state.withdrawTxHash = action.payload;
    },
    setApproveTxHash: (state, action) => {
      state.approveTxHash = action.payload;
    },
    setCreateAgreement: (state, action) => {
      state.createAgreement = action.payload;
    },
    setInvestAgreement: (state, action) => {
      state.investAgreement = action.payload;
    },
    setWithdrawAgreement: (state, action) => {
      state.withdrawAgreement = action.payload;
    },
    setCreateLoading: (state, action) => {
      state.createLoading = action.payload;
    },
    setInvestLoading: (state, action) => {
      state.investLoading = action.payload;
    },
    setWithdrawLoading: (state, action) => {
      state.withdrawLoading = action.payload;
    },
    setApproveLoading: (state, action) => {
      state.approveLoading = action.payload;
    },
    setTokenForFundLoading: (state, action) => {
      state.tokenForFundLoading = action.payload;
    },
    setCreateSuccess: (state, action) => {
      state.createSuccess = action.payload;
    },
    setInvestSuccess: (state, action) => {
      state.investSuccess = action.payload;
    },
    setWithdrawSuccess: (state, action) => {
      state.withdrawSuccess = action.payload;
    },
    setWalletModalOpen: (state, action) => {
      state.walletModalOpen = action.payload;
    },
    setTokenListModalOpen: (state, action) => {
      state.tokenListModalOpen = action.payload;
    },
    setCreateModalOpen: (state, action) => {
      state.createAgreement = false;
      state.createSuccess = false;
      state.createModalOpen = action.payload;
    },
    setInvestModalOpen: (state, action) => {
      state.investAgreement = false;
      state.investModalOpen = action.payload;
      state.investSuccess = false;
    },
    setWithdrawModalOpen: (state, action) => {
      state.withdrawAgreement = false;
      state.withdrawModalOpen = action.payload;
      state.withdrawSuccess = false;
    },
    setInvestAmount: (state, action) => {
      state.investAmount = action.payload;
    },
    setWithdrawAmount: (state, action) => {
      state.withdrawAmount = action.payload;
    },
    setSwapFrom: (state, action) => {
      state.swapFrom = action.payload;
    },
    setSwapTo: (state, action) => {
      state.swapTo = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(create.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(create.fulfilled, (state) => {
        state.createTxHash = null;
        state.createAgreement = false;
        state.createLoading = false;
        state.createSuccess = true;
        state.fundName = "";
        state.fundDescription = "";
        state.fundSubscribtionFee = "0.5";
        state.fundManagementFee = "1";
        state.fundPerformanceFee = "15";
        state.fundPeriod = null;
        state.fundIndent = null;
        state.fundHWM = false;
        state.fundCapExtended = false;
        state.fundCapToBtc = false;
        state.fundCapToUsdt = false;
        state.fundTradingPairs = [];
      })
      .addCase(create.rejected, (state) => {
        state.createLoading = false;
        state.createTxHash = null;
      })
      .addCase(invest.pending, (state) => {
        state.investLoading = true;
      })
      .addCase(invest.fulfilled, (state) => {
        state.investAgreement = false;
        state.investLoading = false;
        state.investTxHash = null;
        state.investSuccess = true;
      })
      .addCase(invest.rejected, (state) => {
        state.investLoading = false;
        state.investTxHash = null;
      })
      .addCase(withdraw.pending, (state) => {
        state.withdrawLoading = true;
      })
      .addCase(withdraw.fulfilled, (state) => {
        state.withdrawAgreement = false;
        state.withdrawLoading = false;
        state.withdrawTxHash = null;
        state.withdrawSuccess = true;
      })
      .addCase(withdraw.rejected, (state) => {
        state.withdrawLoading = false;
        state.withdrawTxHash = null;
      })
      .addCase(approve.pending, (state) => {
        state.approveLoading = true;
      })
      .addCase(approve.fulfilled, (state) => {
        state.approveLoading = false;
        state.approveTxHash = null;
      })
      .addCase(approve.rejected, (state) => {
        state.approveLoading = false;
        state.approveTxHash = null;
      })
      .addCase(tokenForFund.pending, (state) => {
        state.tokenForFundLoading = true;
      })
      .addCase(tokenForFund.fulfilled, (state, action) => {
        state.tokenForFundLoading = false;
        state.tokenForFund = action.payload;
      })
      .addCase(tokenForFund.rejected, (state) => {
        state.tokenForFundLoading = false;
      });
  },
});

export const {
  setTheme,
  setWallet,
  setFundName,
  setFundDescription,
  setFundSubscribtionFee,
  setFundManagementFee,
  setFundPerformanceFee,
  setFundPeriod,
  setFundIndent,
  setFundHWM,
  setFundCapExtended,
  setFundCapToBtc,
  setFundCapToUsdt,
  setFundTradingPairs,
  setCreateTxHash,
  setInvestTxHash,
  setWithdrawTxHash,
  setApproveTxHash,
  setCreateAgreement,
  setInvestAgreement,
  setWithdrawAgreement,
  setCreateLoading,
  setInvestLoading,
  setWithdrawLoading,
  setCreateSuccess,
  setInvestSuccess,
  setWithdrawSuccess,
  setWalletModalOpen,
  setTokenListModalOpen,
  setCreateModalOpen,
  setInvestModalOpen,
  setWithdrawModalOpen,
  setInvestAmount,
  setWithdrawAmount,
  setSwapFrom,
  setSwapTo,
} = appSlice.actions;

export const selectTheme = (state) => state.app.theme;
export const selectWallet = (state) => state.app.wallet;
export const selectFundName = (state) => state.app.fundName;
export const selectFundDescription = (state) => state.app.fundDescription;
export const selectFundSubscribtionFee = (state) =>
  state.app.fundSubscribtionFee;
export const selectFundManagementFee = (state) => state.app.fundManagementFee;
export const selectFundPerformanceFee = (state) => state.app.fundPerformanceFee;
export const selectFundPeriod = (state) => state.app.fundPeriod;
export const selectFundIndent = (state) => state.app.fundIndent;
export const selectFundHWM = (state) => state.app.fundHWM;
export const selectFundCapExtended = (state) => state.app.fundCapExtended;
export const selectFundCapToBtc = (state) => state.app.fundCapToBtc;
export const selectFundCapToUsdt = (state) => state.app.fundCapToUsdt;
export const selectFundTradingPairs = (state) => state.app.fundTradingPairs;
export const selectCreateAgreement = (state) => state.app.createAgreement;
export const selectInvestAgreement = (state) => state.app.investAgreement;
export const selectWithdrawAgreement = (state) => state.app.withdrawAgreement;
export const selectCreateLoading = (state) => state.app.createLoading;
export const selectInvestLoading = (state) => state.app.investLoading;
export const selectWithdrawLoading = (state) => state.app.withdrawLoading;
export const selectCreateSuccess = (state) => state.app.createSuccess;
export const selectInvestSuccess = (state) => state.app.investSuccess;
export const selectWithdrawSuccess = (state) => state.app.withdrawSuccess;
export const selectWalletModalOpen = (state) => state.app.walletModalOpen;
export const selectTokenListModalOpen = (state) => state.app.tokenListModalOpen;
export const selectCreateModalOpen = (state) => state.app.createModalOpen;
export const selectInvestModalOpen = (state) => state.app.investModalOpen;
export const selectWithdrawModalOpen = (state) => state.app.withdrawModalOpen;
export const selectInvestAmount = (state) => state.app.investAmount;
export const selectWithdrawAmount = (state) => state.app.withdrawAmount;
export const selectApproveLoading = (state) => state.app.approveLoading;
export const selectSwapFrom = (state) => state.app.swapFrom;
export const selectSwapTo = (state) => state.app.swapTo;

export default appSlice.reducer;
