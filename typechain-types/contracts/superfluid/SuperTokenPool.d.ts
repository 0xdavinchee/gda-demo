import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export type BasicParticleStruct = {
    settled_at: PromiseOrValue<BigNumberish>;
    settled_value: PromiseOrValue<BigNumberish>;
    flow_rate: PromiseOrValue<BigNumberish>;
};
export type BasicParticleStructOutput = [number, BigNumber, BigNumber] & {
    settled_at: number;
    settled_value: BigNumber;
    flow_rate: BigNumber;
};
export type PDPoolIndexStruct = {
    total_units: PromiseOrValue<BigNumberish>;
    wrapped_particle: BasicParticleStruct;
};
export type PDPoolIndexStructOutput = [BigNumber, BasicParticleStructOutput] & {
    total_units: BigNumber;
    wrapped_particle: BasicParticleStructOutput;
};
export interface SuperTokenPoolInterface extends utils.Interface {
    functions: {
        "_superToken()": FunctionFragment;
        "admin()": FunctionFragment;
        "claimAll(uint32,address)": FunctionFragment;
        "claimAll(address)": FunctionFragment;
        "claimAll()": FunctionFragment;
        "getClaimable(uint32,address)": FunctionFragment;
        "getClaimable(address)": FunctionFragment;
        "getDistributionFlowRate()": FunctionFragment;
        "getIndex()": FunctionFragment;
        "getMemberFlowRate(address)": FunctionFragment;
        "getPendingDistribution()": FunctionFragment;
        "getPendingDistributionFlowRate()": FunctionFragment;
        "getTotalUnits()": FunctionFragment;
        "getUnits(address)": FunctionFragment;
        "operatorConnectMember(uint32,address,bool)": FunctionFragment;
        "operatorSetIndex((int128,(uint32,int256,int128)))": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingUnits()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateMember(address,int128)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_superToken" | "admin" | "claimAll(uint32,address)" | "claimAll(address)" | "claimAll()" | "getClaimable(uint32,address)" | "getClaimable(address)" | "getDistributionFlowRate" | "getIndex" | "getMemberFlowRate" | "getPendingDistribution" | "getPendingDistributionFlowRate" | "getTotalUnits" | "getUnits" | "operatorConnectMember" | "operatorSetIndex" | "owner" | "pendingUnits" | "renounceOwnership" | "transferOwnership" | "updateMember"): FunctionFragment;
    encodeFunctionData(functionFragment: "_superToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimAll(uint32,address)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimAll(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimAll()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getClaimable(uint32,address)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getClaimable(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDistributionFlowRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMemberFlowRate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPendingDistribution", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPendingDistributionFlowRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalUnits", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUnits", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "operatorConnectMember", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "operatorSetIndex", values: [PDPoolIndexStruct]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingUnits", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateMember", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "_superToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAll(uint32,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAll(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAll()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimable(uint32,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimable(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDistributionFlowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMemberFlowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingDistribution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingDistributionFlowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalUnits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorConnectMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorSetIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingUnits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMember", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "PoolIndexUpdated(address,int128,uint32,int256,int96)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolIndexUpdated"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PoolIndexUpdatedEventObject {
    token: string;
    totalUnits: BigNumber;
    wpSettledAt: number;
    wpSettledValue: BigNumber;
    wpFlowRate: BigNumber;
}
export type PoolIndexUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    BigNumber,
    BigNumber
], PoolIndexUpdatedEventObject>;
export type PoolIndexUpdatedEventFilter = TypedEventFilter<PoolIndexUpdatedEvent>;
export interface SuperTokenPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperTokenPoolInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _superToken(overrides?: CallOverrides): Promise<[string]>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        "claimAll(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "claimAll(address)"(memberAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "claimAll()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "getClaimable(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "getClaimable(address)"(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDistributionFlowRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getIndex(overrides?: CallOverrides): Promise<[PDPoolIndexStructOutput]>;
        getMemberFlowRate(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPendingDistribution(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPendingDistributionFlowRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalUnits(overrides?: CallOverrides): Promise<[BigNumber]>;
        getUnits(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        operatorConnectMember(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        operatorSetIndex(index: PDPoolIndexStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingUnits(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateMember(memberAddr: PromiseOrValue<string>, unit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _superToken(overrides?: CallOverrides): Promise<string>;
    admin(overrides?: CallOverrides): Promise<string>;
    "claimAll(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "claimAll(address)"(memberAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "claimAll()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "getClaimable(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    "getClaimable(address)"(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getDistributionFlowRate(overrides?: CallOverrides): Promise<BigNumber>;
    getIndex(overrides?: CallOverrides): Promise<PDPoolIndexStructOutput>;
    getMemberFlowRate(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getPendingDistribution(overrides?: CallOverrides): Promise<BigNumber>;
    getPendingDistributionFlowRate(overrides?: CallOverrides): Promise<BigNumber>;
    getTotalUnits(overrides?: CallOverrides): Promise<BigNumber>;
    getUnits(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    operatorConnectMember(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    operatorSetIndex(index: PDPoolIndexStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingUnits(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateMember(memberAddr: PromiseOrValue<string>, unit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _superToken(overrides?: CallOverrides): Promise<string>;
        admin(overrides?: CallOverrides): Promise<string>;
        "claimAll(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        "claimAll(address)"(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        "claimAll()"(overrides?: CallOverrides): Promise<boolean>;
        "getClaimable(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "getClaimable(address)"(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDistributionFlowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getIndex(overrides?: CallOverrides): Promise<PDPoolIndexStructOutput>;
        getMemberFlowRate(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPendingDistribution(overrides?: CallOverrides): Promise<BigNumber>;
        getPendingDistributionFlowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalUnits(overrides?: CallOverrides): Promise<BigNumber>;
        getUnits(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        operatorConnectMember(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        operatorSetIndex(index: PDPoolIndexStruct, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingUnits(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateMember(memberAddr: PromiseOrValue<string>, unit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "PoolIndexUpdated(address,int128,uint32,int256,int96)"(token?: PromiseOrValue<string> | null, totalUnits?: null, wpSettledAt?: null, wpSettledValue?: null, wpFlowRate?: null): PoolIndexUpdatedEventFilter;
        PoolIndexUpdated(token?: PromiseOrValue<string> | null, totalUnits?: null, wpSettledAt?: null, wpSettledValue?: null, wpFlowRate?: null): PoolIndexUpdatedEventFilter;
    };
    estimateGas: {
        _superToken(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        "claimAll(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "claimAll(address)"(memberAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "claimAll()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "getClaimable(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "getClaimable(address)"(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDistributionFlowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getIndex(overrides?: CallOverrides): Promise<BigNumber>;
        getMemberFlowRate(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPendingDistribution(overrides?: CallOverrides): Promise<BigNumber>;
        getPendingDistributionFlowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalUnits(overrides?: CallOverrides): Promise<BigNumber>;
        getUnits(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        operatorConnectMember(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        operatorSetIndex(index: PDPoolIndexStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingUnits(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateMember(memberAddr: PromiseOrValue<string>, unit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _superToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "claimAll(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "claimAll(address)"(memberAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "claimAll()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "getClaimable(uint32,address)"(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getClaimable(address)"(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDistributionFlowRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMemberFlowRate(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPendingDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPendingDistributionFlowRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalUnits(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUnits(memberAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operatorConnectMember(time: PromiseOrValue<BigNumberish>, memberAddr: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        operatorSetIndex(index: PDPoolIndexStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingUnits(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateMember(memberAddr: PromiseOrValue<string>, unit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperTokenPool.d.ts.map