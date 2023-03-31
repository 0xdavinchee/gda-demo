import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ConstantOutflowNFT, ConstantOutflowNFTInterface } from "../../../contracts/superfluid/ConstantOutflowNFT";
type ConstantOutflowNFTConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConstantOutflowNFT__factory extends ContractFactory {
    constructor(...args: ConstantOutflowNFTConstructorParams);
    deploy(_cfaV1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ConstantOutflowNFT>;
    getDeployTransaction(_cfaV1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ConstantOutflowNFT;
    connect(signer: Signer): ConstantOutflowNFT__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051620022053803806200220583398101604081905261003191610042565b6001600160a01b0316608052610072565b60006020828403121561005457600080fd5b81516001600160a01b038116811461006b57600080fd5b9392505050565b60805161215b620000aa600039600081816102430152818161047f01528181610ad301528181610d2f0152610eb7015261215b6000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636352211e116100f9578063b62b364611610097578063c87b56dd11610071578063c87b56dd146103e1578063dbddb26a146103f4578063e985e9c5146103fc578063f1391f731461040f57600080fd5b8063b62b3646146103a8578063b88d4fde146103bb578063b943855e146103ce57600080fd5b806390657147116100d3578063906571471461037257806395d89b41146103855780639903ad381461038d578063a22cb4651461039557600080fd5b80636352211e1461030257806370a08231146103155780638d47859e1461032957600080fd5b806323b872dd1161016657806342842e0e1161014057806342842e0e146102a457806346951954146102b757806350d75d25146102ca57806352d1902d146102d257600080fd5b806323b872dd146102655780632b4116f7146102785780632f3885601461029157600080fd5b806301ffc9a7146101ae5780630447a2cd146101d657806306fdde03146101eb578063081812fc14610200578063095ea7b31461022b578063181561011461023e575b600080fd5b6101c16101bc366004611918565b610422565b60405190151581526020015b60405180910390f35b6101e96101e4366004611957565b610474565b005b6101f36105cf565b6040516101cd91906119b4565b61021361020e3660046119e7565b610661565b6040516001600160a01b0390911681526020016101cd565b6101e9610239366004611a00565b610688565b6102137f000000000000000000000000000000000000000000000000000000000000000081565b6101e9610273366004611a2c565b61070f565b600054610213906201000090046001600160a01b031681565b6101e961029f3660046119e7565b610741565b6101e96102b2366004611a2c565b61074d565b6101e96102c5366004611a6d565b610768565b610213610819565b7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b7845b6040519081526020016101cd565b6102136103103660046119e7565b610848565b6102f4610323366004611a6d565b50600190565b61033c6103373660046119e7565b61087e565b6040805182516001600160a01b03908116825260208085015163ffffffff169083015292820151909216908201526060016101cd565b6101e9610380366004611b57565b6108de565b6101f36109e8565b6101e96109f7565b6101e96103a3366004611bcd565b610ab9565b6101e96103b6366004611957565b610ac8565b6101e96103c9366004611c00565b610c1b565b6102f46103dc366004611957565b610c4e565b6101f36103ef3660046119e7565b610c61565b6101f3610e62565b6101c161040a366004611957565b610e7e565b6101e961041d366004611957565b610eac565b60006301ffc9a760e01b6001600160e01b03198316148061045357506380ac58cd60e01b6001600160e01b03198316145b8061046e5750635b5e139f60e01b6001600160e01b03198316145b92915050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104bd5760405163054fae5960e01b815260040160405180910390fd5b60006104c98383610fdc565b6000818152601660205260409020549091506001600160a01b0316156105ca576104f281611014565b60008060029054906101000a90046001600160a01b03166001600160a01b031663d50911cc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610546573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056a9190611c80565b604051630179c42b60e51b8152600481018490529091506001600160a01b03821690632f388560906024015b600060405180830381600087803b1580156105b057600080fd5b505af11580156105c4573d6000803e3d6000fd5b50505050505b505050565b6060600180546105de90611c9d565b80601f016020809104026020016040519081016040528092919081815260200182805461060a90611c9d565b80156106575780601f1061062c57610100808354040283529160200191610657565b820191906000526020600020905b81548152906001019060200180831161063a57829003601f168201915b5050505050905090565b600061066c82611044565b506000908152600360205260409020546001600160a01b031690565b600061069382610848565b9050806001600160a01b0316836001600160a01b0316036106c75760405163e4790b2560e01b815260040160405180910390fd5b336001600160a01b038216148015906106e757506106e58133610e7e565b155b156107055760405163519a92c160e11b815260040160405180910390fd5b6105ca8383611079565b61071933826110e0565b610736576040516312a8eb0360e11b815260040160405180910390fd5b6105ca83838361113f565b61074a81611014565b50565b6105ca83838360405180602001604052806000815250610c1b565b600060029054906101000a90046001600160a01b03166001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107df9190611c80565b6001600160a01b0316336001600160a01b031614610810576040516316ad36fd60e11b815260040160405180910390fd5b61074a81611158565b60006108437f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b6000818152601660205260408120546001600160a01b03168061046e5760405163eab95e3b60e01b815260040160405180910390fd5b60408051606080820183526000808352602080840182905292840181905293845260168252928290208251938401835280546001600160a01b038082168652600160a01b90910463ffffffff169285019290925260010154169082015290565b600054610100900460ff16158080156108fe5750600054600160ff909116105b806109185750303b158015610918575060005460ff166001145b61093d5760405162461bcd60e51b815260040161093490611cd7565b60405180910390fd5b6000805460ff191660011790558015610960576000805461ff0019166101001790555b6000805462010000600160b01b031916620100006001600160a01b03871602179055600161098e8482611d73565b50600261099b8382611d73565b5080156109e2576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b6060600280546105de90611c9d565b600054610100900460ff1615808015610a175750600054600160ff909116105b80610a315750303b158015610a31575060005460ff166001145b610a4d5760405162461bcd60e51b815260040161093490611cd7565b6000805460ff191660011790558015610a70576000805461ff0019166101001790555b801561074a576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b610ac4338383611392565b5050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b115760405163054fae5960e01b815260040160405180910390fd5b6000610b1d8383610fdc565b6000818152601660205260409020549091506001600160a01b0316156105ca5760008060029054906101000a90046001600160a01b03166001600160a01b031663d50911cc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb59190611c80565b604051630852cd8d60e31b8152600481018490529091506001600160a01b038216906342966c6890602401600060405180830381600087803b158015610bfa57600080fd5b505af1158015610c0e573d6000803e3d6000fd5b505050506109e282611431565b610c2533836110e0565b610c42576040516312a8eb0360e11b815260040160405180910390fd5b6109e2848484846114c0565b6000610c5a8383610fdc565b9392505050565b60606000610c6e8361087e565b60008054604080516395d89b4160e01b81529051939450620100009091046001600160a01b03169283916395d89b4191600480830192869291908290030181865afa158015610cc1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ce99190810190611e33565b6000805485516040808801519051631cd43d1160e31b81526001600160a01b036201000090940484166004820152918316602483015282166044820152929350909182917f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e88890606401608060405180830381865afa158015610d76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9a9190611eaa565b5050915091506040518060600160405280602d81526020016120f9602d9139610dc2466114cb565b610dd6866001600160a01b0316601461155e565b85610de160126114cb565b8951610df7906001600160a01b0316601461155e565b610e0f8b604001516001600160a01b0316601461155e565b610e26886bffffffffffffffffffffffff166114cb565b610e2f8a6114cb565b604051602001610e4799989796959493929190611f0a565b60405160208183030381529060405295505050505050919050565b6040518060600160405280602d81526020016120f9602d913981565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ef55760405163054fae5960e01b815260040160405180910390fd5b6000610f018383610fdc565b6000818152601660205260409020549091506001600160a01b03166105ca57610f2b8383836116fa565b60008060029054906101000a90046001600160a01b03166001600160a01b031663d50911cc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa39190611c80565b6040516340c10f1960e01b81526001600160a01b03858116600483015260248201859052919250908216906340c10f1990604401610596565b604080516001600160a01b03938416602080830191909152929093168382015280518084038201815260609093019052815191012090565b6040518181527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce790602001610aae565b6000818152601660205260409020546001600160a01b031661074a5760405163eab95e3b60e01b815260040160405180910390fd5b600081815260036020908152604080832080546001600160a01b0319166001600160a01b038781169182179092556016909352818420549151859492909116917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a45050565b6000806110ec83610848565b9050806001600160a01b0316846001600160a01b0316148061111357506111138185610e7e565b806111375750836001600160a01b031661112c84610661565b6001600160a01b0316145b949350505050565b60405163553a3f6560e11b815260040160405180910390fd5b60006111827f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316036111d85760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c650000006044820152606401610934565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611216573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123a9190612072565b7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b784146112b45760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b6064820152608401610934565b6001600160a01b038116300361130c5760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f70000000000000006044820152606401610934565b611334817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b784604080519182526001600160a01b038416602083015201610aae565b816001600160a01b0316836001600160a01b0316036113c45760405163d3c7732960e01b815260040160405180910390fd5b6001600160a01b03838116600081815260046020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b600061143c82610848565b600083815260036020526040902080546001600160a01b0319169055905060008281526016602052604080822080546001600160c01b031916815560010180546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6109e284848461113f565b606060006114d883611840565b600101905060008167ffffffffffffffff8111156114f8576114f8611a8a565b6040519080825280601f01601f191660200182016040528015611522576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461152c57509392505050565b6060600061156d8360026120a1565b6115789060026120b8565b67ffffffffffffffff81111561159057611590611a8a565b6040519080825280601f01601f1916602001820160405280156115ba576020820181803683370190505b509050600360fc1b816000815181106115d5576115d56120cb565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611604576116046120cb565b60200101906001600160f81b031916908160001a90535060006116288460026120a1565b6116339060016120b8565b90505b60018111156116ab576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611667576116676120cb565b1a60f81b82828151811061167d5761167d6120cb565b60200101906001600160f81b031916908160001a90535060049490941c936116a4816120e1565b9050611636565b508315610c5a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610934565b6001600160a01b038316611721576040516343d05e5160e01b815260040160405180910390fd5b816001600160a01b0316836001600160a01b0316036117535760405163a07fa90960e01b815260040160405180910390fd5b6000818152601660205260409020546001600160a01b0316156117895760405163e248018360e01b815260040160405180910390fd5b604080516060810182526001600160a01b0380861680835263ffffffff428116602080860191825288851686880190815260008981526016909252878220965187549351909416600160a01b026001600160c01b031990931693861693909317919091178555905160019094018054949093166001600160a01b031994909416939093179091559151839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061187f5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106118ab576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106118c957662386f26fc10000830492506010015b6305f5e10083106118e1576305f5e100830492506008015b61271083106118f557612710830492506004015b60648310611907576064830492506002015b600a831061046e5760010192915050565b60006020828403121561192a57600080fd5b81356001600160e01b031981168114610c5a57600080fd5b6001600160a01b038116811461074a57600080fd5b6000806040838503121561196a57600080fd5b823561197581611942565b9150602083013561198581611942565b809150509250929050565b60005b838110156119ab578181015183820152602001611993565b50506000910152565b60208152600082518060208401526119d3816040850160208701611990565b601f01601f19169190910160400192915050565b6000602082840312156119f957600080fd5b5035919050565b60008060408385031215611a1357600080fd5b8235611a1e81611942565b946020939093013593505050565b600080600060608486031215611a4157600080fd5b8335611a4c81611942565b92506020840135611a5c81611942565b929592945050506040919091013590565b600060208284031215611a7f57600080fd5b8135610c5a81611942565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611ac957611ac9611a8a565b604052919050565b600067ffffffffffffffff821115611aeb57611aeb611a8a565b50601f01601f191660200190565b6000611b0c611b0784611ad1565b611aa0565b9050828152838383011115611b2057600080fd5b828260208301376000602084830101529392505050565b600082601f830112611b4857600080fd5b610c5a83833560208501611af9565b600080600060608486031215611b6c57600080fd5b8335611b7781611942565b9250602084013567ffffffffffffffff80821115611b9457600080fd5b611ba087838801611b37565b93506040860135915080821115611bb657600080fd5b50611bc386828701611b37565b9150509250925092565b60008060408385031215611be057600080fd5b8235611beb81611942565b91506020830135801515811461198557600080fd5b60008060008060808587031215611c1657600080fd5b8435611c2181611942565b93506020850135611c3181611942565b925060408501359150606085013567ffffffffffffffff811115611c5457600080fd5b8501601f81018713611c6557600080fd5b611c7487823560208401611af9565b91505092959194509250565b600060208284031215611c9257600080fd5b8151610c5a81611942565b600181811c90821680611cb157607f821691505b602082108103611cd157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f8211156105ca57600081815260208120601f850160051c81016020861015611d4c5750805b601f850160051c820191505b81811015611d6b57828155600101611d58565b505050505050565b815167ffffffffffffffff811115611d8d57611d8d611a8a565b611da181611d9b8454611c9d565b84611d25565b602080601f831160018114611dd65760008415611dbe5750858301515b600019600386901b1c1916600185901b178555611d6b565b600085815260208120601f198616915b82811015611e0557888601518255948401946001909101908401611de6565b5085821015611e235787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215611e4557600080fd5b815167ffffffffffffffff811115611e5c57600080fd5b8201601f81018413611e6d57600080fd5b8051611e7b611b0782611ad1565b818152856020838501011115611e9057600080fd5b611ea1826020830160208601611990565b95945050505050565b60008060008060808587031215611ec057600080fd5b84519350602085015180600b0b8114611ed857600080fd5b6040860151606090960151949790965092505050565b60008151611f00818560208601611990565b9290920192915050565b60008a51611f1c818460208f01611990565b693f636861696e5f69643d60b01b9083019081528a51611f4381600a840160208f01611990565b6e26746f6b656e5f616464726573733d60881b600a92909101918201528951611f73816019840160208e01611990565b6d26746f6b656e5f73796d626f6c3d60901b601992909101918201528851611fa2816027840160208d01611990565b6f26746f6b656e5f646563696d616c733d60801b602792909101918201528751611fd3816037840160208c01611990565b61206161205b61204361203d61202761202161200b6120056037898b0101672673656e6465723d60c01b815260080190565b8f611eee565b692672656365697665723d60b01b8152600a0190565b8c611eee565b6926666c6f77526174653d60b01b8152600a0190565b89611eee565b6b2673746172745f646174653d60a01b8152600c0190565b86611eee565b9d9c50505050505050505050505050565b60006020828403121561208457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761046e5761046e61208b565b8082018082111561046e5761046e61208b565b634e487b7160e01b600052603260045260246000fd5b6000816120f0576120f061208b565b50600019019056fe68747470733a2f2f6e66742e7375706572666c7569642e66696e616e63652f6366612f76312f6765746d657461a2646970667358221220d5e540e056e98e7082af0d2d0f23095a005acaf6db4d1935c126a3eb743f4db964736f6c63430008130033";
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
        readonly name: "COF_NFT_MINT_TO_AND_FLOW_RECEIVER_SAME";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "COF_NFT_MINT_TO_ZERO_ADDRESS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "COF_NFT_ONLY_CFA";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "COF_NFT_ONLY_CONSTANT_INFLOW";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "COF_NFT_TOKEN_ALREADY_EXISTS";
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
            readonly internalType: "address";
            readonly name: "flowSender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowReceiver";
            readonly type: "address";
        }];
        readonly name: "onCreate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flowSender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowReceiver";
            readonly type: "address";
        }];
        readonly name: "onDelete";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flowSender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowReceiver";
            readonly type: "address";
        }];
        readonly name: "onUpdate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    static createInterface(): ConstantOutflowNFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConstantOutflowNFT;
}
export {};
//# sourceMappingURL=ConstantOutflowNFT__factory.d.ts.map