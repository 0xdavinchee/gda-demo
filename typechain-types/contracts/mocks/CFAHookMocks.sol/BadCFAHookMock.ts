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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace IConstantFlowAgreementHook {
  export type CFAHookParamsStruct = {
    sender: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    flowOperator: PromiseOrValue<string>;
    flowRate: PromiseOrValue<BigNumberish>;
  };

  export type CFAHookParamsStructOutput = [
    string,
    string,
    string,
    BigNumber
  ] & {
    sender: string;
    receiver: string;
    flowOperator: string;
    flowRate: BigNumber;
  };
}

export interface BadCFAHookMockInterface extends utils.Interface {
  functions: {
    "onCreate(address,(address,address,address,int96))": FunctionFragment;
    "onDelete(address,(address,address,address,int96),int96)": FunctionFragment;
    "onUpdate(address,(address,address,address,int96),int96)": FunctionFragment;
    "setCFA(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "onCreate" | "onDelete" | "onUpdate" | "setCFA"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "onCreate",
    values: [
      PromiseOrValue<string>,
      IConstantFlowAgreementHook.CFAHookParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onDelete",
    values: [
      PromiseOrValue<string>,
      IConstantFlowAgreementHook.CFAHookParamsStruct,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onUpdate",
    values: [
      PromiseOrValue<string>,
      IConstantFlowAgreementHook.CFAHookParamsStruct,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setCFA",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "onCreate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onDelete", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onUpdate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setCFA", data: BytesLike): Result;

  events: {};
}

export interface BadCFAHookMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BadCFAHookMockInterface;

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
    onCreate(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onDelete(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onUpdate(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setCFA(
      _cfaV1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  onCreate(
    arg0: PromiseOrValue<string>,
    arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onDelete(
    arg0: PromiseOrValue<string>,
    arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onUpdate(
    arg0: PromiseOrValue<string>,
    arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setCFA(
    _cfaV1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    onCreate(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onDelete(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onUpdate(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setCFA(
      _cfaV1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    onCreate(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onDelete(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onUpdate(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCFA(
      _cfaV1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onCreate(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onDelete(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onUpdate(
      arg0: PromiseOrValue<string>,
      arg1: IConstantFlowAgreementHook.CFAHookParamsStruct,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setCFA(
      _cfaV1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}