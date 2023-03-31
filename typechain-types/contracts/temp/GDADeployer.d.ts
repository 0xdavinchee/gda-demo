import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface GDADeployerInterface extends utils.Interface {
    functions: {
        "_gda()": FunctionFragment;
        "_owner()": FunctionFragment;
        "_superToken()": FunctionFragment;
        "createPool()": FunctionFragment;
        "pool()": FunctionFragment;
        "updateMemberUnits(address[],int128[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_gda" | "_owner" | "_superToken" | "createPool" | "pool" | "updateMemberUnits"): FunctionFragment;
    encodeFunctionData(functionFragment: "_gda", values?: undefined): string;
    encodeFunctionData(functionFragment: "_owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "_superToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "createPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateMemberUnits", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    decodeFunctionResult(functionFragment: "_gda", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_superToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMemberUnits", data: BytesLike): Result;
    events: {};
}
export interface GDADeployer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GDADeployerInterface;
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
        _gda(overrides?: CallOverrides): Promise<[string]>;
        _owner(overrides?: CallOverrides): Promise<[string]>;
        _superToken(overrides?: CallOverrides): Promise<[string]>;
        createPool(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pool(overrides?: CallOverrides): Promise<[string]>;
        updateMemberUnits(members: PromiseOrValue<string>[], units: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _gda(overrides?: CallOverrides): Promise<string>;
    _owner(overrides?: CallOverrides): Promise<string>;
    _superToken(overrides?: CallOverrides): Promise<string>;
    createPool(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pool(overrides?: CallOverrides): Promise<string>;
    updateMemberUnits(members: PromiseOrValue<string>[], units: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _gda(overrides?: CallOverrides): Promise<string>;
        _owner(overrides?: CallOverrides): Promise<string>;
        _superToken(overrides?: CallOverrides): Promise<string>;
        createPool(overrides?: CallOverrides): Promise<void>;
        pool(overrides?: CallOverrides): Promise<string>;
        updateMemberUnits(members: PromiseOrValue<string>[], units: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _gda(overrides?: CallOverrides): Promise<BigNumber>;
        _owner(overrides?: CallOverrides): Promise<BigNumber>;
        _superToken(overrides?: CallOverrides): Promise<BigNumber>;
        createPool(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<BigNumber>;
        updateMemberUnits(members: PromiseOrValue<string>[], units: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _gda(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _superToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createPool(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateMemberUnits(members: PromiseOrValue<string>[], units: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GDADeployer.d.ts.map