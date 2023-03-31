/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISuperTokenPool,
  ISuperTokenPoolInterface,
} from "../../../../contracts/interfaces/superfluid/ISuperTokenPool";

const _abi = [
  {
    inputs: [],
    name: "SUPER_TOKEN_POOL_NEGATIVE_UNITS_NOT_SUPPORTED",
    type: "error",
  },
  {
    inputs: [],
    name: "SUPER_TOKEN_POOL_NOT_POOL_ADMIN",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "totalUnits",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "wpSettledAt",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "wpSettledValue",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int96",
        name: "wpFlowRate",
        type: "int96",
      },
    ],
    name: "PoolIndexUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "_superToken",
    outputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "time",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "memberAddr",
        type: "address",
      },
    ],
    name: "claimAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "memberAddr",
        type: "address",
      },
    ],
    name: "claimAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "time",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "memberAddr",
        type: "address",
      },
    ],
    name: "getClaimable",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "memberAddr",
        type: "address",
      },
    ],
    name: "getClaimable",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDistributionFlowRate",
    outputs: [
      {
        internalType: "int96",
        name: "",
        type: "int96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "memberAddress",
        type: "address",
      },
    ],
    name: "getMemberFlowRate",
    outputs: [
      {
        internalType: "int96",
        name: "",
        type: "int96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingDistribution",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingDistributionFlowRate",
    outputs: [
      {
        internalType: "int96",
        name: "",
        type: "int96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalUnits",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "memberAddress",
        type: "address",
      },
    ],
    name: "getUnits",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "time",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "memberAddr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "doConnect",
        type: "bool",
      },
    ],
    name: "operatorConnectMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "memberAddr",
        type: "address",
      },
      {
        internalType: "int128",
        name: "unit",
        type: "int128",
      },
    ],
    name: "updateMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISuperTokenPool__factory {
  static readonly abi = _abi;
  static createInterface(): ISuperTokenPoolInterface {
    return new utils.Interface(_abi) as ISuperTokenPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISuperTokenPool {
    return new Contract(address, _abi, signerOrProvider) as ISuperTokenPool;
  }
}