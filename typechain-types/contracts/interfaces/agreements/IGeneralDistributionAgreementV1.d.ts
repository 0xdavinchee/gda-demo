import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IGeneralDistributionAgreementV1Interface extends utils.Interface {
    functions: {
        "agreementType()": FunctionFragment;
        "connectPool(address,bool,bytes)": FunctionFragment;
        "createPool(address,address)": FunctionFragment;
        "disconnectPool(address,bytes)": FunctionFragment;
        "distribute(address,address,uint256,bytes)": FunctionFragment;
        "distributeFlow(address,address,int96,bytes)": FunctionFragment;
        "getFlowRate(address,address)": FunctionFragment;
        "getNetFlowRate(address)": FunctionFragment;
        "isMemberConnected(address,address)": FunctionFragment;
        "realtimeBalanceOf(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "agreementType" | "connectPool" | "createPool" | "disconnectPool" | "distribute" | "distributeFlow" | "getFlowRate" | "getNetFlowRate" | "isMemberConnected" | "realtimeBalanceOf"): FunctionFragment;
    encodeFunctionData(functionFragment: "agreementType", values?: undefined): string;
    encodeFunctionData(functionFragment: "connectPool", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
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
    encodeFunctionData(functionFragment: "getFlowRate", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getNetFlowRate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isMemberConnected", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOf", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "agreementType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connectPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disconnectPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetFlowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMemberConnected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOf", data: BytesLike): Result;
    events: {
        "DistributionFlowUpdated(address,address,address,uint32,int96,int96)": EventFragment;
        "PoolConnectionUpdated(address,address,address,bool)": EventFragment;
        "PoolCreated(address,address,address)": EventFragment;
        "UniversalIndexUpdated(address,address,uint32,int256,int96)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DistributionFlowUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolConnectionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UniversalIndexUpdated"): EventFragment;
}
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
export interface IGeneralDistributionAgreementV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGeneralDistributionAgreementV1Interface;
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
        agreementType(overrides?: CallOverrides): Promise<[string]>;
        connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
    };
    agreementType(overrides?: CallOverrides): Promise<string>;
    connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
    getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    callStatic: {
        agreementType(overrides?: CallOverrides): Promise<string>;
        connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        createPool(admin: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        disconnectPool(pool: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        distribute(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        distributeFlow(token: PromiseOrValue<string>, pool: PromiseOrValue<string>, requestedFlowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
    };
    filters: {
        "DistributionFlowUpdated(address,address,address,uint32,int96,int96)"(token?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, distributor?: PromiseOrValue<string> | null, distributedAt?: null, oldFlowRate?: null, newFlowRate?: null): DistributionFlowUpdatedEventFilter;
        DistributionFlowUpdated(token?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, distributor?: PromiseOrValue<string> | null, distributedAt?: null, oldFlowRate?: null, newFlowRate?: null): DistributionFlowUpdatedEventFilter;
        "PoolConnectionUpdated(address,address,address,bool)"(token?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, connected?: null): PoolConnectionUpdatedEventFilter;
        PoolConnectionUpdated(token?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, connected?: null): PoolConnectionUpdatedEventFilter;
        "PoolCreated(address,address,address)"(token?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null, pool?: null): PoolCreatedEventFilter;
        PoolCreated(token?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null, pool?: null): PoolCreatedEventFilter;
        "UniversalIndexUpdated(address,address,uint32,int256,int96)"(token?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, settledAt?: null, settledValue?: null, flowRate?: null): UniversalIndexUpdatedEventFilter;
        UniversalIndexUpdated(token?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, settledAt?: null, settledValue?: null, flowRate?: null): UniversalIndexUpdatedEventFilter;
    };
    estimateGas: {
        agreementType(overrides?: CallOverrides): Promise<BigNumber>;
        connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        agreementType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        connectPool(pool: PromiseOrValue<string>, doConnect: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        getFlowRate(from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNetFlowRate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMemberConnected(pool: PromiseOrValue<string>, member: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IGeneralDistributionAgreementV1.d.ts.map