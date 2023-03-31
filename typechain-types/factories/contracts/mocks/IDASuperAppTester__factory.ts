/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  IDASuperAppTester,
  IDASuperAppTesterInterface,
} from "../../../contracts/mocks/IDASuperAppTester";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "configWord",
        type: "uint256",
      },
      {
        internalType: "contract IInstantDistributionAgreementV1",
        name: "ida",
        type: "address",
      },
      {
        internalType: "contract ISuperToken",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "indexId",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "publisher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "indexId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "units",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pendingDistribution",
        type: "uint256",
      },
    ],
    name: "SubscriptionDataAfter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "publisher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "indexId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "units",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pendingDistribution",
        type: "uint256",
      },
    ],
    name: "SubscriptionDataBefore",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "agreementClass",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "agreementData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "cbdata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "ctx",
        type: "bytes",
      },
    ],
    name: "afterAgreementCreated",
    outputs: [
      {
        internalType: "bytes",
        name: "newCtx",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "agreementClass",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "agreementData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "cbdata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "ctx",
        type: "bytes",
      },
    ],
    name: "afterAgreementTerminated",
    outputs: [
      {
        internalType: "bytes",
        name: "newCtx",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "agreementClass",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "agreementData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "cbdata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "ctx",
        type: "bytes",
      },
    ],
    name: "afterAgreementUpdated",
    outputs: [
      {
        internalType: "bytes",
        name: "newCtx",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "agreementClass",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "agreementData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "ctx",
        type: "bytes",
      },
    ],
    name: "beforeAgreementCreated",
    outputs: [
      {
        internalType: "bytes",
        name: "cbdata",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "agreementClass",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "agreementData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "ctx",
        type: "bytes",
      },
    ],
    name: "beforeAgreementTerminated",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "agreementClass",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "agreementData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "ctx",
        type: "bytes",
      },
    ],
    name: "beforeAgreementUpdated",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setForceGetSubscriptionByID",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "units",
        type: "uint128",
      },
    ],
    name: "updateSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526002805460ff60c01b191690553480156200001e57600080fd5b5060405162001b5938038062001b5983398101604081905262000041916200020e565b600080546001600160a01b0319166001600160a01b03871690811782556040805163bd1c448b60e01b815260048101889052602481019190915260448101929092529063bd1c448b90606401600060405180830381600087803b158015620000a857600080fd5b505af1158015620000bd573d6000803e3d6000fd5b5050600180546001600160a01b0319166001600160a01b03878116918217909255600280548784166001600160c01b031990911617600160a01b63ffffffff888116820292909217928390556000805460408051928352602083019052861697506339255d5b96509394859463d787840a9462000148949281169390049091169060448101620002f4565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526200019f93925090602481016200032f565b6000604051808303816000875af1158015620001bf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001e9919081019062000373565b5050505050506200042b565b6001600160a01b03811681146200020b57600080fd5b50565b600080600080600060a086880312156200022757600080fd5b85516200023481620001f5565b6020870151604088015191965094506200024e81620001f5565b60608701519093506200026181620001f5565b608087015190925063ffffffff811681146200027c57600080fd5b809150509295509295909350565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002bd578181015183820152602001620002a3565b50506000910152565b60008151808452620002e0816020860160208601620002a0565b601f01601f19169290920160200192915050565b6001600160a01b038416815263ffffffff831660208201526060604082018190526000906200032690830184620002c6565b95945050505050565b6001600160a01b03841681526060602082018190526000906200035590830185620002c6565b8281036040840152620003698185620002c6565b9695505050505050565b6000602082840312156200038657600080fd5b81516001600160401b03808211156200039e57600080fd5b818401915084601f830112620003b357600080fd5b815181811115620003c857620003c86200028a565b604051601f8201601f19908116603f01168101908382118183101715620003f357620003f36200028a565b816040528281528760208487010111156200040d57600080fd5b62000420836020830160208801620002a0565b979650505050505050565b61171e806200043b6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806353c11f991161006657806353c11f99146101015780635f9e7d7714610114578063884d1f4014610127578063d86ed3e51461013a578063fbd6c5311461014d57600080fd5b8063230dbd291461009857806330d9c915146100c157806334cdedda146100d457806334e5a692146100ee575b600080fd5b6100ab6100a6366004610f93565b610160565b6040516100b891906110ae565b60405180910390f35b6100ab6100cf3660046110c8565b610317565b6100ec6002805460ff60c01b1916600160c01b179055565b005b6100ec6100fc36600461117c565b6104d9565b6100ab61010f366004610f93565b6105ce565b6100ab6101223660046110c8565b610732565b6100ab6101353660046110c8565b61085f565b6100ab610148366004610f93565b610973565b6100ec61015b366004611199565b610a87565b604051632fd0a1cd60e21b815260609083908390339063bf4287349061018c90859085906004016111d2565b602060405180830381865afa1580156101a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cd9190611216565b6101f25760405162461bcd60e51b81526004016101e990611231565b60405180910390fd5b6002548c908c906001600160a01b038084169116146102235760405162461bcd60e51b81526004016101e990611278565b6001546001600160a01b038281169116146102505760405162461bcd60e51b81526004016101e9906112a4565b61027d87877fe8403962000fb7c84477d736a9f7580bce08b91a50c982d183fa44077a9ce9108e8e610b7f565b6102cd89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d6000610d25565b86868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929750505050505050509998505050505050505050565b604051632fd0a1cd60e21b815260609083908390339063bf4287349061034390859085906004016111d2565b602060405180830381865afa158015610360573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103849190611216565b6103a05760405162461bcd60e51b81526004016101e990611231565b6002548a908a906001600160a01b038084169116146103d15760405162461bcd60e51b81526004016101e990611278565b6001546001600160a01b038281169116146103fe5760405162461bcd60e51b81526004016101e9906112a4565b61042b87877f76253669260cf524e3db8d89857f289f85025242f93be69d3ee9d284788037688c8c610b7f565b600254600160c01b900460ff16156104ba5760015460025460405163cd7245c560e01b81526001600160a01b039182166004820152602481018d905291169063cd7245c59060440160a060405180830381865afa158015610490573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b491906112e4565b50505050505b50506040805160008152602081019091529a9950505050505050505050565b60008054600154600254604080519485526020850190526001600160a01b03928316936339255d5b9392831692839263b96731c29261052e92821691600160a01b900463ffffffff169089906044810161135e565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b031916905261058393925090602481016113a7565b6000604051808303816000875af11580156105a2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105ca9190810190611485565b5050565b604051632fd0a1cd60e21b815260609083908390339063bf428734906105fa90859085906004016111d2565b602060405180830381865afa158015610617573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063b9190611216565b6106575760405162461bcd60e51b81526004016101e990611231565b6002548c908c906001600160a01b038084169116146106885760405162461bcd60e51b81526004016101e990611278565b6001546001600160a01b038281169116146106b55760405162461bcd60e51b81526004016101e9906112a4565b6106e287877ffec91ad4a0d3a97a5aa5d0b8b79f71ff5a63866a2be7950c6bac67bce785d7088e8e610b7f565b6102cd89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d6001610d25565b604051632fd0a1cd60e21b815260609083908390339063bf4287349061075e90859085906004016111d2565b602060405180830381865afa15801561077b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079f9190611216565b6107bb5760405162461bcd60e51b81526004016101e990611231565b6002548a908a906001600160a01b038084169116146107ec5760405162461bcd60e51b81526004016101e990611278565b6001546001600160a01b038281169116146108195760405162461bcd60e51b81526004016101e9906112a4565b61084687877ffec91ad4a0d3a97a5aa5d0b8b79f71ff5a63866a2be7950c6bac67bce785d7088c8c610b7f565b61084f8a610e6c565b9c9b505050505050505050505050565b604051632fd0a1cd60e21b815260609083908390339063bf4287349061088b90859085906004016111d2565b602060405180830381865afa1580156108a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cc9190611216565b6108e85760405162461bcd60e51b81526004016101e990611231565b6002548a908a906001600160a01b038084169116146109195760405162461bcd60e51b81526004016101e990611278565b6001546001600160a01b038281169116146109465760405162461bcd60e51b81526004016101e9906112a4565b61084687877fe8403962000fb7c84477d736a9f7580bce08b91a50c982d183fa44077a9ce9108c8c610b7f565b604051632fd0a1cd60e21b815260609083908390339063bf4287349061099f90859085906004016111d2565b602060405180830381865afa1580156109bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e09190611216565b6109fc5760405162461bcd60e51b81526004016101e990611231565b6002548c908c906001600160a01b03808416911614610a2d5760405162461bcd60e51b81526004016101e990611278565b6001546001600160a01b03828116911614610a5a5760405162461bcd60e51b81526004016101e9906112a4565b61027d87877f76253669260cf524e3db8d89857f289f85025242f93be69d3ee9d284788037688e8e610b7f565b60008054600154600254604080519485526020850190526001600160a01b03928316936339255d5b9392831692839263232d2b5892610ade92821691600160a01b900463ffffffff16908a908a90604481016114c2565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b0319169052610b3393925090602481016113a7565b6000604051808303816000875af1158015610b52573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b7a9190810190611485565b505050565b604051631fb6491d60e11b81526000903390633f6c923a90610ba790899089906004016111d2565b600060405180830381865afa158015610bc4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bec919081019061153d565b905060008060608360a00151806020019051810190610c0b9190611644565b91945092509050868314610c565760405162461bcd60e51b815260206004820152601260248201527177726f6e672063616c6c6261636b5479706560701b60448201526064016101e9565b60808401516001600160e01b0319838116911614610cb65760405162461bcd60e51b815260206004820152601760248201527f77726f6e672061677265656d656e7453656c6563746f7200000000000000000060448201526064016101e9565b8585604051610cc692919061169b565b6040518091039020818051906020012014610d1a5760405162461bcd60e51b815260206004820152601460248201527377726f6e67206141677265656d656e744461746160601b60448201526064016101e9565b505050505050505050565b60008060008060008088511115610d985787806020019051810190610d4a91906112e4565b604051949950929750909550935091507f2454540e0875d1db1518bd2e89c610a09e41eb24b53620d5cf7f43cc5112d53590610d8f90879087908790879087906116ab565b60405180910390a15b85610e625760015460025460405163cd7245c560e01b81526001600160a01b039182166004820152602481018a905291169063cd7245c59060440160a060405180830381865afa158015610df0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1491906112e4565b604051949950929750909550935091507fca5ab0cc93ce90dc74e03f000eb2f1bf6fe2af97ef814ed740d1eafc597da90490610e5990879087908790879087906116ab565b60405180910390a15b5050505050505050565b60015460025460405163cd7245c560e01b81526001600160a01b03918216600482015260248101849052606092600092839283928392839291169063cd7245c59060440160a060405180830381865afa158015610ecd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef191906112e4565b60405194995092975090955093509150610f1790869086908690869086906020016116ab565b60405160208183030381529060405295505050505050919050565b6001600160a01b0381168114610f4757600080fd5b50565b60008083601f840112610f5c57600080fd5b50813567ffffffffffffffff811115610f7457600080fd5b602083019150836020828501011115610f8c57600080fd5b9250929050565b600080600080600080600080600060c08a8c031215610fb157600080fd5b8935610fbc81610f32565b985060208a0135610fcc81610f32565b975060408a0135965060608a013567ffffffffffffffff80821115610ff057600080fd5b610ffc8d838e01610f4a565b909850965060808c013591508082111561101557600080fd5b6110218d838e01610f4a565b909650945060a08c013591508082111561103a57600080fd5b506110478c828d01610f4a565b915080935050809150509295985092959850929598565b60005b83811015611079578181015183820152602001611061565b50506000910152565b6000815180845261109a81602086016020860161105e565b601f01601f19169290920160200192915050565b6020815260006110c16020830184611082565b9392505050565b600080600080600080600060a0888a0312156110e357600080fd5b87356110ee81610f32565b965060208801356110fe81610f32565b955060408801359450606088013567ffffffffffffffff8082111561112257600080fd5b61112e8b838c01610f4a565b909650945060808a013591508082111561114757600080fd5b506111548a828b01610f4a565b989b979a50959850939692959293505050565b6001600160801b0381168114610f4757600080fd5b60006020828403121561118e57600080fd5b81356110c181611167565b600080604083850312156111ac57600080fd5b82356111b781610f32565b915060208301356111c781611167565b809150509250929050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b8051801515811461121157600080fd5b919050565b60006020828403121561122857600080fd5b6110c182611201565b60208082526027908201527f49444153757065724170705465737465723a20637478206e6f742076616c6964604082015266206265666f726560c81b606082015260800190565b6020808252601290820152713737ba1030b1b1b2b83a32b2103a37b5b2b760711b604082015260600190565b6020808252600790820152666e6f742069646160c81b604082015260600190565b805161121181610f32565b805163ffffffff8116811461121157600080fd5b600080600080600060a086880312156112fc57600080fd5b855161130781610f32565b9450611315602087016112d0565b935061132360408701611201565b9250606086015161133381611167565b80925050608086015190509295509295909350565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038516815263ffffffff841660208201526001600160801b038316604082015260806060820181905260009061139d90830184611082565b9695505050505050565b6001600160a01b03841681526060602082018190526000906113cb90830185611082565b828103604084015261139d8185611082565b604051610160810167ffffffffffffffff8111828210171561140157611401611348565b60405290565b600082601f83011261141857600080fd5b815167ffffffffffffffff8082111561143357611433611348565b604051601f8301601f19908116603f0116810190828211818310171561145b5761145b611348565b8160405283815286602085880101111561147457600080fd5b61139d84602083016020890161105e565b60006020828403121561149757600080fd5b815167ffffffffffffffff8111156114ae57600080fd5b6114ba84828501611407565b949350505050565b6001600160a01b03868116825263ffffffff86166020830152841660408201526001600160801b038316606082015260a06080820181905260009061150990830184611082565b979650505050505050565b805160ff8116811461121157600080fd5b80516001600160e01b03198116811461121157600080fd5b60006020828403121561154f57600080fd5b815167ffffffffffffffff8082111561156757600080fd5b90830190610160828603121561157c57600080fd5b6115846113dd565b61158d83611514565b815261159b60208401611514565b6020820152604083015160408201526115b6606084016112c5565b60608201526115c760808401611525565b608082015260a0830151828111156115de57600080fd5b6115ea87828601611407565b60a08301525060c083015160c082015260e083015160e08201526101009150818301518282015261012091506116218284016112c5565b8282015261014091506116358284016112c5565b91810191909152949350505050565b60008060006060848603121561165957600080fd5b8351925061166960208501611525565b9150604084015167ffffffffffffffff81111561168557600080fd5b61169186828701611407565b9150509250925092565b8183823760009101908152919050565b6001600160a01b0395909516855263ffffffff93909316602085015290151560408401526001600160801b03166060830152608082015260a0019056fea2646970667358221220f0229a3806270044570bde7cbbf071ecf131c763451e7faff589d2a518c7146b64736f6c63430008130033";

type IDASuperAppTesterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IDASuperAppTesterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IDASuperAppTester__factory extends ContractFactory {
  constructor(...args: IDASuperAppTesterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    host: PromiseOrValue<string>,
    configWord: PromiseOrValue<BigNumberish>,
    ida: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    indexId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IDASuperAppTester> {
    return super.deploy(
      host,
      configWord,
      ida,
      token,
      indexId,
      overrides || {}
    ) as Promise<IDASuperAppTester>;
  }
  override getDeployTransaction(
    host: PromiseOrValue<string>,
    configWord: PromiseOrValue<BigNumberish>,
    ida: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    indexId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      host,
      configWord,
      ida,
      token,
      indexId,
      overrides || {}
    );
  }
  override attach(address: string): IDASuperAppTester {
    return super.attach(address) as IDASuperAppTester;
  }
  override connect(signer: Signer): IDASuperAppTester__factory {
    return super.connect(signer) as IDASuperAppTester__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IDASuperAppTesterInterface {
    return new utils.Interface(_abi) as IDASuperAppTesterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDASuperAppTester {
    return new Contract(address, _abi, signerOrProvider) as IDASuperAppTester;
  }
}
