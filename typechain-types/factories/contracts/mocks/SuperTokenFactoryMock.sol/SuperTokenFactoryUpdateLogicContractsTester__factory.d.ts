import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperTokenFactoryUpdateLogicContractsTester, SuperTokenFactoryUpdateLogicContractsTesterInterface } from "../../../../contracts/mocks/SuperTokenFactoryMock.sol/SuperTokenFactoryUpdateLogicContractsTester";
type SuperTokenFactoryUpdateLogicContractsTesterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperTokenFactoryUpdateLogicContractsTester__factory extends ContractFactory {
    constructor(...args: SuperTokenFactoryUpdateLogicContractsTesterConstructorParams);
    deploy(host: PromiseOrValue<string>, superTokenLogic: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperTokenFactoryUpdateLogicContractsTester>;
    getDeployTransaction(host: PromiseOrValue<string>, superTokenLogic: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperTokenFactoryUpdateLogicContractsTester;
    connect(signer: Signer): SuperTokenFactoryUpdateLogicContractsTester__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001c2c38038062001c2c8339810160408190526200003491620000fb565b6001600160a01b0380831660a052811660808190526040805163132075a760e31b81529051849284929091639903ad389160048082019260009290919082900301818387803b1580156200008757600080fd5b505af11580156200009c573d6000803e3d6000fd5b505050506080516001600160a01b03167fc13fb19d60857980e565bf5dae406b8802d3c1cec50c6156b30b12b87402978360405160405180910390a2505050506200013a565b6001600160a01b0381168114620000f857600080fd5b50565b600080604083850312156200010f57600080fd5b82516200011c81620000e2565b60208401519092506200012f81620000e2565b809150509250929050565b60805160a051611aa26200018a60003960008181610137015281816106eb01526108760152600081816101ce0152818161024f015281816103db01528181610b3d0152610df20152611aa26000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80639470a5b211610097578063bab74c8911610066578063bab74c8914610218578063cbf927b31461024a578063d412d34414610271578063eff0a89d1461028457600080fd5b80639470a5b2146101cc57806397e011ed146101f25780639903ad38146101bb578063a6d0c5341461020557600080fd5b806350d75d25116100d357806350d75d251461018357806352d1902d1461018b5780638129fc1c146101bb5780638d7a72f3146101c357600080fd5b8063151188dc1461010557806320bc442514610135578063431f14811461015b578063469519541461016e575b600080fd5b6101186101133660046110fa565b6102b0565b6040516001600160a01b0390911681526020015b60405180910390f35b7f0000000000000000000000000000000000000000000000000000000000000000610118565b61011861016936600461117b565b610663565b61018161017c3660046110fa565b6106e0565b005b610118610735565b7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b6205b60405190815260200161012c565b610181610764565b6101ad60025481565b7f0000000000000000000000000000000000000000000000000000000000000000610118565b61018161020036600461120e565b610872565b610118610213366004611292565b610a87565b61022b6102263660046110fa565b610cd8565b604080516001600160a01b03909316835290151560208301520161012c565b6101187f000000000000000000000000000000000000000000000000000000000000000081565b61018161027f3660046110fa565b610ddb565b6101186102923660046110fa565b6001600160a01b039081166000908152600160205260409020541690565b600080805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49546001600160a01b0316610302576040516306ce6e6d60e21b815260040160405180910390fd5b6001600160a01b03808316600090815260016020526040902054839116801561033e576040516348eb3cb960e11b815260040160405180910390fd5b604080516001600160a01b03841660208201526000910160405160208183030381529060405280519060200120905060008160405161037c906110cb565b8190604051809103906000f590508015801561039c573d6000803e3d6000fd5b506001600160a01b038581166000908152600160205260409081902080546001600160a01b0319168484169081179091559051634a0687ef60e01b81527f00000000000000000000000000000000000000000000000000000000000000009092166004830152919250634a0687ef90602401600060405180830381600087803b15801561042857600080fd5b505af115801561043c573d6000803e3d6000fd5b5050505060008190506000876001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610485573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a99190611338565b90506000886001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156104eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610513919081019061138f565b90506000896001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610555573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261057d919081019061138f565b9050836001600160a01b03166342fe09808b85856040516020016105a19190611431565b604051602081830303815290604052856040516020016105c1919061145f565b6040516020818303038152906040526040518563ffffffff1660e01b81526004016105ef94939291906114b0565b600060405180830381600087803b15801561060957600080fd5b505af115801561061d573d6000803e3d6000fd5b50506040516001600160a01b03871692507fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f9150600090a2509198975050505050505050565b60006106d587886001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cb9190611338565b8888888888610a87565b979650505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107295760405163478b8e8360e01b815260040160405180910390fd5b61073281610e91565b50565b600061075f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b600054610100900460ff16158080156107845750600054600160ff909116105b8061079e5750303b15801561079e575060005460ff166001145b6108065760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610829576000805461ff0019166101001790555b8015610732576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663289b3c0d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f691906114ef565b9050806001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095a91906114ef565b6001600160a01b0316336001600160a01b03161461098b57604051632bf2a63360e21b815260040160405180910390fd5b6000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49546001600160a01b0316156109dd576040516348eb3cb960e11b815260040160405180910390fd5b60005b82811015610a81578383828181106109fa576109fa61150c565b9050604002016020016020810190610a1291906110fa565b60016000868685818110610a2857610a2861150c565b610a3e92602060409092020190810191506110fa565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b0319169290911691909117905580610a7981611522565b9150506109e0565b50505050565b60006001600160a01b038816610ab05760405163182e4f4160e11b815260040160405180910390fd5b6000866002811115610ac457610ac4611549565b03610ae25760405163c4901a4360e01b815260040160405180910390fd5b6001866002811115610af657610af6611549565b03610bae576000604051610b09906110cb565b604051809103906000f080158015610b25573d6000803e3d6000fd5b50604051634a0687ef60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015291925090821690634a0687ef90602401600060405180830381600087803b158015610b8d57600080fd5b505af1158015610ba1573d6000803e3d6000fd5b5050505080915050610c32565b6000604051610bbc906110d8565b604051809103906000f080158015610bd8573d6000803e3d6000fd5b509050806001600160a01b0316638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c1657600080fd5b505af1158015610c2a573d6000803e3d6000fd5b509293505050505b6040516285fc1360e71b81526001600160a01b038216906342fe098090610c67908b908b908a908a908a908a90600401611588565b600060405180830381600087803b158015610c8157600080fd5b505af1158015610c95573d6000803e3d6000fd5b50506040516001600160a01b03841692507fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f9150600090a2979650505050505050565b6001600160a01b0380821660009081526001602052604081205490918291168015610d095780925060019150610dd5565b600060405180602001610d1b906110cb565b601f1982820381018352601f9091011660408181526001600160a01b03881660208301529192506001600160f81b031991309101604051602081830303815290604052805190602001208380519060200120604051602001610db494939291906001600160f81b031994909416845260609290921b6bffffffffffffffffffffffff191660018401526015830152603582015260550190565b6040516020818303038152906040528051906020012060001c935060009250505b50915091565b604051634a0687ef60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152829190821690634a0687ef90602401600060405180830381600087803b158015610e4157600080fd5b505af1158015610e55573d6000803e3d6000fd5b50506040516001600160a01b03851692507f437790724a6e97b75d23117f28cdd4b1beeafc34f7a0911ef256e9334f4369a59150600090a25050565b6000610ebb7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031603610f115760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c6500000060448201526064016107fd565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7391906115d6565b7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b62014610fed5760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b60648201526084016107fd565b6001600160a01b03811630036110455760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f700000000000000060448201526064016107fd565b61106d817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b620604080519182526001600160a01b038416602083015201610867565b61024a806115f083390190565b6102338061183a83390190565b6001600160a01b038116811461073257600080fd5b60006020828403121561110c57600080fd5b8135611117816110e5565b9392505050565b80356003811061112d57600080fd5b919050565b60008083601f84011261114457600080fd5b50813567ffffffffffffffff81111561115c57600080fd5b60208301915083602082850101111561117457600080fd5b9250929050565b6000806000806000806080878903121561119457600080fd5b863561119f816110e5565b95506111ad6020880161111e565b9450604087013567ffffffffffffffff808211156111ca57600080fd5b6111d68a838b01611132565b909650945060608901359150808211156111ef57600080fd5b506111fc89828a01611132565b979a9699509497509295939492505050565b6000806020838503121561122157600080fd5b823567ffffffffffffffff8082111561123957600080fd5b818501915085601f83011261124d57600080fd5b81358181111561125c57600080fd5b8660208260061b850101111561127157600080fd5b60209290920196919550909350505050565b60ff8116811461073257600080fd5b600080600080600080600060a0888a0312156112ad57600080fd5b87356112b8816110e5565b965060208801356112c881611283565b95506112d66040890161111e565b9450606088013567ffffffffffffffff808211156112f357600080fd5b6112ff8b838c01611132565b909650945060808a013591508082111561131857600080fd5b506113258a828b01611132565b989b979a50959850939692959293505050565b60006020828403121561134a57600080fd5b815161111781611283565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561138657818101518382015260200161136e565b50506000910152565b6000602082840312156113a157600080fd5b815167ffffffffffffffff808211156113b957600080fd5b818401915084601f8301126113cd57600080fd5b8151818111156113df576113df611355565b604051601f8201601f19908116603f0116810190838211818310171561140757611407611355565b8160405282815287602084870101111561142057600080fd5b6106d583602083016020880161136b565b65029bab832b9160d51b81526000825161145281600685016020870161136b565b9190910160060192915050565b6000825161147181846020870161136b565b600f60fb1b920191825250600101919050565b6000815180845261149c81602086016020860161136b565b601f01601f19169290920160200192915050565b6001600160a01b038516815260ff841660208201526080604082018190526000906114dd90830185611484565b82810360608401526106d58185611484565b60006020828403121561150157600080fd5b8151611117816110e5565b634e487b7160e01b600052603260045260246000fd5b60006001820161154257634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052602160045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038716815260ff861660208201526080604082018190526000906115b6908301868861155f565b82810360608401526115c981858761155f565b9998505050505050505050565b6000602082840312156115e857600080fd5b505191905056fe608060405234801561001057600080fd5b5061022a806100206000396000f3fe6080604052600436106100225760003560e01c80634a0687ef1461003957610031565b366100315761002f610059565b005b61002f610059565b34801561004557600080fd5b5061002f6100543660046101c4565b61006b565b610069610064610171565b6101a0565b565b6001600160a01b0381166100c65760405162461bcd60e51b815260206004820152601760248201527f5555505350726f78793a207a65726f206164647265737300000000000000000060448201526064015b60405180910390fd5b60006100f07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316146101465760405162461bcd60e51b815260206004820152601e60248201527f5555505350726f78793a20616c726561647920696e697469616c697a6564000060448201526064016100bd565b61016e817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50565b600061019b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b3660008037600080366000845af43d6000803e8080156101bf573d6000f35b3d6000fd5b6000602082840312156101d657600080fd5b81356001600160a01b03811681146101ed57600080fd5b939250505056fea264697066735822122093a2bbcf49dd2895177212eeb11e9921080374fd8cd93d5be93a80935603195a64736f6c63430008130033608060405234801561001057600080fd5b50610213806100206000396000f3fe6080604052600436106100225760003560e01c80638129fc1c1461003957610031565b366100315761002f61004e565b005b61002f61004e565b34801561004557600080fd5b5061002f610060565b61005e6100596100d0565b610173565b565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546001600160a01b038116156100aa576040516305c5d81960e01b815260040160405180910390fd5b50337fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a055565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546000906001600160a01b03811661010b5761010b610197565b806001600160a01b0316639470a5b26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610149573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016d91906101ad565b91505090565b3660008037600080366000845af43d6000803e808015610192573d6000f35b3d6000fd5b634e487b7160e01b600052600160045260246000fd5b6000602082840312156101bf57600080fd5b81516001600160a01b03811681146101d657600080fd5b939250505056fea264697066735822122058d1ca205ce52a7ec995f37fb57b9e6affabeeb5d13a7fa911de8cbc8905587764736f6c63430008130033a2646970667358221220c6840404c9a24692902f1825284fc16c421cda6dca35cd4c194423e104c1532364736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken";
            readonly name: "superTokenLogic";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ALREADY_EXISTS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_DOES_NOT_EXIST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_NON_UPGRADEABLE_IS_DEPRECATED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ONLY_GOVERNANCE_OWNER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ONLY_HOST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_UNINITIALIZED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ZERO_ADDRESS";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "uuid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "codeAddress";
            readonly type: "address";
        }];
        readonly name: "CodeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "CustomSuperTokenCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SuperTokenCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "tokenLogic";
            readonly type: "address";
        }];
        readonly name: "SuperTokenLogicCreated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "_SUPER_TOKEN_LOGIC";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "castrate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_underlyingToken";
            readonly type: "address";
        }];
        readonly name: "computeCanonicalERC20WrapperAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "superTokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isDeployed";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20WithTokenInfo";
            readonly name: "_underlyingToken";
            readonly type: "address";
        }];
        readonly name: "createCanonicalERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20WithTokenInfo";
            readonly name: "underlyingToken";
            readonly type: "address";
        }, {
            readonly internalType: "enum ISuperTokenFactory.Upgradability";
            readonly name: "upgradability";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "createERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "underlyingToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "underlyingDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum ISuperTokenFactory.Upgradability";
            readonly name: "upgradability";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "createERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_underlyingTokenAddress";
            readonly type: "address";
        }];
        readonly name: "getCanonicalERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "superTokenAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCodeAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "codeAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getHost";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "host";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSuperTokenLogic";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "superToken";
                readonly type: "address";
            }];
            readonly internalType: "struct SuperTokenFactoryBase.InitializeData[]";
            readonly name: "_data";
            readonly type: "tuple[]";
        }];
        readonly name: "initializeCanonicalWrapperSuperTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "customSuperTokenProxy";
            readonly type: "address";
        }];
        readonly name: "initializeCustomSuperToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "newVariable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "updateCode";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperTokenFactoryUpdateLogicContractsTesterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperTokenFactoryUpdateLogicContractsTester;
}
export {};
//# sourceMappingURL=SuperTokenFactoryUpdateLogicContractsTester__factory.d.ts.map