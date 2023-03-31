import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { CustomSuperTokenProxyMock, CustomSuperTokenProxyMockInterface } from "../../../../contracts/mocks/CustomSuperTokenMock.sol/CustomSuperTokenProxyMock";
type CustomSuperTokenProxyMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CustomSuperTokenProxyMock__factory extends ContractFactory {
    constructor(...args: CustomSuperTokenProxyMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CustomSuperTokenProxyMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CustomSuperTokenProxyMock;
    connect(signer: Signer): CustomSuperTokenProxyMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610754806100206000396000f3fe6080604052600436106100745760003560e01c80634c6491d21161004e5780634c6491d2146100ec5780637549c15f1461010c578063c68d42831461012c578063e27c15861461014c57610083565b80633c5441aa1461008b57806347399a7f146100ab5780634a0687ef146100cc57610083565b366100835761008161016c565b005b61008161016c565b34801561009757600080fd5b506100816100a636600461050b565b61017e565b3480156100b757600080fd5b50602060405190815260200160405180910390f35b3480156100d857600080fd5b506100816100e73660046105d6565b61024a565b3480156100f857600080fd5b506100816101073660046105f8565b610350565b34801561011857600080fd5b5061008161012736600461050b565b6103c6565b34801561013857600080fd5b5061008161014736600461050b565b610424565b34801561015857600080fd5b50610081610167366004610643565b61044b565b61017c610177610486565b6104b5565b565b6000610188610486565b90506000816001600160a01b0316306001600160a01b031663c68d42838787876040516024016101ba939291906106a3565b60408051601f198184030181529181526020820180516001600160e01b031660e09490941b9390931790925290516101f292506106ec565b600060405180830381855af49150503d806000811461022d576040519150601f19603f3d011682016040523d82523d6000602084013e610232565b606091505b505090508061024357610243610708565b5050505050565b6001600160a01b0381166102a55760405162461bcd60e51b815260206004820152601760248201527f5555505350726f78793a207a65726f206164647265737300000000000000000060448201526064015b60405180910390fd5b60006102cf7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316146103255760405162461bcd60e51b815260206004820152601e60248201527f5555505350726f78793a20616c726561647920696e697469616c697a65640000604482015260640161029c565b61034d817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50565b6040516320db835f60e11b81526001600160a01b0380861660048301528085166024830152831660448201526064810182905230906341b706be90608401600060405180830381600087803b1580156103a857600080fd5b505af11580156103bc573d6000803e3d6000fd5b5050505050505050565b604051639d87674160e01b81523090639d876741906103ed908690869086906004016106a3565b600060405180830381600087803b15801561040757600080fd5b505af115801561041b573d6000803e3d6000fd5b50505050505050565b604051631e2a20d560e11b81523090633c5441aa906103ed908690869086906004016106a3565b60405163335097db60e11b81526001600160a01b038085166004830152831660248201526044810182905230906366a12fb6906064016103ed565b60006104b07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b3660008037600080366000845af43d6000803e8080156104d4573d6000f35b3d6000fd5b80356001600160a01b03811681146104f057600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561052057600080fd5b610529846104d9565b925060208401359150604084013567ffffffffffffffff8082111561054d57600080fd5b818601915086601f83011261056157600080fd5b813581811115610573576105736104f5565b604051601f8201601f19908116603f0116810190838211818310171561059b5761059b6104f5565b816040528281528960208487010111156105b457600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6000602082840312156105e857600080fd5b6105f1826104d9565b9392505050565b6000806000806080858703121561060e57600080fd5b610617856104d9565b9350610625602086016104d9565b9250610633604086016104d9565b9396929550929360600135925050565b60008060006060848603121561065857600080fd5b610661846104d9565b925061066f602085016104d9565b9150604084013590509250925092565b60005b8381101561069a578181015183820152602001610682565b50506000910152565b60018060a01b038416815282602082015260606040820152600082518060608401526106d681608085016020870161067f565b601f01601f191691909101608001949350505050565b600082516106fe81846020870161067f565b9190910192915050565b634e487b7160e01b600052600160045260246000fdfea2646970667358221220dc3a7ec59e6706786118aed6c936c7cd75e4aeeb6dbad83bac84046d4f4f471064736f6c63430008130033";
    static readonly abi: readonly [{
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "callSelfApproveFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "callSelfBurn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "holder";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "callSelfTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "delegatecallSelfMint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getFirstCustomTokenStorageSlot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "slot";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "initialAddress";
            readonly type: "address";
        }];
        readonly name: "initializeProxy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "selfMint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): CustomSuperTokenProxyMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CustomSuperTokenProxyMock;
}
export {};
//# sourceMappingURL=CustomSuperTokenProxyMock__factory.d.ts.map