/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC777RecipientDrainingGas,
  ERC777RecipientDrainingGasInterface,
} from "../../../../contracts/mocks/ERC777SenderRecipientMock.sol/ERC777RecipientDrainingGas";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burned",
        type: "uint256",
      },
    ],
    name: "DrainedGas",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "canImplementInterfaceForAddress",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600160005534801561001557600080fd5b506102ed806100256000396000f3fe608060405234801561001057600080fd5b50600436106100355760003560e01c806223de291461003a578063249cb3fa1461004f575b600080fd5b61004d6100483660046101b9565b610074565b005b61006261005d366004610264565b6100e3565b60405190815260200160405180910390f35b60005a90505b6175305a111561009d5760008054908061009383610290565b919050555061007a565b7fe69a071efa597f7995dc49d165ad809dd15393f0b95e75d7089498028bb673d9815a6040805192835260208301919091520160405180910390a1505050505050505050565b60007fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b831461011357600061014d565b60405173455243313832305f4143434550545f4d4147494360601b6020820152603401604051602081830303815290604052805190602001205b9392505050565b80356001600160a01b038116811461016b57600080fd5b919050565b60008083601f84011261018257600080fd5b50813567ffffffffffffffff81111561019a57600080fd5b6020830191508360208285010111156101b257600080fd5b9250929050565b60008060008060008060008060c0898b0312156101d557600080fd5b6101de89610154565b97506101ec60208a01610154565b96506101fa60408a01610154565b955060608901359450608089013567ffffffffffffffff8082111561021e57600080fd5b61022a8c838d01610170565b909650945060a08b013591508082111561024357600080fd5b506102508b828c01610170565b999c989b5096995094979396929594505050565b6000806040838503121561027757600080fd5b8235915061028760208401610154565b90509250929050565b6000600182016102b057634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220818faaf60c584c45e8bb9adece0b26e79b32b5c3f6ae06a66efeebde9bcdd27464736f6c63430008130033";

type ERC777RecipientDrainingGasConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC777RecipientDrainingGasConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC777RecipientDrainingGas__factory extends ContractFactory {
  constructor(...args: ERC777RecipientDrainingGasConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC777RecipientDrainingGas> {
    return super.deploy(overrides || {}) as Promise<ERC777RecipientDrainingGas>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC777RecipientDrainingGas {
    return super.attach(address) as ERC777RecipientDrainingGas;
  }
  override connect(signer: Signer): ERC777RecipientDrainingGas__factory {
    return super.connect(signer) as ERC777RecipientDrainingGas__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC777RecipientDrainingGasInterface {
    return new utils.Interface(_abi) as ERC777RecipientDrainingGasInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC777RecipientDrainingGas {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC777RecipientDrainingGas;
  }
}