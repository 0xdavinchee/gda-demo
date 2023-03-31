/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface GeneralDistributionAgreementV1Interface
  extends utils.Interface {
  functions: {
    "agreementType()": FunctionFragment;
    "castrate()": FunctionFragment;
    "connectPool(address)": FunctionFragment;
    "createPool(address)": FunctionFragment;
    "disconnectPool(address)": FunctionFragment;
    "distribute(address,address,uint256,bytes)": FunctionFragment;
    "distributeFlow(address,address,int96,bytes)": FunctionFragment;
    "getCodeAddress()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "realtimeBalanceOf(address,address,uint256)": FunctionFragment;
    "updateCode(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "agreementType"
      | "castrate"
      | "connectPool"
      | "createPool"
      | "disconnectPool"
      | "distribute"
      | "distributeFlow"
      | "getCodeAddress"
      | "proxiableUUID"
      | "realtimeBalanceOf"
      | "updateCode"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "agreementType",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "castrate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "connectPool",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createPool",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "disconnectPool",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeFlow",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCodeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "realtimeBalanceOf",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCode",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "agreementType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "castrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "connectPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disconnectPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributeFlow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCodeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "realtimeBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateCode", data: BytesLike): Result;

  events: {
    "CodeUpdated(bytes32,address)": EventFragment;
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CodeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface CodeUpdatedEventObject {
  uuid: string;
  codeAddress: string;
}
export type CodeUpdatedEvent = TypedEvent<
  [string, string],
  CodeUpdatedEventObject
>;

export type CodeUpdatedEventFilter = TypedEventFilter<CodeUpdatedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface GeneralDistributionAgreementV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GeneralDistributionAgreementV1Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    agreementType(overrides?: CallOverrides): Promise<[string]>;

    castrate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    connectPool(
      pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createPool(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disconnectPool(
      pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    distribute(
      token: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    distributeFlow(
      token: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      requestedFlowRate: PromiseOrValue<BigNumberish>,
      ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCodeAddress(
      overrides?: CallOverrides
    ): Promise<[string] & { codeAddress: string }>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    realtimeBalanceOf(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    updateCode(
      newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  agreementType(overrides?: CallOverrides): Promise<string>;

  castrate(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  connectPool(
    pool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createPool(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disconnectPool(
    pool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  distribute(
    token: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    ctx: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  distributeFlow(
    token: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    requestedFlowRate: PromiseOrValue<BigNumberish>,
    ctx: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCodeAddress(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  realtimeBalanceOf(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    time: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      dynamicBalance: BigNumber;
      deposit: BigNumber;
      owedDeposit: BigNumber;
    }
  >;

  updateCode(
    newAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    agreementType(overrides?: CallOverrides): Promise<string>;

    castrate(overrides?: CallOverrides): Promise<void>;

    connectPool(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    createPool(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    disconnectPool(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    distribute(
      token: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      ctx: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    distributeFlow(
      token: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      requestedFlowRate: PromiseOrValue<BigNumberish>,
      ctx: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getCodeAddress(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    realtimeBalanceOf(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    updateCode(
      newAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CodeUpdated(bytes32,address)"(
      uuid?: null,
      codeAddress?: null
    ): CodeUpdatedEventFilter;
    CodeUpdated(uuid?: null, codeAddress?: null): CodeUpdatedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    agreementType(overrides?: CallOverrides): Promise<BigNumber>;

    castrate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    connectPool(
      pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createPool(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disconnectPool(
      pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    distribute(
      token: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    distributeFlow(
      token: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      requestedFlowRate: PromiseOrValue<BigNumberish>,
      ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCodeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    realtimeBalanceOf(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateCode(
      newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    agreementType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    castrate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    connectPool(
      pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createPool(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disconnectPool(
      pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    distribute(
      token: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    distributeFlow(
      token: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      requestedFlowRate: PromiseOrValue<BigNumberish>,
      ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCodeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    realtimeBalanceOf(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateCode(
      newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}