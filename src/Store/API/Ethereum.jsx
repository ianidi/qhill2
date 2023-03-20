import { BigNumber, Contract, utils } from "ethers";
import { abi } from "../../Common/Constant";

const create = async ({
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
}) => {
  const abi1 = [
    "function newFund(tuple(string fundName, uint lockUpPeriod, uint subscriptionFee, uint managementFeePeriod, uint managementFee, uint performanceFeePeriod, uint performanceFee, uint adminFee, uint minStakingAmount, uint minWithdrawAmount, uint investPeriod) fundInfo)",
  ]; //TODO:
  const iface = new utils.Interface(abi);
  const contract = new Contract(
    process.env.REACT_APP_MAIN_CONTRACT_ADDRESS,
    iface,
    library.getSigner()
  );
  // BigNumber.from("0"),
  const struct = [
    fundName,
    0,
    utils.parseUnits(fundSubscribtionFee),
    0,
    utils.parseUnits(fundManagementFee),
    0,
    utils.parseUnits(fundPerformanceFee),
    0,
    0,
    0,
    60,
  ];
  const estimateGas = await contract.estimateGas.newFund(struct);

  return contract.newFund(struct, {
    gasLimit: estimateGas.mul(5),
  });
};

const balanceOf = async ({ library, account, token }) => {
  const abi = ["function balanceOf(address) view returns (uint256)"];
  const iface = new utils.Interface(abi);
  const contract = new Contract(token, iface, library.getSigner());

  const balance = await contract.balanceOf(account);

  return utils.formatEther(balance);
};

const tokenForFund = async ({ library, fundId }) => {
  const abi = ["function tokenForFund(uint fundId) view returns (address)"];
  const iface = new utils.Interface(abi);
  const contract = new Contract(
    process.env.REACT_APP_INTERACTION_CONTRACT_ADDRESS,
    iface,
    library.getSigner()
  );

  const address = await contract.tokenForFund(fundId);

  return address;
};

const tokenBalance = async ({ library, account, fundId }) => {
  const abi = ["function tokenForFund(uint fundId) view returns (address)"];
  const iface = new utils.Interface(abi);
  const contract = new Contract(
    process.env.REACT_APP_INTERACTION_CONTRACT_ADDRESS,
    iface,
    library.getSigner()
  );

  const token = await contract.tokenForFund(fundId);

  const abi_balance = ["function balanceOf(address) view returns (uint256)"];
  const iface_balance = new utils.Interface(abi_balance);
  const contract_balance = new Contract(
    token,
    iface_balance,
    library.getSigner()
  );

  const balance = await contract_balance.balanceOf(account);

  const abi_allowance = [
    "function allowance(address owner, address spender) view returns (uint256)",
  ];
  const iface_allowance = new utils.Interface(abi_allowance);
  const contract_allowance = new Contract(
    token,
    iface_allowance,
    library.getSigner()
  );
  const allowance = await contract_allowance.allowance(
    account,
    process.env.REACT_APP_INTERACTION_CONTRACT_ADDRESS
  );

  return {
    token,
    balance: utils.formatEther(balance),
    allowance: utils.formatEther(allowance),
  };
};

const allowance = async ({ library, account, token }) => {
  const abi = [
    "function allowance(address owner, address spender) view returns (uint256)",
  ];
  const iface = new utils.Interface(abi);
  const contract = new Contract(token, iface, library.getSigner());
  const allowance = await contract.allowance(
    account,
    process.env.REACT_APP_INTERACTION_CONTRACT_ADDRESS
  );

  return utils.formatEther(allowance);
};

const approve = async ({ library, token, amount }) => {
  const abi = ["function approve(address, uint256)"];
  const iface = new utils.Interface(abi);
  const contract = new Contract(token, iface, library.getSigner());
  return contract.approve(
    process.env.REACT_APP_INTERACTION_CONTRACT_ADDRESS,
    utils.parseUnits(amount)
  );
};

const stake = async ({ library, fundId, amount }) => {
  const abi = ["function stake(uint fundId, uint amount)"];
  const iface = new utils.Interface(abi);
  const contract = new Contract(
    process.env.REACT_APP_INTERACTION_CONTRACT_ADDRESS,
    iface,
    library.getSigner()
  );

  const estimateGas = await contract.estimateGas.stake(
    fundId,
    utils.parseUnits(amount)
  );

  return contract.stake(fundId, utils.parseUnits(amount), {
    gasLimit: estimateGas.mul(5),
  });
};

const unstake = async ({ library, fundId, amount }) => {
  const abi = ["function unstake(uint fundId, uint amount)"];
  const iface = new utils.Interface(abi);
  const contract = new Contract(
    process.env.REACT_APP_INTERACTION_CONTRACT_ADDRESS,
    iface,
    library.getSigner()
  );

  const estimateGas = await contract.estimateGas.unstake(
    fundId,
    utils.parseUnits(amount)
  );

  return contract.unstake(fundId, utils.parseUnits(amount), {
    gasLimit: estimateGas.mul(5),
  });
};

const newFundId = async ({ library }) => {
  const abi = ["function newFundId() view returns (uint256)"];
  const iface = new utils.Interface(abi);
  const contract = new Contract(
    process.env.REACT_APP_MAIN_CONTRACT_ADDRESS,
    iface,
    library.getSigner()
  );
  const res = await contract.newFundId();

  return res;
};
const serviceFees = async ({ library }) => {
  const abi = [
    "function serviceFees() view returns (uint256 sf, uint256 pf, uint256 mf)",
  ];
  const iface = new utils.Interface(abi);
  const contract = new Contract(
    process.env.REACT_APP_FEES_CONTRACT_ADDRESS,
    iface,
    library.getSigner()
  );
  const res = await contract.serviceFees();

  return {
    sf: utils.formatEther(res.sf),
    pf: utils.formatEther(res.pf),
    mf: utils.formatEther(res.mf),
  };
};
const fundFees = async ({ library, fundId }) => {
  const abi = [
    "function fees(uint fundId) view returns (uint256 sf, uint256 pf, uint256 mf)",
  ];
  const iface = new utils.Interface(abi);
  const contract = new Contract(
    process.env.REACT_APP_FEES_CONTRACT_ADDRESS,
    iface,
    library.getSigner()
  );
  const res = await contract.fees(fundId);

  return {
    sf: utils.formatEther(res.sf),
    pf: utils.formatEther(res.pf),
    mf: utils.formatEther(res.mf),
  };
};

const client = {
  create,
  balanceOf,
  tokenForFund,
  tokenBalance,
  allowance,
  approve,
  stake,
  unstake,
  newFundId,
  serviceFees,
  fundFees,
};

export default client;
