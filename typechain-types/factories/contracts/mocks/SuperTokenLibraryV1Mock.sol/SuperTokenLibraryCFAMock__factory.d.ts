import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperTokenLibraryCFAMock, SuperTokenLibraryCFAMockInterface } from "../../../../contracts/mocks/SuperTokenLibraryV1Mock.sol/SuperTokenLibraryCFAMock";
type SuperTokenLibraryCFAMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperTokenLibraryCFAMock__factory extends ContractFactory {
    constructor(...args: SuperTokenLibraryCFAMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperTokenLibraryCFAMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperTokenLibraryCFAMock;
    connect(signer: Signer): SuperTokenLibraryCFAMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061175c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063ab0c1e5f11610097578063c9929fc411610066578063c9929fc414610233578063cf86457a14610246578063dc19786814610267578063f5691f731461027a57600080fd5b8063ab0c1e5f146101c4578063b076afff146101d7578063b85f67bf1461020d578063c3c4f07a1461022057600080fd5b80633b556516116100d35780633b5565161461016557806350b027fc1461018b578063780808cd1461019e5780638e33f761146101b157600080fd5b80631aa2e8dc146100fa5780631abea2401461010f578063245bc59a14610152575b600080fd5b61010d6101083660046111e4565b61028d565b005b61012261011d3660046111e4565b6102a7565b604080519415158552921515602085015290151591830191909152600b0b60608201526080015b60405180910390f35b61010d61016036600461122f565b6102d1565b6101786101733660046111e4565b6102e9565b604051600b9190910b8152602001610149565b61010d610199366004611277565b610307565b6101786101ac36600461122f565b610323565b61010d6101bf3660046112d3565b61033f565b61010d6101d23660046112d3565b610353565b6101ea6101e53660046111e4565b610367565b60408051948552600b9390930b6020850152918301526060820152608001610149565b6101ea61021b36600461122f565b610380565b61010d61022e3660046111e4565b6103a8565b61010d61024136600461122f565b6103bc565b610259610254366004611313565b6103cf565b604051908152602001610149565b61010d610275366004611356565b6103e4565b61010d610288366004611277565b610404565b6102a16001600160a01b0384168383610419565b50505050565b60008080806102c06001600160a01b038816878761054e565b935093509350935093509350935093565b6102e46001600160a01b03821683610637565b505050565b60006102ff6001600160a01b0385168484610769565b949350505050565b61031c6001600160a01b038516848484610801565b5050505050565b60006103386001600160a01b03841683610939565b9392505050565b6102a16001600160a01b03841683836109bc565b6102a16001600160a01b0384168383610a48565b60008080806102c06001600160a01b0388168787610a96565b60008080806103986001600160a01b03871686610b38565b9299919850965090945092505050565b6102a16001600160a01b0384168383610bd1565b6102e46001600160a01b03821683610c1f565b60006103386001600160a01b03841683610c6c565b6103fb6001600160a01b0387168686868686610cf1565b50505050505050565b61031c6001600160a01b038516848484610e51565b600080600061042786610ea0565b91509150816001600160a01b03166339255d5b82836001600160a01b0316634c8b181f8a8a8a600067ffffffffffffffff811115610467576104676113d2565b6040519080825280601f01601f191660200182016040528015610491576020820181803683370190505b506040516024016104a59493929190611438565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526104fa9392509060248101611476565b6000604051808303816000875af1158015610519573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261054191908101906114ac565b5060019695505050505050565b600080600080600061055f88611067565b604051622115df60e11b81526001600160a01b038b811660048301528a811660248301528981166044830152919350600092509083169062422bbe90606401606060405180830381865afa1580156105bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105df9190611559565b94509150506001808216146105f55760006105f8565b60015b9550600181811c81161461060d576000610610565b60015b94506001600282901c81161461062757600061062a565b60015b9350505093509350935093565b600080600061064585610ea0565b91509150816001600160a01b03166339255d5b82836001600160a01b031663062e56ec8989600067ffffffffffffffff811115610684576106846113d2565b6040519080825280601f01601f1916602001820160405280156106ae576020820181803683370190505b506040516024016106c193929190611597565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526107169392509060248101611476565b6000604051808303816000875af1158015610735573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261075d91908101906114ac565b50600195945050505050565b60008061077585611067565b604051631cd43d1160e31b81526001600160a01b03888116600483015287811660248301528681166044830152919350908316915063e6a1e88890606401608060405180830381865afa1580156107d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f491906115cc565b5090979650505050505050565b600080600061080f87610ea0565b91509150816001600160a01b03166339255d5b82836001600160a01b03166394229ecb8b8b8b8b600067ffffffffffffffff811115610850576108506113d2565b6040519080825280601f01601f19166020018201604052801561087a576020820181803683370190505b5060405160240161088f95949392919061160a565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526108e49392509060248101611476565b6000604051808303816000875af1158015610903573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261092b91908101906114ac565b506001979650505050505050565b60008061094584611067565b60405163e8e7e2d160e01b81526001600160a01b0387811660048301528681166024830152919350908316915063e8e7e2d190604401602060405180830381865afa158015610998573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ff9190611648565b60008060006109ca86610ea0565b91509150816001600160a01b03166339255d5b82836001600160a01b03166350209a628a8a8a600067ffffffffffffffff811115610a0a57610a0a6113d2565b6040519080825280601f01601f191660200182016040528015610a34576020820181803683370190505b506040516024016104a59493929190611665565b6000806000610a5686610ea0565b91509150816001600160a01b03166339255d5b82836001600160a01b03166362fc305e8a8a8a600067ffffffffffffffff811115610a0a57610a0a6113d2565b6000806000806000610aa788611067565b604051631cd43d1160e31b81526001600160a01b038b811660048301528a811660248301528981166044830152919350908316915063e6a1e88890606401608060405180830381865afa158015610b02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2691906115cc565b929b919a509850909650945050505050565b6000806000806000610b4987611067565b604051630f1ac49560e01b81526001600160a01b038a8116600483015289811660248301529193509083169150630f1ac49590604401608060405180830381865afa158015610b9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc091906115cc565b929a91995097509095509350505050565b6000806000610bdf86610ea0565b91509150816001600160a01b03166339255d5b82836001600160a01b031663b4b333c68a8a8a600067ffffffffffffffff811115610467576104676113d2565b6000806000610c2d85610ea0565b91509150816001600160a01b03166339255d5b82836001600160a01b03166354b770e38989600067ffffffffffffffff811115610684576106846113d2565b600080610c7884611067565b6040516346ccbfb760e11b81526001600160a01b038781166004830152600b87900b60248301529193509083169150638d997f6e90604401602060405180830381865afa158015610ccd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ff919061169b565b6000806000610cff89610ea0565b915091506000600286610d13576000610d16565b60015b60ff16901b600188610d29576000610d2c565b60015b60ff16901b89610d3d576000610d40565b60015b171790506001600160a01b03808416906339255d5b908490811663811b3d408e8e878c60006040519080825280601f01601f191660200182016040528015610d8f576020820181803683370190505b50604051602401610da49594939291906116b4565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b0319169052610df99392509060248101611476565b6000604051808303816000875af1158015610e18573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e4091908101906114ac565b5060019a9950505050505050505050565b6000806000610e5f87610ea0565b91509150816001600160a01b03166339255d5b82836001600160a01b031663354b95908b8b8b8b600067ffffffffffffffff811115610850576108506113d2565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116611036576001600160a01b038216610f6557826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6291906116f3565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015610fc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fed91906116f3565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a555b6001600160a01b03821661104c5761104c611710565b6001600160a01b03811661106257611062611710565b915091565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116611036576001600160a01b03821661112c57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa158015611105573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112991906116f3565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015611190573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b491906116f3565b90506001600160a01b03821661104c5761104c611710565b6001600160a01b03811681146111e157600080fd5b50565b6000806000606084860312156111f957600080fd5b8335611204816111cc565b92506020840135611214816111cc565b91506040840135611224816111cc565b809150509250925092565b6000806040838503121561124257600080fd5b823561124d816111cc565b9150602083013561125d816111cc565b809150509250929050565b80600b0b81146111e157600080fd5b6000806000806080858703121561128d57600080fd5b8435611298816111cc565b935060208501356112a8816111cc565b925060408501356112b8816111cc565b915060608501356112c881611268565b939692955090935050565b6000806000606084860312156112e857600080fd5b83356112f3816111cc565b92506020840135611303816111cc565b9150604084013561122481611268565b6000806040838503121561132657600080fd5b8235611331816111cc565b9150602083013561125d81611268565b8035801515811461135157600080fd5b919050565b60008060008060008060c0878903121561136f57600080fd5b863561137a816111cc565b9550602087013561138a816111cc565b945061139860408801611341565b93506113a660608801611341565b92506113b460808801611341565b915060a08701356113c481611268565b809150509295509295509295565b634e487b7160e01b600052604160045260246000fd5b60005b838110156114035781810151838201526020016113eb565b50506000910152565b600081518084526114248160208601602086016113e8565b601f01601f19169290920160200192915050565b6001600160a01b03858116825284811660208301528316604082015260806060820181905260009061146c9083018461140c565b9695505050505050565b6001600160a01b038416815260606020820181905260009061149a9083018561140c565b828103604084015261146c818561140c565b6000602082840312156114be57600080fd5b815167ffffffffffffffff808211156114d657600080fd5b818401915084601f8301126114ea57600080fd5b8151818111156114fc576114fc6113d2565b604051601f8201601f19908116603f01168101908382118183101715611524576115246113d2565b8160405282815287602084870101111561153d57600080fd5b61154e8360208301602088016113e8565b979650505050505050565b60008060006060848603121561156e57600080fd5b83519250602084015160ff8116811461158657600080fd5b604085015190925061122481611268565b6001600160a01b038481168252831660208201526060604082018190526000906115c39083018461140c565b95945050505050565b600080600080608085870312156115e257600080fd5b8451935060208501516115f481611268565b6040860151606090960151949790965092505050565b6001600160a01b038681168252858116602083015284166040820152600b83900b606082015260a06080820181905260009061154e9083018461140c565b60006020828403121561165a57600080fd5b815161033881611268565b6001600160a01b03858116825284166020820152600b83900b604082015260806060820181905260009061146c9083018461140c565b6000602082840312156116ad57600080fd5b5051919050565b6001600160a01b0386811682528516602082015260ff84166040820152600b83900b606082015260a06080820181905260009061154e9083018461140c565b60006020828403121561170557600080fd5b8151610338816111cc565b634e487b7160e01b600052600160045260246000fdfea26469706673582212202c229c0fdc6a2b90fc59448a4a0fb00edd205ef5b093dd78a0f86e1a163246d564736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "createFlowFromTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "createFlowTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "deleteFlowFromTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "deleteFlowTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "getBufferAmountByFlowRateTest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bufferAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "getFlowInfoTest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "lastUpdated";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "owedDeposit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }];
        readonly name: "getFlowPermissionsTest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "allowCreate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "allowUpdate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "allowDelete";
            readonly type: "bool";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRateAllowance";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "getFlowRateTest";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "rate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getNetFlowInfoTest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "lastUpdated";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "owedDeposit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getNetFlowRateTest";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "netFlowRate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "revokeFlowPermissionsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "allowCreate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "allowUpdate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "allowDelete";
            readonly type: "bool";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRateAllowance";
            readonly type: "int96";
        }];
        readonly name: "setFlowPermissionsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "setMaxFlowPermissionsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "updateFlowFromTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "updateFlowTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperTokenLibraryCFAMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperTokenLibraryCFAMock;
}
export {};
//# sourceMappingURL=SuperTokenLibraryCFAMock__factory.d.ts.map