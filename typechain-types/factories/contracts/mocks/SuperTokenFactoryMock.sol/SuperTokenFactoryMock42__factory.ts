/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SuperTokenFactoryMock42,
  SuperTokenFactoryMock42Interface,
} from "../../../../contracts/mocks/SuperTokenFactoryMock.sol/SuperTokenFactoryMock42";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract ISuperToken",
        name: "superTokenLogic",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "SUPER_TOKEN_FACTORY_ALREADY_EXISTS",
    type: "error",
  },
  {
    inputs: [],
    name: "SUPER_TOKEN_FACTORY_DOES_NOT_EXIST",
    type: "error",
  },
  {
    inputs: [],
    name: "SUPER_TOKEN_FACTORY_NON_UPGRADEABLE_IS_DEPRECATED",
    type: "error",
  },
  {
    inputs: [],
    name: "SUPER_TOKEN_FACTORY_ONLY_GOVERNANCE_OWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "SUPER_TOKEN_FACTORY_ONLY_HOST",
    type: "error",
  },
  {
    inputs: [],
    name: "SUPER_TOKEN_FACTORY_UNINITIALIZED",
    type: "error",
  },
  {
    inputs: [],
    name: "SUPER_TOKEN_FACTORY_ZERO_ADDRESS",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    name: "CodeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperToken",
        name: "token",
        type: "address",
      },
    ],
    name: "CustomSuperTokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperToken",
        name: "token",
        type: "address",
      },
    ],
    name: "SuperTokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ISuperToken",
        name: "tokenLogic",
        type: "address",
      },
    ],
    name: "SuperTokenLogicCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "_SUPER_TOKEN_LOGIC",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "castrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlyingToken",
        type: "address",
      },
    ],
    name: "computeCanonicalERC20WrapperAddress",
    outputs: [
      {
        internalType: "address",
        name: "superTokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isDeployed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20WithTokenInfo",
        name: "_underlyingToken",
        type: "address",
      },
    ],
    name: "createCanonicalERC20Wrapper",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20WithTokenInfo",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "enum ISuperTokenFactory.Upgradability",
        name: "upgradability",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "createERC20Wrapper",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "underlyingDecimals",
        type: "uint8",
      },
      {
        internalType: "enum ISuperTokenFactory.Upgradability",
        name: "upgradability",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "createERC20Wrapper",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlyingTokenAddress",
        type: "address",
      },
    ],
    name: "getCanonicalERC20Wrapper",
    outputs: [
      {
        internalType: "address",
        name: "superTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCodeAddress",
    outputs: [
      {
        internalType: "address",
        name: "codeAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHost",
    outputs: [
      {
        internalType: "address",
        name: "host",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSuperTokenLogic",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "superToken",
            type: "address",
          },
        ],
        internalType: "struct SuperTokenFactoryBase.InitializeData[]",
        name: "_data",
        type: "tuple[]",
      },
    ],
    name: "initializeCanonicalWrapperSuperTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "customSuperTokenProxy",
        type: "address",
      },
    ],
    name: "initializeCustomSuperToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
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
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001c1638038062001c168339810160408190526200003491620000fb565b6001600160a01b0380831660a052811660808190526040805163132075a760e31b81529051849284929091639903ad389160048082019260009290919082900301818387803b1580156200008757600080fd5b505af11580156200009c573d6000803e3d6000fd5b505050506080516001600160a01b03167fc13fb19d60857980e565bf5dae406b8802d3c1cec50c6156b30b12b87402978360405160405180910390a2505050506200013a565b6001600160a01b0381168114620000f857600080fd5b50565b600080604083850312156200010f57600080fd5b82516200011c81620000e2565b60208401519092506200012f81620000e2565b809150509250929050565b60805160a051611a8c6200018a6000396000818161012c015281816106d501526108600152600081816101b801528181610239015281816103c501528181610b270152610ddc0152611a8c6000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80639470a5b211610097578063bab74c8911610066578063bab74c8914610202578063cbf927b314610234578063d412d3441461025b578063eff0a89d1461026e57600080fd5b80639470a5b2146101b657806397e011ed146101dc5780639903ad38146101ae578063a6d0c534146101ef57600080fd5b806346951954116100d3578063469519541461016357806350d75d251461017857806352d1902d146101805780638129fc1c146101ae57600080fd5b8063151188dc146100fa57806320bc44251461012a578063431f148114610150575b600080fd5b61010d6101083660046110e4565b61029a565b6040516001600160a01b0390911681526020015b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000061010d565b61010d61015e366004611165565b61064d565b6101766101713660046110e4565b6106ca565b005b61010d61071f565b6040517fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b6208152602001610121565b61017661074e565b7f000000000000000000000000000000000000000000000000000000000000000061010d565b6101766101ea3660046111f8565b61085c565b61010d6101fd36600461127c565b610a71565b6102156102103660046110e4565b610cc2565b604080516001600160a01b039093168352901515602083015201610121565b61010d7f000000000000000000000000000000000000000000000000000000000000000081565b6101766102693660046110e4565b610dc5565b61010d61027c3660046110e4565b6001600160a01b039081166000908152600160205260409020541690565b600080805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49546001600160a01b03166102ec576040516306ce6e6d60e21b815260040160405180910390fd5b6001600160a01b038083166000908152600160205260409020548391168015610328576040516348eb3cb960e11b815260040160405180910390fd5b604080516001600160a01b038416602082015260009101604051602081830303815290604052805190602001209050600081604051610366906110b5565b8190604051809103906000f5905080158015610386573d6000803e3d6000fd5b506001600160a01b038581166000908152600160205260409081902080546001600160a01b0319168484169081179091559051634a0687ef60e01b81527f00000000000000000000000000000000000000000000000000000000000000009092166004830152919250634a0687ef90602401600060405180830381600087803b15801561041257600080fd5b505af1158015610426573d6000803e3d6000fd5b5050505060008190506000876001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561046f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104939190611322565b90506000886001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156104d5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104fd9190810190611379565b90506000896001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801561053f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105679190810190611379565b9050836001600160a01b03166342fe09808b858560405160200161058b919061141b565b604051602081830303815290604052856040516020016105ab9190611449565b6040516020818303038152906040526040518563ffffffff1660e01b81526004016105d9949392919061149a565b600060405180830381600087803b1580156105f357600080fd5b505af1158015610607573d6000803e3d6000fd5b50506040516001600160a01b03871692507fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f9150600090a2509198975050505050505050565b60006106bf87886001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610691573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b59190611322565b8888888888610a71565b979650505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107135760405163478b8e8360e01b815260040160405180910390fd5b61071c81610e7b565b50565b60006107497f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b600054610100900460ff161580801561076e5750600054600160ff909116105b806107885750303b158015610788575060005460ff166001145b6107f05760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610813576000805461ff0019166101001790555b801561071c576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663289b3c0d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e091906114d9565b9050806001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610920573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094491906114d9565b6001600160a01b0316336001600160a01b03161461097557604051632bf2a63360e21b815260040160405180910390fd5b6000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49546001600160a01b0316156109c7576040516348eb3cb960e11b815260040160405180910390fd5b60005b82811015610a6b578383828181106109e4576109e46114f6565b90506040020160200160208101906109fc91906110e4565b60016000868685818110610a1257610a126114f6565b610a2892602060409092020190810191506110e4565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b0319169290911691909117905580610a638161150c565b9150506109ca565b50505050565b60006001600160a01b038816610a9a5760405163182e4f4160e11b815260040160405180910390fd5b6000866002811115610aae57610aae611533565b03610acc5760405163c4901a4360e01b815260040160405180910390fd5b6001866002811115610ae057610ae0611533565b03610b98576000604051610af3906110b5565b604051809103906000f080158015610b0f573d6000803e3d6000fd5b50604051634a0687ef60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015291925090821690634a0687ef90602401600060405180830381600087803b158015610b7757600080fd5b505af1158015610b8b573d6000803e3d6000fd5b5050505080915050610c1c565b6000604051610ba6906110c2565b604051809103906000f080158015610bc2573d6000803e3d6000fd5b509050806001600160a01b0316638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c0057600080fd5b505af1158015610c14573d6000803e3d6000fd5b509293505050505b6040516285fc1360e71b81526001600160a01b038216906342fe098090610c51908b908b908a908a908a908a90600401611572565b600060405180830381600087803b158015610c6b57600080fd5b505af1158015610c7f573d6000803e3d6000fd5b50506040516001600160a01b03841692507fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f9150600090a2979650505050505050565b6001600160a01b0380821660009081526001602052604081205490918291168015610cf35780925060019150610dbf565b600060405180602001610d05906110b5565b601f1982820381018352601f9091011660408181526001600160a01b03881660208301529192506001600160f81b031991309101604051602081830303815290604052805190602001208380519060200120604051602001610d9e94939291906001600160f81b031994909416845260609290921b6bffffffffffffffffffffffff191660018401526015830152603582015260550190565b6040516020818303038152906040528051906020012060001c935060009250505b50915091565b604051634a0687ef60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152829190821690634a0687ef90602401600060405180830381600087803b158015610e2b57600080fd5b505af1158015610e3f573d6000803e3d6000fd5b50506040516001600160a01b03851692507f437790724a6e97b75d23117f28cdd4b1beeafc34f7a0911ef256e9334f4369a59150600090a25050565b6000610ea57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031603610efb5760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c6500000060448201526064016107e7565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5d91906115c0565b7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b62014610fd75760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b60648201526084016107e7565b6001600160a01b038116300361102f5760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f700000000000000060448201526064016107e7565b611057817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b620604080519182526001600160a01b038416602083015201610851565b61024a806115da83390190565b6102338061182483390190565b6001600160a01b038116811461071c57600080fd5b6000602082840312156110f657600080fd5b8135611101816110cf565b9392505050565b80356003811061111757600080fd5b919050565b60008083601f84011261112e57600080fd5b50813567ffffffffffffffff81111561114657600080fd5b60208301915083602082850101111561115e57600080fd5b9250929050565b6000806000806000806080878903121561117e57600080fd5b8635611189816110cf565b955061119760208801611108565b9450604087013567ffffffffffffffff808211156111b457600080fd5b6111c08a838b0161111c565b909650945060608901359150808211156111d957600080fd5b506111e689828a0161111c565b979a9699509497509295939492505050565b6000806020838503121561120b57600080fd5b823567ffffffffffffffff8082111561122357600080fd5b818501915085601f83011261123757600080fd5b81358181111561124657600080fd5b8660208260061b850101111561125b57600080fd5b60209290920196919550909350505050565b60ff8116811461071c57600080fd5b600080600080600080600060a0888a03121561129757600080fd5b87356112a2816110cf565b965060208801356112b28161126d565b95506112c060408901611108565b9450606088013567ffffffffffffffff808211156112dd57600080fd5b6112e98b838c0161111c565b909650945060808a013591508082111561130257600080fd5b5061130f8a828b0161111c565b989b979a50959850939692959293505050565b60006020828403121561133457600080fd5b81516111018161126d565b634e487b7160e01b600052604160045260246000fd5b60005b83811015611370578181015183820152602001611358565b50506000910152565b60006020828403121561138b57600080fd5b815167ffffffffffffffff808211156113a357600080fd5b818401915084601f8301126113b757600080fd5b8151818111156113c9576113c961133f565b604051601f8201601f19908116603f011681019083821181831017156113f1576113f161133f565b8160405282815287602084870101111561140a57600080fd5b6106bf836020830160208801611355565b65029bab832b9160d51b81526000825161143c816006850160208701611355565b9190910160060192915050565b6000825161145b818460208701611355565b600f60fb1b920191825250600101919050565b60008151808452611486816020860160208601611355565b601f01601f19169290920160200192915050565b6001600160a01b038516815260ff841660208201526080604082018190526000906114c79083018561146e565b82810360608401526106bf818561146e565b6000602082840312156114eb57600080fd5b8151611101816110cf565b634e487b7160e01b600052603260045260246000fd5b60006001820161152c57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052602160045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038716815260ff861660208201526080604082018190526000906115a09083018688611549565b82810360608401526115b3818587611549565b9998505050505050505050565b6000602082840312156115d257600080fd5b505191905056fe608060405234801561001057600080fd5b5061022a806100206000396000f3fe6080604052600436106100225760003560e01c80634a0687ef1461003957610031565b366100315761002f610059565b005b61002f610059565b34801561004557600080fd5b5061002f6100543660046101c4565b61006b565b610069610064610171565b6101a0565b565b6001600160a01b0381166100c65760405162461bcd60e51b815260206004820152601760248201527f5555505350726f78793a207a65726f206164647265737300000000000000000060448201526064015b60405180910390fd5b60006100f07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316146101465760405162461bcd60e51b815260206004820152601e60248201527f5555505350726f78793a20616c726561647920696e697469616c697a6564000060448201526064016100bd565b61016e817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50565b600061019b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b3660008037600080366000845af43d6000803e8080156101bf573d6000f35b3d6000fd5b6000602082840312156101d657600080fd5b81356001600160a01b03811681146101ed57600080fd5b939250505056fea264697066735822122093a2bbcf49dd2895177212eeb11e9921080374fd8cd93d5be93a80935603195a64736f6c63430008130033608060405234801561001057600080fd5b50610213806100206000396000f3fe6080604052600436106100225760003560e01c80638129fc1c1461003957610031565b366100315761002f61004e565b005b61002f61004e565b34801561004557600080fd5b5061002f610060565b61005e6100596100d0565b610173565b565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546001600160a01b038116156100aa576040516305c5d81960e01b815260040160405180910390fd5b50337fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a055565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546000906001600160a01b03811661010b5761010b610197565b806001600160a01b0316639470a5b26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610149573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016d91906101ad565b91505090565b3660008037600080366000845af43d6000803e808015610192573d6000f35b3d6000fd5b634e487b7160e01b600052600160045260246000fd5b6000602082840312156101bf57600080fd5b81516001600160a01b03811681146101d657600080fd5b939250505056fea264697066735822122058d1ca205ce52a7ec995f37fb57b9e6affabeeb5d13a7fa911de8cbc8905587764736f6c63430008130033a2646970667358221220b1079f7dee2582e55d12c6bcc2885ec4410052d2d743bf78684f8928ae930c7e64736f6c63430008130033";

type SuperTokenFactoryMock42ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SuperTokenFactoryMock42ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SuperTokenFactoryMock42__factory extends ContractFactory {
  constructor(...args: SuperTokenFactoryMock42ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    host: PromiseOrValue<string>,
    superTokenLogic: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SuperTokenFactoryMock42> {
    return super.deploy(
      host,
      superTokenLogic,
      overrides || {}
    ) as Promise<SuperTokenFactoryMock42>;
  }
  override getDeployTransaction(
    host: PromiseOrValue<string>,
    superTokenLogic: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(host, superTokenLogic, overrides || {});
  }
  override attach(address: string): SuperTokenFactoryMock42 {
    return super.attach(address) as SuperTokenFactoryMock42;
  }
  override connect(signer: Signer): SuperTokenFactoryMock42__factory {
    return super.connect(signer) as SuperTokenFactoryMock42__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SuperTokenFactoryMock42Interface {
    return new utils.Interface(_abi) as SuperTokenFactoryMock42Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SuperTokenFactoryMock42 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SuperTokenFactoryMock42;
  }
}
