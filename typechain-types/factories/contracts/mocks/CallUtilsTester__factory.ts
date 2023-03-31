/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CallUtilsTester,
  CallUtilsTesterInterface,
} from "../../../contracts/mocks/CallUtilsTester";

const _abi = [
  {
    inputs: [],
    name: "testIsValidAbiEncodedBytes",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061034a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ba89c9eb14610030575b600080fd5b61003861003a565b005b604080516001602082015260029181019190915260036060820152610071906080015b6040516020818303038152906040526101d1565b156100ae5760405162461bcd60e51b8152602060048201526008602482015267626164206461746160c01b60448201526064015b60405180910390fd5b6100ef60005b6040519080825280601f01601f1916602001820160405280156100de576020820181803683370190505b5060405160200161005d9190610264565b61011f5760405162461bcd60e51b81526020600482015260016024820152600360fc1b60448201526064016100a5565b61012960016100b4565b6101595760405162461bcd60e51b81526020600482015260016024820152603160f81b60448201526064016100a5565b61016360206100b4565b6101945760405162461bcd60e51b8152602060048201526002602482015261199960f11b60448201526064016100a5565b61019e60216100b4565b6101cf5760405162461bcd60e51b8152602060048201526002602482015261333360f01b60448201526064016100a5565b565b60006040825110156101e557506000919050565b6020828101519060009082146101ff575060009392505050565b50604083015161020e81610225565b6102199060406102c8565b84511492505050919050565b60008082601f161161023857600061023b565b60015b60ff166102496020846102db565b61025391906102c8565b61025e9060206102fd565b92915050565b600060208083528351808285015260005b8181101561029157858101830151858201604001528201610275565b506000604082860101526040601f19601f8301168501019250505092915050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561025e5761025e6102b2565b6000826102f857634e487b7160e01b600052601260045260246000fd5b500490565b808202811582820484141761025e5761025e6102b256fea2646970667358221220058617580d53dcf3c544e2fd3e7425879e8f9537af04fc2e13938dd0c9cc0a9f64736f6c63430008130033";

type CallUtilsTesterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CallUtilsTesterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CallUtilsTester__factory extends ContractFactory {
  constructor(...args: CallUtilsTesterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CallUtilsTester> {
    return super.deploy(overrides || {}) as Promise<CallUtilsTester>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CallUtilsTester {
    return super.attach(address) as CallUtilsTester;
  }
  override connect(signer: Signer): CallUtilsTester__factory {
    return super.connect(signer) as CallUtilsTester__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallUtilsTesterInterface {
    return new utils.Interface(_abi) as CallUtilsTesterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallUtilsTester {
    return new Contract(address, _abi, signerOrProvider) as CallUtilsTester;
  }
}