import { base, mainnet } from "viem/chains";

export const baseTokens = [
  // send
  {
    chainId: mainnet.id,
    address: "0x3f14920c99beb920afa163031c4e47a3e03b3e4a",
    name: "Send Token",
    symbol: "SEND",
    decimals: 0,
    logoURI: "https://basescan.org/token/images/sendittoken2_32.png",
    standardBridgeAddresses: {
      [base.id]: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
    },
    opTokenId: "send",
    coinGeckoId: "send-token",
  },
  {
    chainId: base.id,
    address: "0x3f14920c99BEB920Afa163031c4e47a3e03B3e4A",
    name: "Send Token",
    symbol: "SEND",
    decimals: 0,
    logoURI: "https://basescan.org/token/images/sendittoken2_32.png",
    standardBridgeAddresses: {
      [mainnet.id]: "0x4200000000000000000000000000000000000010",
    },
    opTokenId: "send",
    coinGeckoId: "send-token",
  },

  // subquery
  {
    chainId: mainnet.id,
    address: "0x09395a2A58DB45db0da254c7EAa5AC469D8bDc85",
    name: "SubQuery Network",
    symbol: "SQT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23359/standard/photo_2021-07-14_11-31-12.jpg",
    standardBridgeAddresses: {
      [base.id]: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
    },
    opTokenId: "custom-sqt",
    coinGeckoId: "subquery-network",
  },
  {
    chainId: base.id,
    address: "0x858c50C3AF1913b0E849aFDB74617388a1a5340d",
    name: "SubQuery Network",
    symbol: "SQT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/23359/standard/photo_2021-07-14_11-31-12.jpg",
    standardBridgeAddresses: {
      [mainnet.id]: "0x4200000000000000000000000000000000000010",
    },
    opTokenId: "custom-sqt",
    coinGeckoId: "subquery-network",
  },

  // EPOCH
  {
    chainId: mainnet.id,
    address: "0x97D0CfEB4FdE54B430307c9482d6f79C761Fe9B6",
    name: "Epoch",
    symbol: "EPOCH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/33684/standard/EpochLogo_200x200.png",
    standardBridgeAddresses: {
      [base.id]: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
    },
    opTokenId: "EPOCH",
    coinGeckoId: "epoch-island",
  },
  {
    chainId: base.id,
    address: "0x287f0D88e29a3D7AEb4d0c10BAE5B902dB69B17D",
    name: "Epoch",
    symbol: "EPOCH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/33684/standard/EpochLogo_200x200.png",
    standardBridgeAddresses: {
      [mainnet.id]: "0x4200000000000000000000000000000000000010",
    },
    opTokenId: "EPOCH",
    coinGeckoId: "epoch-island",
  },

  // RAC
  {
    chainId: mainnet.id,
    address: "0xc22B30E4cce6b78aaaADae91E44E73593929a3e9",
    name: "RAC",
    symbol: "RAC",
    decimals: 18,
    logoURI: "https://etherscan.io/token/images/RAC1_32.png",
    standardBridgeAddresses: {
      [base.id]: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
    },
    opTokenId: "RAC",
  },
  {
    chainId: base.id,
    address: "0x197D38DC562DfB2490eC1A1d5C4CC4319d178Bb4",
    name: "RAC",
    symbol: "RAC",
    decimals: 18,
    logoURI: "https://etherscan.io/token/images/RAC1_32.png",
    standardBridgeAddresses: {
      [mainnet.id]: "0x4200000000000000000000000000000000000010",
    },
    opTokenId: "RAC",
  },

  // SWARM
  {
    chainId: mainnet.id,
    address: "0xB17548c7B510427baAc4e267BEa62e800b247173",
    name: "Swarm Markets",
    symbol: "SMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17488/standard/swarm-SMT-token-symbol_200x200.png",
    standardBridgeAddresses: {
      [base.id]: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
    },
    opTokenId: "SWARM",
  },
  {
    chainId: base.id,
    address: "0x2974dc646e375e83bd1c0342625b49f288987fa4",
    name: "Swarm Markets",
    symbol: "SMT",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/17488/standard/swarm-SMT-token-symbol_200x200.png",
    standardBridgeAddresses: {
      [mainnet.id]: "0x4200000000000000000000000000000000000010",
    },
    opTokenId: "SWARM",
  },
] as const;
