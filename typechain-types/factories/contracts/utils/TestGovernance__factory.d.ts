import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { TestGovernance, TestGovernanceInterface } from "../../../contracts/utils/TestGovernance";
type TestGovernanceConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestGovernance__factory extends ContractFactory {
    constructor(...args: TestGovernanceConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestGovernance>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestGovernance;
    connect(signer: Signer): TestGovernance__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611ca18061007e6000396000f3fe608060405234801561001057600080fd5b50600436106101ef5760003560e01c80637f0558e41161010f578063948eda5e116100a2578063e447cc1d11610071578063e447cc1d1461045f578063f047a2d914610472578063f2fde38b14610485578063f79a8e631461049857600080fd5b8063948eda5e14610413578063ab846f1a14610426578063cadf8f8514610439578063d099b6a01461044c57600080fd5b80638abe04e9116100de5780638abe04e9146103b95780638b93b3f5146103dc5780638da5cb5b146103ef5780638ecbd87b1461040057600080fd5b80637f0558e41461036457806380f70cba146103775780638369a0f1146103985780638a7ff2f7146103a657600080fd5b8063427942a411610187578063640b6cc911610156578063640b6cc914610323578063715018a61461033657806378707cb81461033e5780637dce4f811461035157600080fd5b8063427942a4146102c257806344864b25146102d557806345228235146102e85780635a9078181461031057600080fd5b806321964473116101c3578063219644731461027657806325c955c314610289578063325529081461029c57806342148deb146102af57600080fd5b806286d555146101f457806301a06b971461020957806311cf00f11461021c57806319df62ab1461024b575b600080fd5b61020761020236600461161c565b6104ab565b005b610207610217366004611662565b610578565b61022f61022a36600461173e565b6105fc565b6040805192151583526020830191909152015b60405180910390f35b61025e610259366004611662565b61062c565b6040516001600160a01b039091168152602001610242565b6102076102843660046117ec565b610660565b610207610297366004611662565b6106ec565b6102076102aa36600461186f565b610748565b6102076102bd3660046118ba565b6107c5565b6102076102d036600461190f565b610881565b6102076102e3366004611662565b610b31565b6102fb6102f6366004611662565b610b9c565b60408051928352602083019190915201610242565b61020761031e36600461198c565b610be4565b610207610331366004611a08565b610c9e565b610207610cae565b61020761034c366004611a49565b610cc2565b61020761035f36600461186f565b610cd4565b610207610372366004611a08565b610d34565b61038a610385366004611a08565b610da7565b604051908152602001610242565b61025e610385366004611a08565b61038a6103b4366004611662565b610e18565b6103cc6103c7366004611662565b610e45565b6040519015158152602001610242565b6102076103ea366004611662565b610e60565b6000546001600160a01b031661025e565b61020761040e366004611662565b610ee3565b61020761042136600461173e565b610f54565b61020761043436600461186f565b610fc2565b610207610447366004611662565b61101e565b61020761045a366004611a9c565b611056565b61020761046d366004611662565b6110b6565b6103cc61048036600461186f565b611127565b610207610493366004611b06565b611142565b6102076104a636600461161c565b6111c0565b80821115806104be575063ffffffff8210155b806104cd575063ffffffff8110155b156104eb576040516370b8cc0560e11b815260040160405180910390fd5b602082901b811761051e85857fe420d96e81cb4a6b2abb2366c4f93312d4e2ae878a7d4b22e73472fdad891f78846111c8565b6040805160018152602081018590529081018390526001600160a01b0380861691908716907f60a59221512cd8cbfb226200f7ba6f20dc4b38a3cf04993d17ea4e56d26aa186906060015b60405180910390a35050505050565b6105a382827fe420d96e81cb4a6b2abb2366c4f93312d4e2ae878a7d4b22e73472fdad891f7861127b565b60408051600080825260208201819052918101919091526001600160a01b0380831691908416907f60a59221512cd8cbfb226200f7ba6f20dc4b38a3cf04993d17ea4e56d26aa186906060015b60405180910390a35050565b600080600061060b858561133c565b9050600061061b87600084610da7565b428110159890975095505050505050565b600061065983837f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d09610da7565b9392505050565b828114610680576040516313ba1d5360e11b815260040160405180910390fd5b60005b818110156106e4576106d4868686848181106106a1576106a1611b23565b90506020020160208101906106b69190611b06565b8585858181106106c8576106c8611b23565b90506020020135610d34565b6106dd81611b39565b9050610683565b505050505050565b6107008260006106fb8461136f565b61127b565b806001600160a01b0316826001600160a01b03167f8bfde939e79b7e6c603d67aa576e5b75a3f370334b14a9b0e5e263190034d31d60006040516105f0911515815260200190565b61077483837f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d0984611402565b60408051600181526001600160a01b03838116602083015280851692908616917f14e12f219a4f9023456dc7832e10119ab768b8ccefc8cb79bc6de0419781eeeb91015b60405180910390a3505050565b826107cf816114b7565b60005b8281101561087a57846001600160a01b031663787afde78585848181106107fb576107fb611b23565b90506020020160208101906108109190611b06565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561085157600080fd5b505af1158015610865573d6000803e3d6000fd5b505050508061087390611b39565b90506107d2565b5050505050565b8461088b816114b7565b6001600160a01b03851615610949576040516311a5465560e21b81526001600160a01b038681166004830152871690634695195490602401600060405180830381600087803b1580156108dd57600080fd5b505af11580156108f1573d6000803e3d6000fd5b50505050846001600160a01b0316639903ad386040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561093057600080fd5b505af1158015610944573d6000803e3d6000fd5b505050505b60005b83811015610a6d57866001600160a01b03166306cecba886868481811061097557610975611b23565b905060200201602081019061098a9190611b06565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b1580156109cb57600080fd5b505af11580156109df573d6000803e3d6000fd5b505050508484828181106109f5576109f5611b23565b9050602002016020810190610a0a9190611b06565b6001600160a01b0316639903ad386040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610a4457600080fd5b505af1158015610a58573d6000803e3d6000fd5b5050505080610a6690611b39565b905061094c565b506001600160a01b038216156106e4576040516354fbc49360e01b81526001600160a01b0383811660048301528716906354fbc49390602401600060405180830381600087803b158015610ac057600080fd5b505af1158015610ad4573d6000803e3d6000fd5b50505050816001600160a01b0316639903ad386040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610b1357600080fd5b505af1925050508015610b24575060015b156106e457505050505050565b81610b3b816114b7565b604051631ca0c40360e21b81526001600160a01b038381166004830152841690637283100c906024015b600060405180830381600087803b158015610b7f57600080fd5b505af1158015610b93573d6000803e3d6000fd5b50505050505050565b6000806000610bcc85857fe420d96e81cb4a6b2abb2366c4f93312d4e2ae878a7d4b22e73472fdad891f78610da7565b63ffffffff602082901c811697911695509350505050565b6001600160a01b038616610bfa57610bfa611b60565b6002546001600160a01b031615610c1357610c13611b60565b600280546001600160a01b0319166001600160a01b038816908117909155610c3d90600087610748565b610c4a86600086866104ab565b60005b81811015610b9357600254610c8e906001600160a01b03166000858585818110610c7957610c79611b23565b90506020020160208101906104349190611b06565b610c9781611b39565b9050610c4d565b610ca983838361127b565b505050565b610cb66114ee565b610cc06000611548565b565b610cce84848484611402565b50505050565b610ce283836106fb84611598565b60408051600181526001600160a01b038381166020830152600092820192909252818416918516907f168da2dec91b2e06e30d49955479383e76f71ba185807a8a5b75e2ed563e1d27906060016107b8565b610d6083837feae305fa863b373417e615b1044222e2806cefc7788d169ce6748a443c3f6cc4846111c8565b6040805160018152602081018390526001600160a01b0380851692908616917fc055c4a3853372c08a98805545379133f00f7261d956b9197729d67f37a82a5391016107b8565b6001600160a01b03808416600090815260016020908152604080832093861683529281528282208483529052908120805460ff16610e0c57506001600160a01b0384166000908152600160209081526040808320838052825280832085845290915290205b60010154949350505050565b600061065983837feae305fa863b373417e615b1044222e2806cefc7788d169ce6748a443c3f6cc4610da7565b6000610e568360006103858561136f565b6001149392505050565b803b6000819003610e84576040516380dddd7360e01b815260040160405180910390fd5b50610e9b826000610e948461136f565b60016111c8565b806001600160a01b0316826001600160a01b03167f8bfde939e79b7e6c603d67aa576e5b75a3f370334b14a9b0e5e263190034d31d60016040516105f0911515815260200190565b610f0e82827feae305fa863b373417e615b1044222e2806cefc7788d169ce6748a443c3f6cc461127b565b60408051600080825260208201526001600160a01b0380841692908516917fc055c4a3853372c08a98805545379133f00f7261d956b9197729d67f37a82a5391016105f0565b6000610f60838361133c565b9050610f6e8460008361127b565b826001600160a01b0316846001600160a01b03167fa22916b55c84301b9ba61d6494b1860339c075b3518e6db6f496bdf2a13d6ffc846000604051610fb4929190611bbc565b60405180910390a350505050565b610fd08383610e9484611598565b6040805160018082526001600160a01b03848116602084015292820152818416918516907f168da2dec91b2e06e30d49955479383e76f71ba185807a8a5b75e2ed563e1d27906060016107b8565b81611028816114b7565b6040516315a024e160e01b81526001600160a01b0383811660048301528416906315a024e190602401610b65565b6000611062848461133c565b905061107185600083856111c8565b836001600160a01b0316856001600160a01b03167fa22916b55c84301b9ba61d6494b1860339c075b3518e6db6f496bdf2a13d6ffc8585604051610569929190611bbc565b6110e182827f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d0961127b565b60408051600080825260208201526001600160a01b0380841692908516917f14e12f219a4f9023456dc7832e10119ab768b8ccefc8cb79bc6de0419781eeeb91016105f0565b6000611137848461038585611598565b600114949350505050565b61114a6114ee565b6001600160a01b0381166111b45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6111bd81611548565b50565b610cce848484845b836111d2816114b7565b60408051848152600160208201529081018390526001600160a01b0380861691908716907f33afe19ae6902b933890ff48190fabdc4cf7f5ab499be9c4d9d98e3b4562e3909060600160405180910390a350604080518082018252600180825260208083019485526001600160a01b039788166000908152828252848120979098168852958652828720948752939094529093209151825460ff19169015151782559151910155565b82611285816114b7565b826001600160a01b0316846001600160a01b03167f33afe19ae6902b933890ff48190fabdc4cf7f5ab499be9c4d9d98e3b4562e390846000806040516112de939291909283529015156020830152604082015260600190565b60405180910390a350604080518082018252600080825260208083018281526001600160a01b03978816835260018083528584209790981683529581528382209482529390935291209051815460ff19169015151781559051910155565b60008282604051602001611351929190611bde565b60405160208183030381529060405280519060200120905092915050565b6040805160208101829052603960608201527f6f72672e7375706572666c7569642d66696e616e63652e7375706572666c756960808201527f642e61707057686974654c697374696e672e666163746f72790000000000000060a08201526001600160a01b0383169181019190915260009060c0015b604051602081830303815290604052805190602001209050919050565b8361140c816114b7565b60408051848152600160208201526001600160a01b03848116828401529151868316928816917f33afe19ae6902b933890ff48190fabdc4cf7f5ab499be9c4d9d98e3b4562e390919081900360600190a35060408051808201825260018082526001600160a01b03938416602080840191825297851660009081528289528481209790951685529587528284209484529390955290209251835460ff19169015151783559051910155565b6002546001600160a01b038281169116146114d4576114d4611b60565b6000546001600160a01b031633146111bd576111bd611b60565b6000546001600160a01b03163314610cc05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016111ab565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040805160208101829052603260608201527f6f72672e7375706572666c7569642d66696e616e63652e7375706572666c756960808201527132173a393ab9ba32b22337b93bb0b93232b960711b60a08201526001600160a01b0383169181019190915260009060c0016113e5565b6001600160a01b03811681146111bd57600080fd5b6000806000806080858703121561163257600080fd5b843561163d81611607565b9350602085013561164d81611607565b93969395505050506040820135916060013590565b6000806040838503121561167557600080fd5b823561168081611607565b9150602083013561169081611607565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126116c257600080fd5b813567ffffffffffffffff808211156116dd576116dd61169b565b604051601f8301601f19908116603f011681019082821181831017156117055761170561169b565b8160405283815286602085880101111561171e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561175357600080fd5b833561175e81611607565b9250602084013561176e81611607565b9150604084013567ffffffffffffffff81111561178a57600080fd5b611796868287016116b1565b9150509250925092565b60008083601f8401126117b257600080fd5b50813567ffffffffffffffff8111156117ca57600080fd5b6020830191508360208260051b85010111156117e557600080fd5b9250929050565b60008060008060006060868803121561180457600080fd5b853561180f81611607565b9450602086013567ffffffffffffffff8082111561182c57600080fd5b61183889838a016117a0565b9096509450604088013591508082111561185157600080fd5b5061185e888289016117a0565b969995985093965092949392505050565b60008060006060848603121561188457600080fd5b833561188f81611607565b9250602084013561189f81611607565b915060408401356118af81611607565b809150509250925092565b6000806000604084860312156118cf57600080fd5b83356118da81611607565b9250602084013567ffffffffffffffff8111156118f657600080fd5b611902868287016117a0565b9497909650939450505050565b60008060008060006080868803121561192757600080fd5b853561193281611607565b9450602086013561194281611607565b9350604086013567ffffffffffffffff81111561195e57600080fd5b61196a888289016117a0565b909450925050606086013561197e81611607565b809150509295509295909350565b60008060008060008060a087890312156119a557600080fd5b86356119b081611607565b955060208701356119c081611607565b94506040870135935060608701359250608087013567ffffffffffffffff8111156119ea57600080fd5b6119f689828a016117a0565b979a9699509497509295939492505050565b600080600060608486031215611a1d57600080fd5b8335611a2881611607565b92506020840135611a3881611607565b929592945050506040919091013590565b60008060008060808587031215611a5f57600080fd5b8435611a6a81611607565b93506020850135611a7a81611607565b9250604085013591506060850135611a9181611607565b939692955090935050565b60008060008060808587031215611ab257600080fd5b8435611abd81611607565b93506020850135611acd81611607565b9250604085013567ffffffffffffffff811115611ae957600080fd5b611af5878288016116b1565b949793965093946060013593505050565b600060208284031215611b1857600080fd5b813561065981611607565b634e487b7160e01b600052603260045260246000fd5b600060018201611b5957634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052600160045260246000fd5b6000815180845260005b81811015611b9c57602081850181015186830182015201611b80565b506000602082860101526020601f19601f83011685010191505092915050565b604081526000611bcf6040830185611b76565b90508260208301529392505050565b60608152604160608201527f6f72672e7375706572666c7569642d66696e616e63652e7375706572666c756960808201527f642e61707057686974654c697374696e672e726567697374726174696f6e4b6560a0820152607960f81b60c082015260018060a01b038316602082015260e060408201526000611c6360e0830184611b76565b94935050505056fea264697066735822122075d1438fc66079d01a649b10d87ec52c020ed5c8b8dc35aab7e5e43c9ba23fd664736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "SF_GOV_ARRAYS_NOT_SAME_LENGTH";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_GOV_INVALID_LIQUIDATION_OR_PATRICIAN_PERIOD";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_GOV_MUST_BE_CONTRACT";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "factory";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "authorized";
            readonly type: "bool";
        }];
        readonly name: "AppFactoryAuthorizationChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "deployer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "appRegistrationKey";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationTs";
            readonly type: "uint256";
        }];
        readonly name: "AppRegistrationKeyChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isKeySet";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liquidationPeriod";
            readonly type: "uint256";
        }];
        readonly name: "CFAv1LiquidationPeriodChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isKeySet";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "ConfigChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isKeySet";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liquidationPeriod";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "patricianPeriod";
            readonly type: "uint256";
        }];
        readonly name: "PPPConfigurationChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isKeySet";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "rewardAddress";
            readonly type: "address";
        }];
        readonly name: "RewardAddressChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isKeySet";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "minimumDeposit";
            readonly type: "uint256";
        }];
        readonly name: "SuperTokenMinimumDepositChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isKeySet";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "forwarder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "TrustedForwarderChanged";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "factory";
            readonly type: "address";
        }];
        readonly name: "authorizeAppFactory";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }];
        readonly name: "batchUpdateSuperTokenLogic";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minimumDeposits";
            readonly type: "uint256[]";
        }];
        readonly name: "batchUpdateSuperTokenMinimumDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "deployer";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "registrationKey";
            readonly type: "string";
        }];
        readonly name: "clearAppRegistrationKey";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly name: "clearConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly name: "clearPPPConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly name: "clearRewardAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly name: "clearSuperTokenMinimumDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "forwarder";
            readonly type: "address";
        }];
        readonly name: "disableTrustedForwarder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "forwarder";
            readonly type: "address";
        }];
        readonly name: "enableTrustedForwarder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly name: "getConfigAsAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly name: "getConfigAsUint256";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "period";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly name: "getPPPConfig";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "liquidationPeriod";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "patricianPeriod";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly name: "getRewardAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly name: "getSuperTokenMinimumDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "rewardAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidationPeriod";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "patricianPeriod";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "trustedForwarders";
            readonly type: "address[]";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "factory";
            readonly type: "address";
        }];
        readonly name: "isAuthorizedAppFactory";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "forwarder";
            readonly type: "address";
        }];
        readonly name: "isTrustedForwarder";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }];
        readonly name: "registerAgreementClass";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newGov";
            readonly type: "address";
        }];
        readonly name: "replaceGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "deployer";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "registrationKey";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "expirationTs";
            readonly type: "uint256";
        }];
        readonly name: "setAppRegistrationKey";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "setConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "setConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "liquidationPeriod";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "patricianPeriod";
            readonly type: "uint256";
        }];
        readonly name: "setPPPConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "rewardAddress";
            readonly type: "address";
        }];
        readonly name: "setRewardAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "setSuperTokenMinimumDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "factory";
            readonly type: "address";
        }];
        readonly name: "unauthorizeAppFactory";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "hostNewLogic";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "agreementClassNewLogics";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "superTokenFactoryNewLogic";
            readonly type: "address";
        }];
        readonly name: "updateContracts";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "deployer";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "registrationKey";
            readonly type: "string";
        }];
        readonly name: "verifyAppRegistrationKey";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "validNow";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "expirationTs";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): TestGovernanceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestGovernance;
}
export {};
//# sourceMappingURL=TestGovernance__factory.d.ts.map