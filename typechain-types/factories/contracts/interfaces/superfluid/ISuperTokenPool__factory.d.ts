import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISuperTokenPool, ISuperTokenPoolInterface } from "../../../../contracts/interfaces/superfluid/ISuperTokenPool";
export declare class ISuperTokenPool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_POOL_NEGATIVE_UNITS_NOT_SUPPORTED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_POOL_NOT_POOL_ADMIN";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "int128";
            readonly name: "totalUnits";
            readonly type: "int128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "wpSettledAt";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "wpSettledValue";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "int96";
            readonly name: "wpFlowRate";
            readonly type: "int96";
        }];
        readonly name: "PoolIndexUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "_superToken";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "time";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "claimAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "claimAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "time";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "getClaimable";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "getClaimable";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDistributionFlowRate";
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
            readonly name: "memberAddress";
            readonly type: "address";
        }];
        readonly name: "getMemberFlowRate";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPendingDistribution";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPendingDistributionFlowRate";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalUnits";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "";
            readonly type: "int128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "memberAddress";
            readonly type: "address";
        }];
        readonly name: "getUnits";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "";
            readonly type: "int128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "time";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "doConnect";
            readonly type: "bool";
        }];
        readonly name: "operatorConnectMember";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }, {
            readonly internalType: "int128";
            readonly name: "unit";
            readonly type: "int128";
        }];
        readonly name: "updateMember";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ISuperTokenPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISuperTokenPool;
}
//# sourceMappingURL=ISuperTokenPool__factory.d.ts.map