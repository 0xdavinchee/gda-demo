/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UUPSProxy,
  UUPSProxyInterface,
} from "../../../contracts/upgradability/UUPSProxy";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialAddress",
        type: "address",
      },
    ],
    name: "initializeProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061022a806100206000396000f3fe6080604052600436106100225760003560e01c80634a0687ef1461003957610031565b366100315761002f610059565b005b61002f610059565b34801561004557600080fd5b5061002f6100543660046101c4565b61006b565b610069610064610171565b6101a0565b565b6001600160a01b0381166100c65760405162461bcd60e51b815260206004820152601760248201527f5555505350726f78793a207a65726f206164647265737300000000000000000060448201526064015b60405180910390fd5b60006100f07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316146101465760405162461bcd60e51b815260206004820152601e60248201527f5555505350726f78793a20616c726561647920696e697469616c697a6564000060448201526064016100bd565b61016e817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50565b600061019b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b3660008037600080366000845af43d6000803e8080156101bf573d6000f35b3d6000fd5b6000602082840312156101d657600080fd5b81356001600160a01b03811681146101ed57600080fd5b939250505056fea264697066735822122093a2bbcf49dd2895177212eeb11e9921080374fd8cd93d5be93a80935603195a64736f6c63430008130033";

type UUPSProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UUPSProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UUPSProxy__factory extends ContractFactory {
  constructor(...args: UUPSProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UUPSProxy> {
    return super.deploy(overrides || {}) as Promise<UUPSProxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UUPSProxy {
    return super.attach(address) as UUPSProxy;
  }
  override connect(signer: Signer): UUPSProxy__factory {
    return super.connect(signer) as UUPSProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UUPSProxyInterface {
    return new utils.Interface(_abi) as UUPSProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUPSProxy {
    return new Contract(address, _abi, signerOrProvider) as UUPSProxy;
  }
}
