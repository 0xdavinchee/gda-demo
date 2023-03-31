import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace CFAv1Library {
    type InitDataStruct = {
        host: PromiseOrValue<string>;
        cfa: PromiseOrValue<string>;
    };
    type InitDataStructOutput = [string, string] & {
        host: string;
        cfa: string;
    };
}
export declare namespace IDAv1Library {
    type InitDataStruct = {
        host: PromiseOrValue<string>;
        ida: PromiseOrValue<string>;
    };
    type InitDataStructOutput = [string, string] & {
        host: string;
        ida: string;
    };
}
export declare namespace SuperfluidFrameworkDeployer {
    type FrameworkStruct = {
        governance: PromiseOrValue<string>;
        host: PromiseOrValue<string>;
        cfa: PromiseOrValue<string>;
        cfaLib: CFAv1Library.InitDataStruct;
        ida: PromiseOrValue<string>;
        gda: PromiseOrValue<string>;
        idaLib: IDAv1Library.InitDataStruct;
        superTokenFactory: PromiseOrValue<string>;
        resolver: PromiseOrValue<string>;
        superfluidLoader: PromiseOrValue<string>;
        cfaV1Forwarder: PromiseOrValue<string>;
    };
    type FrameworkStructOutput = [
        string,
        string,
        string,
        CFAv1Library.InitDataStructOutput,
        string,
        string,
        IDAv1Library.InitDataStructOutput,
        string,
        string,
        string,
        string
    ] & {
        governance: string;
        host: string;
        cfa: string;
        cfaLib: CFAv1Library.InitDataStructOutput;
        ida: string;
        gda: string;
        idaLib: IDAv1Library.InitDataStructOutput;
        superTokenFactory: string;
        resolver: string;
        superfluidLoader: string;
        cfaV1Forwarder: string;
    };
}
export interface SuperfluidFrameworkDeployerInterface extends utils.Interface {
    functions: {
        "DEFAULT_REWARD_ADDRESS()": FunctionFragment;
        "getFramework()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_REWARD_ADDRESS" | "getFramework" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_REWARD_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFramework", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_REWARD_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFramework", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {};
}
export interface SuperfluidFrameworkDeployer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperfluidFrameworkDeployerInterface;
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
        DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        getFramework(overrides?: CallOverrides): Promise<[
            SuperfluidFrameworkDeployer.FrameworkStructOutput
        ] & {
            sf: SuperfluidFrameworkDeployer.FrameworkStructOutput;
        }>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<string>;
    getFramework(overrides?: CallOverrides): Promise<SuperfluidFrameworkDeployer.FrameworkStructOutput>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<string>;
        getFramework(overrides?: CallOverrides): Promise<SuperfluidFrameworkDeployer.FrameworkStructOutput>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        getFramework(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFramework(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperfluidFrameworkDeployer.d.ts.map