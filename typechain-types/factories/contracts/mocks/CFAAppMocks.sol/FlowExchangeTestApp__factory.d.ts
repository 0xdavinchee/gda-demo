import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { FlowExchangeTestApp, FlowExchangeTestAppInterface } from "../../../../contracts/mocks/CFAAppMocks.sol/FlowExchangeTestApp";
type FlowExchangeTestAppConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FlowExchangeTestApp__factory extends ContractFactory {
    constructor(...args: FlowExchangeTestAppConstructorParams);
    deploy(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, targetToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FlowExchangeTestApp>;
    getDeployTransaction(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, targetToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FlowExchangeTestApp;
    connect(signer: Signer): FlowExchangeTestApp__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610cb9380380610cb983398101604081905261002f91610129565b6001600160a01b03831661004557610045610176565b6001600160a01b03821661005b5761005b610176565b600080546001600160a01b038086166001600160a01b031992831617909255600180548584169083168117909155600280549385169390921692909217905560405163bd1c448b60e01b8152643d00000001919063bd1c448b906100d690849060040190815260406020820181905260009082015260600190565b600060405180830381600087803b1580156100f057600080fd5b505af1158015610104573d6000803e3d6000fd5b505050505050505061018c565b6001600160a01b038116811461012657600080fd5b50565b60008060006060848603121561013e57600080fd5b835161014981610111565b602085015190935061015a81610111565b604085015190925061016b81610111565b809150509250925092565b634e487b7160e01b600052600160045260246000fd5b610b1e8061019b6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063230dbd291461006757806330d9c9151461009057806353c11f99146100a35780635f9e7d77146100b6578063884d1f40146100c9578063d86ed3e5146100dc575b600080fd5b61007a6100753660046105aa565b6100ef565b60405161008791906106c5565b60405180910390f35b61007a61009e3660046106df565b610156565b61007a6100b13660046105aa565b6101b9565b61007a6100c43660046106df565b61021e565b61007a6100d73660046106df565b610285565b61007a6100ea3660046105aa565b6102e8565b60405162461bcd60e51b815260206004820152602e60248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201526d19595b595b9d08155c19185d195960921b60648201526060906084015b60405180910390fd5b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d0810dc99585d1959608a1b606482015260609060840161014d565b60405162461bcd60e51b815260206004820152603160248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201527019595b595b9d0815195c9b5a5b985d1959607a1b606482015260609060840161014d565b60405162461bcd60e51b815260206004820152603360248201527f556e737570706f727465642063616c6c6261636b202d20204265666f7265204160448201527219dc99595b595b9d0815195c9b5a5b985d1959606a1b606482015260609060840161014d565b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d081d5c19185d1959608a1b606482015260609060840161014d565b606082828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250600154604051631fb6491d60e11b815295965090946001600160a01b039091169350633f6c923a925061035691508790879060040161077e565b600060405180830381865afa158015610373573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261039b91908101906108ae565b905060008060009054906101000a90046001600160a01b03166001600160a01b031663e6a1e8888d8460600151306040518463ffffffff1660e01b8152600401610405939291906001600160a01b0393841681529183166020830152909116604082015260600190565b608060405180830381865afa158015610422573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044691906109b5565b5050600154600080546002546060880151604080519485526020850190529496506001600160a01b039384169550634329d293949184169384936362fc305e9361049b939290921691908990604481016109f9565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526104f1939250908860248201610a2f565b6000604051808303816000875af1158015610510573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105389190810190610a84565b509c9b505050505050505050505050565b6001600160a01b038116811461055e57600080fd5b50565b60008083601f84011261057357600080fd5b50813567ffffffffffffffff81111561058b57600080fd5b6020830191508360208285010111156105a357600080fd5b9250929050565b600080600080600080600080600060c08a8c0312156105c857600080fd5b89356105d381610549565b985060208a01356105e381610549565b975060408a0135965060608a013567ffffffffffffffff8082111561060757600080fd5b6106138d838e01610561565b909850965060808c013591508082111561062c57600080fd5b6106388d838e01610561565b909650945060a08c013591508082111561065157600080fd5b5061065e8c828d01610561565b915080935050809150509295985092959850929598565b60005b83811015610690578181015183820152602001610678565b50506000910152565b600081518084526106b1816020860160208601610675565b601f01601f19169290920160200192915050565b6020815260006106d86020830184610699565b9392505050565b600080600080600080600060a0888a0312156106fa57600080fd5b873561070581610549565b9650602088013561071581610549565b955060408801359450606088013567ffffffffffffffff8082111561073957600080fd5b6107458b838c01610561565b909650945060808a013591508082111561075e57600080fd5b5061076b8a828b01610561565b989b979a50959850939692959293505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff811182821017156107e7576107e76107ad565b60405290565b805160ff811681146107fe57600080fd5b919050565b80516107fe81610549565b80516001600160e01b0319811681146107fe57600080fd5b600082601f83011261083757600080fd5b815167ffffffffffffffff80821115610852576108526107ad565b604051601f8301601f19908116603f0116810190828211818310171561087a5761087a6107ad565b8160405283815286602085880101111561089357600080fd5b6108a4846020830160208901610675565b9695505050505050565b6000602082840312156108c057600080fd5b815167ffffffffffffffff808211156108d857600080fd5b9083019061016082860312156108ed57600080fd5b6108f56107c3565b6108fe836107ed565b815261090c602084016107ed565b60208201526040830151604082015261092760608401610803565b60608201526109386080840161080e565b608082015260a08301518281111561094f57600080fd5b61095b87828601610826565b60a08301525060c083015160c082015260e083015160e0820152610100915081830151828201526101209150610992828401610803565b8282015261014091506109a6828401610803565b91810191909152949350505050565b600080600080608085870312156109cb57600080fd5b84519350602085015180600b0b81146109e357600080fd5b6040860151606090960151949790965092505050565b6001600160a01b03858116825284166020820152600b83900b60408201526080606082018190526000906108a490830184610699565b6001600160a01b0385168152608060208201819052600090610a5390830186610699565b8281036040840152610a658186610699565b90508281036060840152610a798185610699565b979650505050505050565b60008060408385031215610a9757600080fd5b825167ffffffffffffffff80821115610aaf57600080fd5b610abb86838701610826565b93506020850151915080821115610ad157600080fd5b50610ade85828601610826565b915050925092905056fea26469706673582212202a9b79c5664e6a86bafcd485076b2ead69bf956d977a9af193bbb448005dac1c64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IConstantFlowAgreementV1";
            readonly name: "cfa";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluid";
            readonly name: "superfluid";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken";
            readonly name: "targetToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementCreated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementTerminated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementUpdated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementCreated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementTerminated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementUpdated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): FlowExchangeTestAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FlowExchangeTestApp;
}
export {};
//# sourceMappingURL=FlowExchangeTestApp__factory.d.ts.map