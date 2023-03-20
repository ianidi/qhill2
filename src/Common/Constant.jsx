export const CONFIRMATION_COUNT = 3;

export const restrictions = {
  fundSubscribtionFee: { min: 0.5, max: 90 },
  fundManagementFee: { min: 0.5, max: 90 },
  fundPerformanceFee: { min: 0.5, max: 90 },
};

export const options = {
  i18n: [
    { id: "en", label: "EN" },
    { id: "ru", label: "RU" },
  ],
  fundPeriod: [
    { id: 1, label: "Weekly" },
    { id: 2, label: "Monthly" },
    { id: 3, label: "Quarterly" },
  ],
  fundIndent: [
    { id: 1, label: "1 day" },
    { id: 2, label: "2 days" },
    { id: 3, label: "3 days" },
    { id: 4, label: "4 days" },
    { id: 5, label: "5 days" },
    { id: 6, label: "6 days" },
    { id: 7, label: "7 days" },
  ],
  swap: [
    { id: 1, label: "BTC" },
    { id: 2, label: "USDT" },
  ],
};

export const networks = [
  { id: 1, label: "Mainnet" },
  { id: 3, label: "Ropsten" },
  { id: 4, label: "Rinkeby" },
  { id: 42, label: "Kovan" },
  { id: 69, label: "Optimism Kovan" },
];

export const networkParams = {
  "0x45": {
    chainId: "0x45",
    rpcUrls: [
      process.env.REACT_APP_INFURA_KEY
        ? `https://optimism-kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
        : "",
      "https://kovan.optimism.io",
    ].filter((url) => url !== ""),
    chainName: "Optimism Kovan",
    nativeCurrency: { name: "KOR", decimals: 18, symbol: "KOR" },
    blockExplorerUrls: ["https://kovan-optimistic.etherscan.io/"],
    iconUrls: [
      "https://assets-global.website-files.com/611dbb3c82ba72fbc285d4e2/611fd32ef63b79b5f8568d58_OPTIMISM-logo.svg",
    ],
  },
};

export const abi = `[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "newFees",
        "type": "address"
      }
    ],
    "name": "FeesChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "manager",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "id",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sf",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "pf",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "mf",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "period",
        "type": "uint256"
      }
    ],
    "name": "FundCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "fundName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "lockUpPeriod",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "subscriptionFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "managementFeePeriod",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "managementFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "performanceFeePeriod",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "performanceFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adminFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minStakingAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minWithdrawAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "investPeriod",
            "type": "uint256"
          }
        ],
        "internalType": "struct IFundFactory.FundInfo",
        "name": "fundInfo",
        "type": "tuple"
      }
    ],
    "name": "newFund",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]`;
