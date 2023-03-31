import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGeneralDistributionAgreementV1, IGeneralDistributionAgreementV1Interface } from "../../../../contracts/interfaces/agreements/IGeneralDistributionAgreementV1";
export declare class IGeneralDistributionAgreementV1__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "NOT_POOL_ADMIN";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NO_NEGATIVE_UNITS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ONLY_SUPER_TOKEN_POOL";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract ISuperTokenPool";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "distributor";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "distributedAt";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "int96";
            readonly name: "oldFlowRate";
            readonly type: "int96";
        }, {
            readonly indexed: false;
            readonly internalType: "int96";
            readonly name: "newFlowRate";
            readonly type: "int96";
        }];
        readonly name: "DistributionFlowUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract ISuperTokenPool";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "connected";
            readonly type: "bool";
        }];
        readonly name: "PoolConnectionUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "contract ISuperTokenPool";
            readonly name: "pool";
            readonly type: "address";
        }];
        readonly name: "PoolCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "settledAt";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "settledValue";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "UniversalIndexUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "agreementType";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperTokenPool";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "doConnect";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "connectPool";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "createPool";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperTokenPool";
            readonly name: "pool";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperTokenPool";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "disconnectPool";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperTokenPool";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestedAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "distribute";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperTokenPool";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "requestedFlowRate";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "distributeFlow";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
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
        }];
        readonly name: "getFlowRate";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getNetFlowRate";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "member";
            readonly type: "address";
        }];
        readonly name: "isMemberConnected";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "time";
            readonly type: "uint256";
        }];
        readonly name: "realtimeBalanceOf";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "dynamicBalance";
            readonly type: "int256";
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
    }];
    static createInterface(): IGeneralDistributionAgreementV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGeneralDistributionAgreementV1;
}
//# sourceMappingURL=IGeneralDistributionAgreementV1__factory.d.ts.map