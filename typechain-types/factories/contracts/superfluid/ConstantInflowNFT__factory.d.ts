import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ConstantInflowNFT, ConstantInflowNFTInterface } from "../../../contracts/superfluid/ConstantInflowNFT";
type ConstantInflowNFTConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConstantInflowNFT__factory extends ContractFactory {
    constructor(...args: ConstantInflowNFTConstructorParams);
    deploy(_cfaV1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ConstantInflowNFT>;
    getDeployTransaction(_cfaV1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ConstantInflowNFT;
    connect(signer: Signer): ConstantInflowNFT__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051611f59380380611f5983398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051611ec7610092600039600081816102150152610c820152611ec76000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806352d1902d116100de5780639903ad3811610097578063b943855e11610071578063b943855e146103b3578063c87b56dd146103c6578063dbddb26a146103d9578063e985e9c5146103e157600080fd5b80639903ad3814610385578063a22cb4651461038d578063b88d4fde146103a057600080fd5b806352d1902d146102ca5780636352211e146102fa57806370a082311461030d5780638d47859e14610321578063906571471461036a57806395d89b411461037d57600080fd5b80632b4116f71161014b57806342842e0e1161012557806342842e0e1461028957806342966c681461029c57806346951954146102af57806350d75d25146102c257600080fd5b80632b4116f71461024a5780632f3885601461026357806340c10f191461027657600080fd5b806301ffc9a71461019357806306fdde03146101bb578063081812fc146101d0578063095ea7b3146101fb578063181561011461021057806323b872dd14610237575b600080fd5b6101a66101a1366004611609565b6103f4565b60405190151581526020015b60405180910390f35b6101c3610446565b6040516101b29190611657565b6101e36101de36600461168a565b6104d8565b6040516001600160a01b0390911681526020016101b2565b61020e6102093660046116b8565b6104ff565b005b6101e37f000000000000000000000000000000000000000000000000000000000000000081565b61020e6102453660046116e4565b61058b565b6000546101e3906201000090046001600160a01b031681565b61020e61027136600461168a565b6105bd565b61020e6102843660046116b8565b6105c9565b61020e6102973660046116e4565b610676565b61020e6102aa36600461168a565b610691565b61020e6102bd366004611725565b610741565b6101e36107f2565b7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e5b6040519081526020016101b2565b6101e361030836600461168a565b610821565b6102ec61031b366004611725565b50600190565b61033461032f36600461168a565b610856565b6040805182516001600160a01b03908116825260208085015163ffffffff169083015292820151909216908201526060016101b2565b61020e61037836600461180f565b61095e565b6101c3610a68565b61020e610a77565b61020e61039b366004611885565b610b39565b61020e6103ae3660046118c3565b610b44565b6102ec6103c1366004611943565b610b77565b6101c36103d436600461168a565b610bb4565b6101c3610db5565b6101a66103ef366004611943565b610dd1565b60006301ffc9a760e01b6001600160e01b03198316148061042557506380ac58cd60e01b6001600160e01b03198316145b806104405750635b5e139f60e01b6001600160e01b03198316145b92915050565b60606001805461045590611971565b80601f016020809104026020016040519081016040528092919081815260200182805461048190611971565b80156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b5050505050905090565b60006104e382610dff565b506000908152600360205260409020546001600160a01b031690565b600061050a82610821565b9050806001600160a01b0316836001600160a01b03160361053e5760405163e4790b2560e01b815260040160405180910390fd5b336001600160a01b0382161480159061055e575061055c8133610dd1565b155b1561057c5760405163519a92c160e11b815260040160405180910390fd5b6105868383610e25565b505050565b6105953382610e93565b6105b2576040516312a8eb0360e11b815260040160405180910390fd5b610586838383610ef2565b6105c681610f0b565b50565b60008060029054906101000a90046001600160a01b03166001600160a01b0316630d9c12b56040518163ffffffff1660e01b8152600401602060405180830381865afa15801561061d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064191906119ab565b9050336001600160a01b0382161461066c5760405163740f7abd60e11b815260040160405180910390fd5b6105868383610f3b565b61058683838360405180602001604052806000815250610b44565b60008060029054906101000a90046001600160a01b03166001600160a01b0316630d9c12b56040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070991906119ab565b9050336001600160a01b038216146107345760405163740f7abd60e11b815260040160405180910390fd5b61073d82610f77565b5050565b600060029054906101000a90046001600160a01b03166001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610794573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b891906119ab565b6001600160a01b0316336001600160a01b0316146107e9576040516316ad36fd60e11b815260040160405180910390fd5b6105c681610fea565b600061081c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b60008061082d83611224565b90506001600160a01b0381166104405760405163eab95e3b60e01b815260040160405180910390fd5b604080516060810182526000808252602082018190529181019190915260008060029054906101000a90046001600160a01b03166001600160a01b0316630d9c12b56040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108eb91906119ab565b6040516346a3c2cf60e11b8152600481018590529091506001600160a01b03821690638d47859e90602401606060405180830381865afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095791906119c8565b9392505050565b600054610100900460ff161580801561097e5750600054600160ff909116105b806109985750303b158015610998575060005460ff166001145b6109bd5760405162461bcd60e51b81526004016109b490611a43565b60405180910390fd5b6000805460ff1916600117905580156109e0576000805461ff0019166101001790555b6000805462010000600160b01b031916620100006001600160a01b038716021790556001610a0e8482611adf565b506002610a1b8382611adf565b508015610a62576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b60606002805461045590611971565b600054610100900460ff1615808015610a975750600054600160ff909116105b80610ab15750303b158015610ab1575060005460ff166001145b610acd5760405162461bcd60e51b81526004016109b490611a43565b6000805460ff191660011790558015610af0576000805461ff0019166101001790555b80156105c6576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b61073d33838361123b565b610b4e3383610e93565b610b6b576040516312a8eb0360e11b815260040160405180910390fd5b610a62848484846112da565b604080516001600160a01b038085166020808401919091529084168284015282518083038401815260609092019092528051910120600090610957565b60606000610bc183610856565b60008054604080516395d89b4160e01b81529051939450620100009091046001600160a01b03169283916395d89b4191600480830192869291908290030181865afa158015610c14573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c3c9190810190611b9f565b6000805485516040808801519051631cd43d1160e31b81526001600160a01b036201000090940484166004820152918316602483015282166044820152929350909182917f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e88890606401608060405180830381865afa158015610cc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ced9190611c16565b5050915091506040518060600160405280602d8152602001611e65602d9139610d15466112e5565b610d29866001600160a01b03166014611378565b85610d3460126112e5565b8951610d4a906001600160a01b03166014611378565b610d628b604001516001600160a01b03166014611378565b610d79886bffffffffffffffffffffffff166112e5565b610d828a6112e5565b604051602001610d9a99989796959493929190611c76565b60405160208183030381529060405295505050505050919050565b6040518060600160405280602d8152602001611e65602d913981565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b610e0881611514565b6105c65760405163eab95e3b60e01b815260040160405180910390fd5b600081815260036020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610e5a82611224565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610e9f83610821565b9050806001600160a01b0316846001600160a01b03161480610ec65750610ec68185610dd1565b80610eea5750836001600160a01b0316610edf846104d8565b6001600160a01b0316145b949350505050565b60405163553a3f6560e11b815260040160405180910390fd5b6040518181527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce790602001610b2e565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610f8282610856565b600083815260036020526040902080546001600160a01b031916905590508160006001600160a01b031682604001516001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006110147f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b03160361106a5760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c6500000060448201526064016109b4565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cc9190611dde565b7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e146111465760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b60648201526084016109b4565b6001600160a01b038116300361119e5760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f700000000000000060448201526064016109b4565b6111c6817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e604080519182526001600160a01b038416602083015201610b2e565b60008061123083610856565b604001519392505050565b816001600160a01b0316836001600160a01b03160361126d5760405163d3c7732960e01b815260040160405180910390fd5b6001600160a01b03838116600081815260046020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610a62848484610ef2565b606060006112f283611531565b600101905060008167ffffffffffffffff81111561131257611312611742565b6040519080825280601f01601f19166020018201604052801561133c576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461134657509392505050565b60606000611387836002611e0d565b611392906002611e24565b67ffffffffffffffff8111156113aa576113aa611742565b6040519080825280601f01601f1916602001820160405280156113d4576020820181803683370190505b509050600360fc1b816000815181106113ef576113ef611e37565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061141e5761141e611e37565b60200101906001600160f81b031916908160001a9053506000611442846002611e0d565b61144d906001611e24565b90505b60018111156114c5576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061148157611481611e37565b1a60f81b82828151811061149757611497611e37565b60200101906001600160f81b031916908160001a90535060049490941c936114be81611e4d565b9050611450565b5083156109575760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016109b4565b60008061152083611224565b6001600160a01b0316141592915050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106115705772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061159c576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106115ba57662386f26fc10000830492506010015b6305f5e10083106115d2576305f5e100830492506008015b61271083106115e657612710830492506004015b606483106115f8576064830492506002015b600a83106104405760010192915050565b60006020828403121561161b57600080fd5b81356001600160e01b03198116811461095757600080fd5b60005b8381101561164e578181015183820152602001611636565b50506000910152565b6020815260008251806020840152611676816040850160208701611633565b601f01601f19169190910160400192915050565b60006020828403121561169c57600080fd5b5035919050565b6001600160a01b03811681146105c657600080fd5b600080604083850312156116cb57600080fd5b82356116d6816116a3565b946020939093013593505050565b6000806000606084860312156116f957600080fd5b8335611704816116a3565b92506020840135611714816116a3565b929592945050506040919091013590565b60006020828403121561173757600080fd5b8135610957816116a3565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561178157611781611742565b604052919050565b600067ffffffffffffffff8211156117a3576117a3611742565b50601f01601f191660200190565b60006117c46117bf84611789565b611758565b90508281528383830111156117d857600080fd5b828260208301376000602084830101529392505050565b600082601f83011261180057600080fd5b610957838335602085016117b1565b60008060006060848603121561182457600080fd5b833561182f816116a3565b9250602084013567ffffffffffffffff8082111561184c57600080fd5b611858878388016117ef565b9350604086013591508082111561186e57600080fd5b5061187b868287016117ef565b9150509250925092565b6000806040838503121561189857600080fd5b82356118a3816116a3565b9150602083013580151581146118b857600080fd5b809150509250929050565b600080600080608085870312156118d957600080fd5b84356118e4816116a3565b935060208501356118f4816116a3565b925060408501359150606085013567ffffffffffffffff81111561191757600080fd5b8501601f8101871361192857600080fd5b611937878235602084016117b1565b91505092959194509250565b6000806040838503121561195657600080fd5b8235611961816116a3565b915060208301356118b8816116a3565b600181811c9082168061198557607f821691505b6020821081036119a557634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156119bd57600080fd5b8151610957816116a3565b6000606082840312156119da57600080fd5b6040516060810181811067ffffffffffffffff821117156119fd576119fd611742565b6040528251611a0b816116a3565b8152602083015163ffffffff81168114611a2457600080fd5b60208201526040830151611a37816116a3565b60408201529392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f82111561058657600081815260208120601f850160051c81016020861015611ab85750805b601f850160051c820191505b81811015611ad757828155600101611ac4565b505050505050565b815167ffffffffffffffff811115611af957611af9611742565b611b0d81611b078454611971565b84611a91565b602080601f831160018114611b425760008415611b2a5750858301515b600019600386901b1c1916600185901b178555611ad7565b600085815260208120601f198616915b82811015611b7157888601518255948401946001909101908401611b52565b5085821015611b8f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215611bb157600080fd5b815167ffffffffffffffff811115611bc857600080fd5b8201601f81018413611bd957600080fd5b8051611be76117bf82611789565b818152856020838501011115611bfc57600080fd5b611c0d826020830160208601611633565b95945050505050565b60008060008060808587031215611c2c57600080fd5b84519350602085015180600b0b8114611c4457600080fd5b6040860151606090960151949790965092505050565b60008151611c6c818560208601611633565b9290920192915050565b60008a51611c88818460208f01611633565b693f636861696e5f69643d60b01b9083019081528a51611caf81600a840160208f01611633565b6e26746f6b656e5f616464726573733d60881b600a92909101918201528951611cdf816019840160208e01611633565b6d26746f6b656e5f73796d626f6c3d60901b601992909101918201528851611d0e816027840160208d01611633565b6f26746f6b656e5f646563696d616c733d60801b602792909101918201528751611d3f816037840160208c01611633565b611dcd611dc7611daf611da9611d93611d8d611d77611d716037898b0101672673656e6465723d60c01b815260080190565b8f611c5a565b692672656365697665723d60b01b8152600a0190565b8c611c5a565b6926666c6f77526174653d60b01b8152600a0190565b89611c5a565b6b2673746172745f646174653d60a01b8152600c0190565b86611c5a565b9d9c50505050505050505050505050565b600060208284031215611df057600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761044057610440611df7565b8082018082111561044057610440611df7565b634e487b7160e01b600052603260045260246000fd5b600081611e5c57611e5c611df7565b50600019019056fe68747470733a2f2f6e66742e7375706572666c7569642e66696e616e63652f6366612f76312f6765746d657461a2646970667358221220f92591c2d600dc67acfe0836e84e6a92c5f32b12baa285c770d1fa88a7cf7b6864736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IConstantFlowAgreementV1";
            readonly name: "_cfaV1";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_APPROVE_CALLER_NOT_OWNER_OR_APPROVED_FOR_ALL";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_APPROVE_TO_CALLER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_APPROVE_TO_CURRENT_OWNER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_INVALID_TOKEN_ID";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_ONLY_HOST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_TRANSFER_CALLER_NOT_OWNER_OR_APPROVED_FOR_ALL";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_TRANSFER_FROM_INCORRECT_OWNER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_TRANSFER_IS_NOT_ALLOWED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_TRANSFER_TO_ZERO_ADDRESS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CIF_NFT_ONLY_CONSTANT_OUTFLOW";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "approved";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
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
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "MetadataUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASE_URI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CONSTANT_FLOW_AGREEMENT_V1";
        readonly outputs: readonly [{
            readonly internalType: "contract IConstantFlowAgreementV1";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "burn";
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
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "flowDataByTokenId";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "flowSender";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "flowStartDate";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "flowReceiver";
                readonly type: "address";
            }];
            readonly internalType: "struct IFlowNFTBase.FlowNFTData";
            readonly name: "flowData";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "getTokenId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superTokenContract";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "nftName";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "nftSymbol";
            readonly type: "string";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "newTokenId";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
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
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "superToken";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "triggerMetadataUpdate";
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
    }];
    static createInterface(): ConstantInflowNFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConstantInflowNFT;
}
export {};
//# sourceMappingURL=ConstantInflowNFT__factory.d.ts.map