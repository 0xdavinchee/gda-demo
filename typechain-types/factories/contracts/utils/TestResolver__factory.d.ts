import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { TestResolver, TestResolverInterface } from "../../../contracts/utils/TestResolver";
type TestResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestResolver__factory extends ContractFactory {
    constructor(...args: TestResolverConstructorParams);
    deploy(_additionalAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestResolver>;
    getDeployTransaction(_additionalAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestResolver;
    connect(signer: Signer): TestResolver__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162000ed838038062000ed88339810160408190526200003491620001a2565b6200004160003362000055565b6200004e60008262000055565b50620001d4565b62000061828262000065565b5050565b62000071828262000090565b60008281526001602052604090206200008b908262000130565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000061576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620000ec3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000147836001600160a01b03841662000150565b90505b92915050565b600081815260018301602052604081205462000199575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200014a565b5060006200014a565b600060208284031215620001b557600080fd5b81516001600160a01b0381168114620001cd57600080fd5b9392505050565b610cf480620001e46000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80639010d07c116100715780639010d07c1461017857806391d148541461018b578063a217fddf1461019e578063a815ff15146101a6578063ca15c873146101b9578063d547741f146101cc57600080fd5b806301ffc9a7146100b9578063248a9ca3146100e15780632f2ff15d1461011257806336568abe14610127578063693ec85e1461013a5780637048027514610165575b600080fd5b6100cc6100c736600461098f565b6101df565b60405190151581526020015b60405180910390f35b6101046100ef3660046109b9565b60009081526020819052604090206001015490565b6040519081526020016100d8565b6101256101203660046109ee565b61020a565b005b6101256101353660046109ee565b610234565b61014d610148366004610a63565b6102b7565b6040516001600160a01b0390911681526020016100d8565b610125610173366004610aa5565b6102ec565b61014d610186366004610ac0565b6102fa565b6100cc6101993660046109ee565b610319565b610104600081565b6101256101b4366004610ae2565b610342565b6101046101c73660046109b9565b61042a565b6101256101da3660046109ee565b610441565b60006001600160e01b03198216635a05180f60e01b1480610204575061020482610466565b92915050565b6000828152602081905260409020600101546102258161049b565b61022f83836104a5565b505050565b6001600160a01b03811633146102a95760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6102b382826104c7565b5050565b6000600283836040516102cb929190610b36565b908152604051908190036020019020546001600160a01b0316905092915050565b6102f76000826104e9565b50565b600082815260016020526040812061031290836104f3565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61034d600033610319565b6103925760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1030b71030b236b4b760511b60448201526064016102a0565b80600284846040516103a5929190610b36565b90815260405190819003602001812080546001600160a01b03939093166001600160a01b0319909316929092179091556103e29084908490610b36565b6040519081900381206001600160a01b0383168252907f496595ced95720268cf8bc60bae3f35024ff2a130f73ac4e20f5c1eaca35db999060200160405180910390a2505050565b6000818152600160205260408120610204906104ff565b60008281526020819052604090206001015461045c8161049b565b61022f83836104c7565b60006001600160e01b03198216637965db0b60e01b148061020457506301ffc9a760e01b6001600160e01b0319831614610204565b6102f78133610509565b6104af8282610562565b600082815260016020526040902061022f90826105e6565b6104d182826105fb565b600082815260016020526040902061022f9082610660565b6102b382826104a5565b60006103128383610675565b6000610204825490565b6105138282610319565b6102b3576105208161069f565b61052b8360206106b1565b60405160200161053c929190610b6a565b60408051601f198184030181529082905262461bcd60e51b82526102a091600401610bdf565b61056c8282610319565b6102b3576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556105a23390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610312836001600160a01b03841661084d565b6106058282610319565b156102b3576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610312836001600160a01b03841661089c565b600082600001828154811061068c5761068c610c12565b9060005260206000200154905092915050565b60606102046001600160a01b03831660145b606060006106c0836002610c3e565b6106cb906002610c55565b67ffffffffffffffff8111156106e3576106e3610c68565b6040519080825280601f01601f19166020018201604052801561070d576020820181803683370190505b509050600360fc1b8160008151811061072857610728610c12565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061075757610757610c12565b60200101906001600160f81b031916908160001a905350600061077b846002610c3e565b610786906001610c55565b90505b60018111156107fe576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106107ba576107ba610c12565b1a60f81b8282815181106107d0576107d0610c12565b60200101906001600160f81b031916908160001a90535060049490941c936107f781610c7e565b9050610789565b5083156103125760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016102a0565b600081815260018301602052604081205461089457508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610204565b506000610204565b600081815260018301602052604081205480156109855760006108c0600183610c95565b85549091506000906108d490600190610c95565b90508181146109395760008660000182815481106108f4576108f4610c12565b906000526020600020015490508087600001848154811061091757610917610c12565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061094a5761094a610ca8565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610204565b6000915050610204565b6000602082840312156109a157600080fd5b81356001600160e01b03198116811461031257600080fd5b6000602082840312156109cb57600080fd5b5035919050565b80356001600160a01b03811681146109e957600080fd5b919050565b60008060408385031215610a0157600080fd5b82359150610a11602084016109d2565b90509250929050565b60008083601f840112610a2c57600080fd5b50813567ffffffffffffffff811115610a4457600080fd5b602083019150836020828501011115610a5c57600080fd5b9250929050565b60008060208385031215610a7657600080fd5b823567ffffffffffffffff811115610a8d57600080fd5b610a9985828601610a1a565b90969095509350505050565b600060208284031215610ab757600080fd5b610312826109d2565b60008060408385031215610ad357600080fd5b50508035926020909101359150565b600080600060408486031215610af757600080fd5b833567ffffffffffffffff811115610b0e57600080fd5b610b1a86828701610a1a565b9094509250610b2d9050602085016109d2565b90509250925092565b8183823760009101908152919050565b60005b83811015610b61578181015183820152602001610b49565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610ba2816017850160208801610b46565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610bd3816028840160208801610b46565b01602801949350505050565b6020815260008251806020840152610bfe816040850160208701610b46565b601f01601f19169190910160400192915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761020457610204610c28565b8082018082111561020457610204610c28565b634e487b7160e01b600052604160045260246000fd5b600081610c8d57610c8d610c28565b506000190190565b8181038181111561020457610204610c28565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220a7e91a489cf1c24314f9cabe04eeeec3f549967093642dfca34f42a7bdf2cfee64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_additionalAdmin";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "Set";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_additionalAdmin";
            readonly type: "address";
        }];
        readonly name: "addAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "get";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getRoleMember";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleMemberCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "set";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): TestResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestResolver;
}
export {};
//# sourceMappingURL=TestResolver__factory.d.ts.map