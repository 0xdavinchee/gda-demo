import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperfluidGovernanceII, SuperfluidGovernanceIIInterface } from "../../../../contracts/gov/SuperfluidGovernanceII.sol/SuperfluidGovernanceII";
type SuperfluidGovernanceIIConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperfluidGovernanceII__factory extends ContractFactory {
    constructor(...args: SuperfluidGovernanceIIConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperfluidGovernanceII>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperfluidGovernanceII;
    connect(signer: Signer): SuperfluidGovernanceII__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611f578061007e6000396000f3fe608060405234801561001057600080fd5b50600436106102105760003560e01c80637dce4f8111610125578063948eda5e116100ad578063d099b6a01161007c578063d099b6a01461049f578063e447cc1d146104b2578063f047a2d9146104c5578063f2fde38b146104d8578063f79a8e63146104eb57600080fd5b8063948eda5e1461045e5780639903ad3814610471578063ab846f1a14610479578063cadf8f851461048c57600080fd5b80638a7ff2f7116100f45780638a7ff2f7146103f15780638abe04e9146104045780638b93b3f5146104275780638da5cb5b1461043a5780638ecbd87b1461044b57600080fd5b80637dce4f81146103aa5780637f0558e4146103bd57806380f70cba146103d05780638369a0f1146103e357600080fd5b8063427942a4116101a857806350d75d251161017757806350d75d251461034457806352d1902d1461034c578063640b6cc91461037c578063715018a61461038f57806378707cb81461039757600080fd5b8063427942a4146102e357806344864b25146102f65780634522823514610309578063469519541461033157600080fd5b806321964473116101e4578063219644731461029757806325c955c3146102aa57806332552908146102bd57806342148deb146102d057600080fd5b806286d5551461021557806301a06b971461022a57806311cf00f11461023d57806319df62ab1461026c575b600080fd5b61022861022336600461194b565b6104fe565b005b610228610238366004611991565b6105cb565b61025061024b366004611a6d565b61064f565b6040805192151583526020830191909152015b60405180910390f35b61027f61027a366004611991565b61067f565b6040516001600160a01b039091168152602001610263565b6102286102a5366004611b1b565b6106b3565b6102286102b8366004611991565b61073f565b6102286102cb366004611b9e565b61079b565b6102286102de366004611be9565b610818565b6102286102f1366004611c3e565b6108d4565b610228610304366004611991565b610b84565b61031c610317366004611991565b610bef565b60408051928352602083019190915201610263565b61022861033f366004611cbb565b610c37565b61027f610c4b565b7f42262e3b6ca1f8f82e158e1ac4ddf4e6273aa6499266ae17bcaceb23830542395b604051908152602001610263565b61022861038a366004611cd8565b610c7a565b610228610c8a565b6102286103a5366004611d19565b610c9e565b6102286103b8366004611b9e565b610cb0565b6102286103cb366004611cd8565b610d10565b61036e6103de366004611cd8565b610d83565b61027f6103de366004611cd8565b61036e6103ff366004611991565b610df4565b610417610412366004611991565b610e21565b6040519015158152602001610263565b610228610435366004611991565b610e3c565b6000546001600160a01b031661027f565b610228610459366004611991565b610ebf565b61022861046c366004611a6d565b610f30565b610228610f9e565b610228610487366004611b9e565b6110c7565b61022861049a366004611991565b611123565b6102286104ad366004611d6c565b61115b565b6102286104c0366004611991565b6111bb565b6104176104d3366004611b9e565b61122c565b6102286104e6366004611cbb565b611247565b6102286104f936600461194b565b6112bd565b8082111580610511575063ffffffff8210155b80610520575063ffffffff8110155b1561053e576040516370b8cc0560e11b815260040160405180910390fd5b602082901b811761057185857fe420d96e81cb4a6b2abb2366c4f93312d4e2ae878a7d4b22e73472fdad891f78846112c5565b6040805160018152602081018590529081018390526001600160a01b0380861691908716907f60a59221512cd8cbfb226200f7ba6f20dc4b38a3cf04993d17ea4e56d26aa186906060015b60405180910390a35050505050565b6105f682827fe420d96e81cb4a6b2abb2366c4f93312d4e2ae878a7d4b22e73472fdad891f78611378565b60408051600080825260208201819052918101919091526001600160a01b0380831691908416907f60a59221512cd8cbfb226200f7ba6f20dc4b38a3cf04993d17ea4e56d26aa186906060015b60405180910390a35050565b600080600061065e8585611439565b9050600061066e87600084610d83565b428110159890975095505050505050565b60006106ac83837f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d09610d83565b9392505050565b8281146106d3576040516313ba1d5360e11b815260040160405180910390fd5b60005b8181101561073757610727868686848181106106f4576106f4611dd6565b90506020020160208101906107099190611cbb565b85858581811061071b5761071b611dd6565b90506020020135610d10565b61073081611dec565b90506106d6565b505050505050565b61075382600061074e8461146c565b611378565b806001600160a01b0316826001600160a01b03167f8bfde939e79b7e6c603d67aa576e5b75a3f370334b14a9b0e5e263190034d31d6000604051610643911515815260200190565b6107c783837f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d09846114ff565b60408051600181526001600160a01b03838116602083015280851692908616917f14e12f219a4f9023456dc7832e10119ab768b8ccefc8cb79bc6de0419781eeeb91015b60405180910390a3505050565b82610822816115b4565b60005b828110156108cd57846001600160a01b031663787afde785858481811061084e5761084e611dd6565b90506020020160208101906108639190611cbb565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b1580156108a457600080fd5b505af11580156108b8573d6000803e3d6000fd5b50505050806108c690611dec565b9050610825565b5050505050565b846108de816115b4565b6001600160a01b0385161561099c576040516311a5465560e21b81526001600160a01b038681166004830152871690634695195490602401600060405180830381600087803b15801561093057600080fd5b505af1158015610944573d6000803e3d6000fd5b50505050846001600160a01b0316639903ad386040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561098357600080fd5b505af1158015610997573d6000803e3d6000fd5b505050505b60005b83811015610ac057866001600160a01b03166306cecba88686848181106109c8576109c8611dd6565b90506020020160208101906109dd9190611cbb565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b158015610a1e57600080fd5b505af1158015610a32573d6000803e3d6000fd5b50505050848482818110610a4857610a48611dd6565b9050602002016020810190610a5d9190611cbb565b6001600160a01b0316639903ad386040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610a9757600080fd5b505af1158015610aab573d6000803e3d6000fd5b5050505080610ab990611dec565b905061099f565b506001600160a01b03821615610737576040516354fbc49360e01b81526001600160a01b0383811660048301528716906354fbc49390602401600060405180830381600087803b158015610b1357600080fd5b505af1158015610b27573d6000803e3d6000fd5b50505050816001600160a01b0316639903ad386040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610b6657600080fd5b505af1925050508015610b77575060015b1561073757505050505050565b81610b8e816115b4565b604051631ca0c40360e21b81526001600160a01b038381166004830152841690637283100c906024015b600060405180830381600087803b158015610bd257600080fd5b505af1158015610be6573d6000803e3d6000fd5b50505050505050565b6000806000610c1f85857fe420d96e81cb4a6b2abb2366c4f93312d4e2ae878a7d4b22e73472fdad891f78610d83565b63ffffffff602082901c811697911695509350505050565b610c3f6115b8565b610c48816115e3565b50565b6000610c757f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b610c85838383611378565b505050565b610c9261181d565b610c9c6000611877565b565b610caa848484846114ff565b50505050565b610cbe838361074e846118c7565b60408051600181526001600160a01b038381166020830152600092820192909252818416918516907f168da2dec91b2e06e30d49955479383e76f71ba185807a8a5b75e2ed563e1d279060600161080b565b610d3c83837feae305fa863b373417e615b1044222e2806cefc7788d169ce6748a443c3f6cc4846112c5565b6040805160018152602081018390526001600160a01b0380851692908616917fc055c4a3853372c08a98805545379133f00f7261d956b9197729d67f37a82a53910161080b565b6001600160a01b03808416600090815260016020908152604080832093861683529281528282208483529052908120805460ff16610de857506001600160a01b0384166000908152600160209081526040808320838052825280832085845290915290205b60010154949350505050565b60006106ac83837feae305fa863b373417e615b1044222e2806cefc7788d169ce6748a443c3f6cc4610d83565b6000610e328360006103de8561146c565b6001149392505050565b803b6000819003610e60576040516380dddd7360e01b815260040160405180910390fd5b50610e77826000610e708461146c565b60016112c5565b806001600160a01b0316826001600160a01b03167f8bfde939e79b7e6c603d67aa576e5b75a3f370334b14a9b0e5e263190034d31d6001604051610643911515815260200190565b610eea82827feae305fa863b373417e615b1044222e2806cefc7788d169ce6748a443c3f6cc4611378565b60408051600080825260208201526001600160a01b0380841692908516917fc055c4a3853372c08a98805545379133f00f7261d956b9197729d67f37a82a539101610643565b6000610f3c8383611439565b9050610f4a84600083611378565b826001600160a01b0316846001600160a01b03167fa22916b55c84301b9ba61d6494b1860339c075b3518e6db6f496bdf2a13d6ffc846000604051610f90929190611e59565b60405180910390a350505050565b600054600160a81b900460ff1615808015610fc657506000546001600160a01b90910460ff16105b80610fe75750303b158015610fe75750600054600160a01b900460ff166001145b61104f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff60a01b1916600160a01b179055801561107c576000805460ff60a81b1916600160a81b1790555b8015610c48576000805460ff60a81b19169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b6110d58383610e70846118c7565b6040805160018082526001600160a01b03848116602084015292820152818416918516907f168da2dec91b2e06e30d49955479383e76f71ba185807a8a5b75e2ed563e1d279060600161080b565b8161112d816115b4565b6040516315a024e160e01b81526001600160a01b0383811660048301528416906315a024e190602401610bb8565b60006111678484611439565b905061117685600083856112c5565b836001600160a01b0316856001600160a01b03167fa22916b55c84301b9ba61d6494b1860339c075b3518e6db6f496bdf2a13d6ffc85856040516105bc929190611e59565b6111e682827f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d09611378565b60408051600080825260208201526001600160a01b0380841692908516917f14e12f219a4f9023456dc7832e10119ab768b8ccefc8cb79bc6de0419781eeeb9101610643565b600061123c84846103de856118c7565b600114949350505050565b61124f61181d565b6001600160a01b0381166112b45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401611046565b610c4881611877565b610caa848484845b836112cf816115b4565b60408051848152600160208201529081018390526001600160a01b0380861691908716907f33afe19ae6902b933890ff48190fabdc4cf7f5ab499be9c4d9d98e3b4562e3909060600160405180910390a350604080518082018252600180825260208083019485526001600160a01b039788166000908152828252848120979098168852958652828720948752939094529093209151825460ff19169015151782559151910155565b82611382816115b4565b826001600160a01b0316846001600160a01b03167f33afe19ae6902b933890ff48190fabdc4cf7f5ab499be9c4d9d98e3b4562e390846000806040516113db939291909283529015156020830152604082015260600190565b60405180910390a350604080518082018252600080825260208083018281526001600160a01b03978816835260018083528584209790981683529581528382209482529390935291209051815460ff19169015151781559051910155565b6000828260405160200161144e929190611e7b565b60405160208183030381529060405280519060200120905092915050565b6040805160208101829052603960608201527f6f72672e7375706572666c7569642d66696e616e63652e7375706572666c756960808201527f642e61707057686974654c697374696e672e666163746f72790000000000000060a08201526001600160a01b0383169181019190915260009060c0015b604051602081830303815290604052805190602001209050919050565b83611509816115b4565b60408051848152600160208201526001600160a01b03848116828401529151868316928816917f33afe19ae6902b933890ff48190fabdc4cf7f5ab499be9c4d9d98e3b4562e390919081900360600190a35060408051808201825260018082526001600160a01b03938416602080840191825297851660009081528289528481209790951685529587528284209484529390955290209251835460ff19169015151783559051910155565b610c485b6000546001600160a01b03163314610c9c57604051638c809f9b60e01b815260040160405180910390fd5b600061160d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316036116635760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c650000006044820152606401611046565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c59190611f08565b7f42262e3b6ca1f8f82e158e1ac4ddf4e6273aa6499266ae17bcaceb23830542391461173f5760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b6064820152608401611046565b6001600160a01b03811630036117975760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f70000000000000006044820152606401611046565b6117bf817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f42262e3b6ca1f8f82e158e1ac4ddf4e6273aa6499266ae17bcaceb2383054239604080519182526001600160a01b0384166020830152016110bc565b6000546001600160a01b03163314610c9c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401611046565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040805160208101829052603260608201527f6f72672e7375706572666c7569642d66696e616e63652e7375706572666c756960808201527132173a393ab9ba32b22337b93bb0b93232b960711b60a08201526001600160a01b0383169181019190915260009060c0016114e2565b6001600160a01b0381168114610c4857600080fd5b6000806000806080858703121561196157600080fd5b843561196c81611936565b9350602085013561197c81611936565b93969395505050506040820135916060013590565b600080604083850312156119a457600080fd5b82356119af81611936565b915060208301356119bf81611936565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126119f157600080fd5b813567ffffffffffffffff80821115611a0c57611a0c6119ca565b604051601f8301601f19908116603f01168101908282118183101715611a3457611a346119ca565b81604052838152866020858801011115611a4d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600060608486031215611a8257600080fd5b8335611a8d81611936565b92506020840135611a9d81611936565b9150604084013567ffffffffffffffff811115611ab957600080fd5b611ac5868287016119e0565b9150509250925092565b60008083601f840112611ae157600080fd5b50813567ffffffffffffffff811115611af957600080fd5b6020830191508360208260051b8501011115611b1457600080fd5b9250929050565b600080600080600060608688031215611b3357600080fd5b8535611b3e81611936565b9450602086013567ffffffffffffffff80821115611b5b57600080fd5b611b6789838a01611acf565b90965094506040880135915080821115611b8057600080fd5b50611b8d88828901611acf565b969995985093965092949392505050565b600080600060608486031215611bb357600080fd5b8335611bbe81611936565b92506020840135611bce81611936565b91506040840135611bde81611936565b809150509250925092565b600080600060408486031215611bfe57600080fd5b8335611c0981611936565b9250602084013567ffffffffffffffff811115611c2557600080fd5b611c3186828701611acf565b9497909650939450505050565b600080600080600060808688031215611c5657600080fd5b8535611c6181611936565b94506020860135611c7181611936565b9350604086013567ffffffffffffffff811115611c8d57600080fd5b611c9988828901611acf565b9094509250506060860135611cad81611936565b809150509295509295909350565b600060208284031215611ccd57600080fd5b81356106ac81611936565b600080600060608486031215611ced57600080fd5b8335611cf881611936565b92506020840135611d0881611936565b929592945050506040919091013590565b60008060008060808587031215611d2f57600080fd5b8435611d3a81611936565b93506020850135611d4a81611936565b9250604085013591506060850135611d6181611936565b939692955090935050565b60008060008060808587031215611d8257600080fd5b8435611d8d81611936565b93506020850135611d9d81611936565b9250604085013567ffffffffffffffff811115611db957600080fd5b611dc5878288016119e0565b949793965093946060013593505050565b634e487b7160e01b600052603260045260246000fd5b600060018201611e0c57634e487b7160e01b600052601160045260246000fd5b5060010190565b6000815180845260005b81811015611e3957602081850181015186830182015201611e1d565b506000602082860101526020601f19601f83011685010191505092915050565b604081526000611e6c6040830185611e13565b90508260208301529392505050565b60608152604160608201527f6f72672e7375706572666c7569642d66696e616e63652e7375706572666c756960808201527f642e61707057686974654c697374696e672e726567697374726174696f6e4b6560a0820152607960f81b60c082015260018060a01b038316602082015260e060408201526000611f0060e0830184611e13565b949350505050565b600060208284031215611f1a57600080fd5b505191905056fea2646970667358221220e810a8170c79408ca361669580eb444fabfcb0071c2110809f328cb7884b2f6564736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "SF_GOV_ARRAYS_NOT_SAME_LENGTH";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_GOV_II_ONLY_OWNER";
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
        readonly inputs: readonly [];
        readonly name: "castrate";
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
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "updateCode";
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
    static createInterface(): SuperfluidGovernanceIIInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperfluidGovernanceII;
}
export {};
//# sourceMappingURL=SuperfluidGovernanceII__factory.d.ts.map