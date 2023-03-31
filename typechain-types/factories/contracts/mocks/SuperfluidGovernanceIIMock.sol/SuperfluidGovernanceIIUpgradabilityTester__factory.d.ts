import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperfluidGovernanceIIUpgradabilityTester, SuperfluidGovernanceIIUpgradabilityTesterInterface } from "../../../../contracts/mocks/SuperfluidGovernanceIIMock.sol/SuperfluidGovernanceIIUpgradabilityTester";
type SuperfluidGovernanceIIUpgradabilityTesterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperfluidGovernanceIIUpgradabilityTester__factory extends ContractFactory {
    constructor(...args: SuperfluidGovernanceIIUpgradabilityTesterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperfluidGovernanceIIUpgradabilityTester>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperfluidGovernanceIIUpgradabilityTester;
    connect(signer: Signer): SuperfluidGovernanceIIUpgradabilityTester__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611f628061007e6000396000f3fe608060405234801561001057600080fd5b506004361061021b5760003560e01c80637f0558e4116101255780639903ad38116100ad578063e447cc1d1161007c578063e447cc1d146104bd578063f047a2d9146104d0578063f2fde38b146104e3578063f79a8e63146104f6578063f99a38c41461023357600080fd5b80639903ad381461047c578063ab846f1a14610484578063cadf8f8514610497578063d099b6a0146104aa57600080fd5b80638abe04e9116100f45780638abe04e91461040f5780638b93b3f5146104325780638da5cb5b146104455780638ecbd87b14610456578063948eda5e1461046957600080fd5b80637f0558e4146103c857806380f70cba146103db5780638369a0f1146103ee5780638a7ff2f7146103fc57600080fd5b806344864b25116101a857806352d1902d1161017757806352d1902d14610357578063640b6cc914610387578063715018a61461039a57806378707cb8146103a25780637dce4f81146103b557600080fd5b806344864b25146103015780634522823514610314578063469519541461033c57806350d75d251461034f57600080fd5b806321964473116101ef57806321964473146102a257806325c955c3146102b557806332552908146102c857806342148deb146102db578063427942a4146102ee57600080fd5b806286d5551461022057806301a06b971461023557806311cf00f11461024857806319df62ab14610277575b600080fd5b61023361022e366004611956565b610509565b005b61023361024336600461199c565b6105d6565b61025b610256366004611a78565b61065a565b6040805192151583526020830191909152015b60405180910390f35b61028a61028536600461199c565b61068a565b6040516001600160a01b03909116815260200161026e565b6102336102b0366004611b26565b6106be565b6102336102c336600461199c565b61074a565b6102336102d6366004611ba9565b6107a6565b6102336102e9366004611bf4565b610823565b6102336102fc366004611c49565b6108df565b61023361030f36600461199c565b610b8f565b61032761032236600461199c565b610bfa565b6040805192835260208301919091520161026e565b61023361034a366004611cc6565b610c42565b61028a610c56565b7f42262e3b6ca1f8f82e158e1ac4ddf4e6273aa6499266ae17bcaceb23830542395b60405190815260200161026e565b610233610395366004611ce3565b610c85565b610233610c95565b6102336103b0366004611d24565b610ca9565b6102336103c3366004611ba9565b610cbb565b6102336103d6366004611ce3565b610d1b565b6103796103e9366004611ce3565b610d8e565b61028a6103e9366004611ce3565b61037961040a36600461199c565b610dff565b61042261041d36600461199c565b610e2c565b604051901515815260200161026e565b61023361044036600461199c565b610e47565b6000546001600160a01b031661028a565b61023361046436600461199c565b610eca565b610233610477366004611a78565b610f3b565b610233610fa9565b610233610492366004611ba9565b6110d2565b6102336104a536600461199c565b61112e565b6102336104b8366004611d77565b611166565b6102336104cb36600461199c565b6111c6565b6104226104de366004611ba9565b611237565b6102336104f1366004611cc6565b611252565b610233610504366004611956565b6112c8565b808211158061051c575063ffffffff8210155b8061052b575063ffffffff8110155b15610549576040516370b8cc0560e11b815260040160405180910390fd5b602082901b811761057c85857fe420d96e81cb4a6b2abb2366c4f93312d4e2ae878a7d4b22e73472fdad891f78846112d0565b6040805160018152602081018590529081018390526001600160a01b0380861691908716907f60a59221512cd8cbfb226200f7ba6f20dc4b38a3cf04993d17ea4e56d26aa186906060015b60405180910390a35050505050565b61060182827fe420d96e81cb4a6b2abb2366c4f93312d4e2ae878a7d4b22e73472fdad891f78611383565b60408051600080825260208201819052918101919091526001600160a01b0380831691908416907f60a59221512cd8cbfb226200f7ba6f20dc4b38a3cf04993d17ea4e56d26aa186906060015b60405180910390a35050565b60008060006106698585611444565b9050600061067987600084610d8e565b428110159890975095505050505050565b60006106b783837f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d09610d8e565b9392505050565b8281146106de576040516313ba1d5360e11b815260040160405180910390fd5b60005b8181101561074257610732868686848181106106ff576106ff611de1565b90506020020160208101906107149190611cc6565b85858581811061072657610726611de1565b90506020020135610d1b565b61073b81611df7565b90506106e1565b505050505050565b61075e82600061075984611477565b611383565b806001600160a01b0316826001600160a01b03167f8bfde939e79b7e6c603d67aa576e5b75a3f370334b14a9b0e5e263190034d31d600060405161064e911515815260200190565b6107d283837f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d098461150a565b60408051600181526001600160a01b03838116602083015280851692908616917f14e12f219a4f9023456dc7832e10119ab768b8ccefc8cb79bc6de0419781eeeb91015b60405180910390a3505050565b8261082d816115bf565b60005b828110156108d857846001600160a01b031663787afde785858481811061085957610859611de1565b905060200201602081019061086e9190611cc6565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b1580156108af57600080fd5b505af11580156108c3573d6000803e3d6000fd5b50505050806108d190611df7565b9050610830565b5050505050565b846108e9816115bf565b6001600160a01b038516156109a7576040516311a5465560e21b81526001600160a01b038681166004830152871690634695195490602401600060405180830381600087803b15801561093b57600080fd5b505af115801561094f573d6000803e3d6000fd5b50505050846001600160a01b0316639903ad386040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561098e57600080fd5b505af11580156109a2573d6000803e3d6000fd5b505050505b60005b83811015610acb57866001600160a01b03166306cecba88686848181106109d3576109d3611de1565b90506020020160208101906109e89190611cc6565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b158015610a2957600080fd5b505af1158015610a3d573d6000803e3d6000fd5b50505050848482818110610a5357610a53611de1565b9050602002016020810190610a689190611cc6565b6001600160a01b0316639903ad386040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610aa257600080fd5b505af1158015610ab6573d6000803e3d6000fd5b5050505080610ac490611df7565b90506109aa565b506001600160a01b03821615610742576040516354fbc49360e01b81526001600160a01b0383811660048301528716906354fbc49390602401600060405180830381600087803b158015610b1e57600080fd5b505af1158015610b32573d6000803e3d6000fd5b50505050816001600160a01b0316639903ad386040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610b7157600080fd5b505af1925050508015610b82575060015b1561074257505050505050565b81610b99816115bf565b604051631ca0c40360e21b81526001600160a01b038381166004830152841690637283100c906024015b600060405180830381600087803b158015610bdd57600080fd5b505af1158015610bf1573d6000803e3d6000fd5b50505050505050565b6000806000610c2a85857fe420d96e81cb4a6b2abb2366c4f93312d4e2ae878a7d4b22e73472fdad891f78610d8e565b63ffffffff602082901c811697911695509350505050565b610c4a6115c3565b610c53816115ee565b50565b6000610c807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b610c90838383611383565b505050565b610c9d611828565b610ca76000611882565b565b610cb58484848461150a565b50505050565b610cc98383610759846118d2565b60408051600181526001600160a01b038381166020830152600092820192909252818416918516907f168da2dec91b2e06e30d49955479383e76f71ba185807a8a5b75e2ed563e1d2790606001610816565b610d4783837feae305fa863b373417e615b1044222e2806cefc7788d169ce6748a443c3f6cc4846112d0565b6040805160018152602081018390526001600160a01b0380851692908616917fc055c4a3853372c08a98805545379133f00f7261d956b9197729d67f37a82a539101610816565b6001600160a01b03808416600090815260016020908152604080832093861683529281528282208483529052908120805460ff16610df357506001600160a01b0384166000908152600160209081526040808320838052825280832085845290915290205b60010154949350505050565b60006106b783837feae305fa863b373417e615b1044222e2806cefc7788d169ce6748a443c3f6cc4610d8e565b6000610e3d8360006103e985611477565b6001149392505050565b803b6000819003610e6b576040516380dddd7360e01b815260040160405180910390fd5b50610e82826000610e7b84611477565b60016112d0565b806001600160a01b0316826001600160a01b03167f8bfde939e79b7e6c603d67aa576e5b75a3f370334b14a9b0e5e263190034d31d600160405161064e911515815260200190565b610ef582827feae305fa863b373417e615b1044222e2806cefc7788d169ce6748a443c3f6cc4611383565b60408051600080825260208201526001600160a01b0380841692908516917fc055c4a3853372c08a98805545379133f00f7261d956b9197729d67f37a82a53910161064e565b6000610f478383611444565b9050610f5584600083611383565b826001600160a01b0316846001600160a01b03167fa22916b55c84301b9ba61d6494b1860339c075b3518e6db6f496bdf2a13d6ffc846000604051610f9b929190611e64565b60405180910390a350505050565b600054600160a81b900460ff1615808015610fd157506000546001600160a01b90910460ff16105b80610ff25750303b158015610ff25750600054600160a01b900460ff166001145b61105a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff60a01b1916600160a01b1790558015611087576000805460ff60a81b1916600160a81b1790555b8015610c53576000805460ff60a81b19169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b6110e08383610e7b846118d2565b6040805160018082526001600160a01b03848116602084015292820152818416918516907f168da2dec91b2e06e30d49955479383e76f71ba185807a8a5b75e2ed563e1d2790606001610816565b81611138816115bf565b6040516315a024e160e01b81526001600160a01b0383811660048301528416906315a024e190602401610bc3565b60006111728484611444565b905061118185600083856112d0565b836001600160a01b0316856001600160a01b03167fa22916b55c84301b9ba61d6494b1860339c075b3518e6db6f496bdf2a13d6ffc85856040516105c7929190611e64565b6111f182827f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d09611383565b60408051600080825260208201526001600160a01b0380841692908516917f14e12f219a4f9023456dc7832e10119ab768b8ccefc8cb79bc6de0419781eeeb910161064e565b600061124784846103e9856118d2565b600114949350505050565b61125a611828565b6001600160a01b0381166112bf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401611051565b610c5381611882565b610cb5848484845b836112da816115bf565b60408051848152600160208201529081018390526001600160a01b0380861691908716907f33afe19ae6902b933890ff48190fabdc4cf7f5ab499be9c4d9d98e3b4562e3909060600160405180910390a350604080518082018252600180825260208083019485526001600160a01b039788166000908152828252848120979098168852958652828720948752939094529093209151825460ff19169015151782559151910155565b8261138d816115bf565b826001600160a01b0316846001600160a01b03167f33afe19ae6902b933890ff48190fabdc4cf7f5ab499be9c4d9d98e3b4562e390846000806040516113e6939291909283529015156020830152604082015260600190565b60405180910390a350604080518082018252600080825260208083018281526001600160a01b03978816835260018083528584209790981683529581528382209482529390935291209051815460ff19169015151781559051910155565b60008282604051602001611459929190611e86565b60405160208183030381529060405280519060200120905092915050565b6040805160208101829052603960608201527f6f72672e7375706572666c7569642d66696e616e63652e7375706572666c756960808201527f642e61707057686974654c697374696e672e666163746f72790000000000000060a08201526001600160a01b0383169181019190915260009060c0015b604051602081830303815290604052805190602001209050919050565b83611514816115bf565b60408051848152600160208201526001600160a01b03848116828401529151868316928816917f33afe19ae6902b933890ff48190fabdc4cf7f5ab499be9c4d9d98e3b4562e390919081900360600190a35060408051808201825260018082526001600160a01b03938416602080840191825297851660009081528289528481209790951685529587528284209484529390955290209251835460ff19169015151783559051910155565b610c535b6000546001600160a01b03163314610ca757604051638c809f9b60e01b815260040160405180910390fd5b60006116187f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b03160361166e5760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c650000006044820152606401611051565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d09190611f13565b7f42262e3b6ca1f8f82e158e1ac4ddf4e6273aa6499266ae17bcaceb23830542391461174a5760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b6064820152608401611051565b6001600160a01b03811630036117a25760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f70000000000000006044820152606401611051565b6117ca817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f42262e3b6ca1f8f82e158e1ac4ddf4e6273aa6499266ae17bcaceb2383054239604080519182526001600160a01b0384166020830152016110c7565b6000546001600160a01b03163314610ca75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401611051565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040805160208101829052603260608201527f6f72672e7375706572666c7569642d66696e616e63652e7375706572666c756960808201527132173a393ab9ba32b22337b93bb0b93232b960711b60a08201526001600160a01b0383169181019190915260009060c0016114ed565b6001600160a01b0381168114610c5357600080fd5b6000806000806080858703121561196c57600080fd5b843561197781611941565b9350602085013561198781611941565b93969395505050506040820135916060013590565b600080604083850312156119af57600080fd5b82356119ba81611941565b915060208301356119ca81611941565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126119fc57600080fd5b813567ffffffffffffffff80821115611a1757611a176119d5565b604051601f8301601f19908116603f01168101908282118183101715611a3f57611a3f6119d5565b81604052838152866020858801011115611a5857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600060608486031215611a8d57600080fd5b8335611a9881611941565b92506020840135611aa881611941565b9150604084013567ffffffffffffffff811115611ac457600080fd5b611ad0868287016119eb565b9150509250925092565b60008083601f840112611aec57600080fd5b50813567ffffffffffffffff811115611b0457600080fd5b6020830191508360208260051b8501011115611b1f57600080fd5b9250929050565b600080600080600060608688031215611b3e57600080fd5b8535611b4981611941565b9450602086013567ffffffffffffffff80821115611b6657600080fd5b611b7289838a01611ada565b90965094506040880135915080821115611b8b57600080fd5b50611b9888828901611ada565b969995985093965092949392505050565b600080600060608486031215611bbe57600080fd5b8335611bc981611941565b92506020840135611bd981611941565b91506040840135611be981611941565b809150509250925092565b600080600060408486031215611c0957600080fd5b8335611c1481611941565b9250602084013567ffffffffffffffff811115611c3057600080fd5b611c3c86828701611ada565b9497909650939450505050565b600080600080600060808688031215611c6157600080fd5b8535611c6c81611941565b94506020860135611c7c81611941565b9350604086013567ffffffffffffffff811115611c9857600080fd5b611ca488828901611ada565b9094509250506060860135611cb881611941565b809150509295509295909350565b600060208284031215611cd857600080fd5b81356106b781611941565b600080600060608486031215611cf857600080fd5b8335611d0381611941565b92506020840135611d1381611941565b929592945050506040919091013590565b60008060008060808587031215611d3a57600080fd5b8435611d4581611941565b93506020850135611d5581611941565b9250604085013591506060850135611d6c81611941565b939692955090935050565b60008060008060808587031215611d8d57600080fd5b8435611d9881611941565b93506020850135611da881611941565b9250604085013567ffffffffffffffff811115611dc457600080fd5b611dd0878288016119eb565b949793965093946060013593505050565b634e487b7160e01b600052603260045260246000fd5b600060018201611e1757634e487b7160e01b600052601160045260246000fd5b5060010190565b6000815180845260005b81811015611e4457602081850181015186830182015201611e28565b506000602082860101526020601f19601f83011685010191505092915050565b604081526000611e776040830185611e1e565b90508260208301529392505050565b60608152604160608201527f6f72672e7375706572666c7569642d66696e616e63652e7375706572666c756960808201527f642e61707057686974654c697374696e672e726567697374726174696f6e4b6560a0820152607960f81b60c082015260018060a01b038316602082015260e060408201526000611f0b60e0830184611e1e565b949350505050565b600060208284031215611f2557600080fd5b505191905056fea2646970667358221220167e521c34704ff5128aed533fe4a6c069f81fb3f613778daf3b3646bd775ed464736f6c63430008130033";
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
        readonly inputs: readonly [];
        readonly name: "validateStorageLayout";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
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
    static createInterface(): SuperfluidGovernanceIIUpgradabilityTesterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperfluidGovernanceIIUpgradabilityTester;
}
export {};
//# sourceMappingURL=SuperfluidGovernanceIIUpgradabilityTester__factory.d.ts.map