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
export interface GeneralDistributionAgreementV1Interface extends utils.Interface {
    functions: {
        "absorbParticlesFromPool(address,address[],(uint32,int256,int128)[])": FunctionFragment;
        "agreementType()": FunctionFragment;
        "castrate()": FunctionFragment;
        "connectPool(address,bool,bytes)": FunctionFragment;
        "connectPoole(address,bytes)": FunctionFragment;
        "createPool(address,address)": FunctionFragment;
        "disconnectPool(address,bytes)": FunctionFragment;
        "distribute(address,address,uint256,bytes)": FunctionFragment;
        "distributeFlow(address,address,int96,bytes)": FunctionFragment;
        "flowRates(bytes32)": FunctionFragment;
        "getCodeAddress()": FunctionFragment;
        "getFlowRate(address,address)": FunctionFragment;
        "getNetFlowRate(address)": FunctionFragment;
        "isMemberConnected(address,address)": FunctionFragment;
        "pools(address)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "realtimeBalanceOf(address,address,uint256)": FunctionFragment;
        "updateCode(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "absorbParticlesFromPool" | "agreementType" | "castrate" | "connectPool" | "connectPoole" | "createPool" | "disconnectPool" | "distribute" | "distributeFlow" | "flowRates" | "getCodeAddress" | "getFlowRate" | "getNetFlowRate" | "isMemberConnected" | "pools" | "proxiableUUID" | "realtimeBalanceOf" | "updateCode"): FunctionFragment;
    encodeFunctionData(functionFragment: "absorbParticlesFromPool", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        BasicParticleStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "agreementType", values?: undefined): string;
    encodeFunctionData(functionFragment: "castrate", values?: undefined): string;
    encodeFunctionData(functionFragment: "connectPool", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "connectPoole", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "createPool", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "disconnectPool", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "distribute", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "distributeFlow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "flowRates", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getCodeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFlowRate", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getNetFlowRate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isMemberConnected", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pools", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOf", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateCode", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "absorbParticlesFromPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "agreementType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connectPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connectPoole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disconnectPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flowRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCodeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetFlowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMemberConnected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCode", data: BytesLike): Result;
    events: {
        "CodeUpdated(bytes32,address)": EventFragment;
        "DistributionFlowUpdated(address,address,address,uint32,int96,int96)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "PoolConnectionUpdated(address,address,address,bool)": EventFragment;
        "PoolCreated(address,address,address)": EventFragment;
        "UniversalIndexUpdated(address,address,uint32,int256,int96)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CodeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DistributionFlowUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolConnectionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UniversalIndexUpdated"): EventFragment;
}
export interface CodeUpdatedEventObject {
    uuid: string;
    codeAddress: string;
}
export type CodeUpdatedEvent = TypedEvent<[
    string,
    string
], CodeUpdatedEventObject>;
export type CodeUpdatedEventFilter = TypedEventFilter<CodeUpdatedEvent>;
export interface DistributionFlowUpdatedEventObject {
    token: string;
    pool: string;
    distributor: string;
    distributedAt: number;
    oldFlowRate: BigNumber;
    newFlowRate: BigNumber;
}
export type DistributionFlowUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    BigNumber,
    BigNumber
], DistributionFlowUpdatedEventObject>;
export type DistributionFlowUpdatedEventFilter = TypedEventFilter<DistributionFlowUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface PoolConnectionUpdatedEventObject {
    token: string;
    account: string;
    pool: string;
    connected: boolean;
}
export type PoolConnectionUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    boolean
], PoolConnectionUpdatedEventObject>;
export type PoolConnectionUpdatedEventFilter = TypedEventFilter<PoolConnectionUpdatedEvent>;
export interface PoolCreatedEventObject {
    token: string;
    admin: string;
    pool: string;
}
export type PoolCreatedEvent = TypedEvent<[
    string,
    string,
    string
], PoolCreatedEventObject>;
export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;
export interface UniversalIndexUpdatedEventObject {
    token: string;
    account: string;
    settledAt: number;
    settledValue: BigNumber;
    flowRate: BigNumber;
}
export type UniversalIndexUpdatedEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber,
    BigNumber
], UniversalIndexUpdatedEventObject>;
export type UniversalIndexUpdatedEventFilter = TypedEventFilter<UniversalIndexUpdatedEvent>;
export interface GeneralDistributionAgreementV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GeneralDistributionAgreementV1Interface;
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
        absorbParticlesFromPool(token: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], ps: BasicParticleStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        agreementType(overrides?: CallOverrides): Promise<[string]>;
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        connectPoole(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createPool(admin: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        disconnectPool(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distribute(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distributeFlow(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedFlowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        flowRates(flowAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            flowRate: BigNumber;
        }>;
        getCodeAddress(overrides?: CallOverrides): Promise<[string] & {
            codeAddress: string;
        }>;
        getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        pools(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            exists: boolean;
        }>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    absorbParticlesFromPool(token: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], ps: BasicParticleStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    agreementType(overrides?: CallOverrides): Promise<string>;
    castrate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    connectPoole(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createPool(admin: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    disconnectPool(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distribute(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distributeFlow(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedFlowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    flowRates(flowAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getCodeAddress(overrides?: CallOverrides): Promise<string>;
    getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    pools(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        absorbParticlesFromPool(token: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], ps: BasicParticleStruct[], overrides?: CallOverrides): Promise<boolean>;
        agreementType(overrides?: CallOverrides): Promise<string>;
        castrate(overrides?: CallOverrides): Promise<void>;
        connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        connectPoole(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        createPool(admin: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        disconnectPool(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        distribute(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        distributeFlow(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedFlowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        flowRates(flowAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getCodeAddress(overrides?: CallOverrides): Promise<string>;
        getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        pools(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CodeUpdated(bytes32,address)"(uuid?: null, codeAddress?: null): CodeUpdatedEventFilter;
        CodeUpdated(uuid?: null, codeAddress?: null): CodeUpdatedEventFilter;
        "DistributionFlowUpdated(address,address,address,uint32,int96,int96)"(token?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, distributor?: PromiseOrValue<string> | null, distributedAt?: null, oldFlowRate?: null, newFlowRate?: null): DistributionFlowUpdatedEventFilter;
        DistributionFlowUpdated(token?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, distributor?: PromiseOrValue<string> | null, distributedAt?: null, oldFlowRate?: null, newFlowRate?: null): DistributionFlowUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "PoolConnectionUpdated(address,address,address,bool)"(token?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, connected?: null): PoolConnectionUpdatedEventFilter;
        PoolConnectionUpdated(token?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, connected?: null): PoolConnectionUpdatedEventFilter;
        "PoolCreated(address,address,address)"(token?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null, pool?: null): PoolCreatedEventFilter;
        PoolCreated(token?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null, pool?: null): PoolCreatedEventFilter;
        "UniversalIndexUpdated(address,address,uint32,int256,int96)"(token?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, settledAt?: null, settledValue?: null, flowRate?: null): UniversalIndexUpdatedEventFilter;
        UniversalIndexUpdated(token?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, settledAt?: null, settledValue?: null, flowRate?: null): UniversalIndexUpdatedEventFilter;
    };
    estimateGas: {
        absorbParticlesFromPool(token: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], ps: BasicParticleStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        agreementType(overrides?: CallOverrides): Promise<BigNumber>;
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        connectPoole(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createPool(admin: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        disconnectPool(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distribute(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distributeFlow(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedFlowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        flowRates(flowAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getCodeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pools(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        absorbParticlesFromPool(token: PromiseOrValue<string>, accounts: PromiseOrValue<string>[], ps: BasicParticleStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        agreementType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        connectPoole(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createPool(admin: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        disconnectPool(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distribute(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distributeFlow(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedFlowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        flowRates(flowAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCodeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pools(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GeneralDistributionAgreementV1.d.ts.map