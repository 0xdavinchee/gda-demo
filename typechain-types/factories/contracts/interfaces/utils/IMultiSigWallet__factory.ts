/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMultiSigWallet,
  IMultiSigWalletInterface,
} from "../../../../contracts/interfaces/utils/IMultiSigWallet";

const _abi = [
  {
    inputs: [],
    name: "required",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "submitTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMultiSigWallet__factory {
  static readonly abi = _abi;
  static createInterface(): IMultiSigWalletInterface {
    return new utils.Interface(_abi) as IMultiSigWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMultiSigWallet {
    return new Contract(address, _abi, signerOrProvider) as IMultiSigWallet;
  }
}
