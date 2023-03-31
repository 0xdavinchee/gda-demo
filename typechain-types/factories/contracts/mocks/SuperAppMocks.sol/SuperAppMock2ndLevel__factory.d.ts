import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperAppMock2ndLevel, SuperAppMock2ndLevelInterface } from "../../../../contracts/mocks/SuperAppMocks.sol/SuperAppMock2ndLevel";
type SuperAppMock2ndLevelConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperAppMock2ndLevel__factory extends ContractFactory {
    constructor(...args: SuperAppMock2ndLevelConstructorParams);
    deploy(host: PromiseOrValue<string>, app: PromiseOrValue<string>, agreement: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperAppMock2ndLevel>;
    getDeployTransaction(host: PromiseOrValue<string>, app: PromiseOrValue<string>, agreement: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperAppMock2ndLevel;
    connect(signer: Signer): SuperAppMock2ndLevel__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161068338038061068383398101604081905261002f916100fc565b600080546001600160a01b0319166001600160a01b03851690811782556040805163bd1c448b60e01b815260026004820152602481019190915260448101929092529063bd1c448b90606401600060405180830381600087803b15801561009557600080fd5b505af11580156100a9573d6000803e3d6000fd5b5050600180546001600160a01b039586166001600160a01b031991821617909155600280549490951693169290921790925550610149915050565b6001600160a01b03811681146100f957600080fd5b50565b60008060006060848603121561011157600080fd5b835161011c816100e4565b602085015190935061012d816100e4565b604085015190925061013e816100e4565b809150509250925092565b61052b806101586000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631727b0fa1461003b578063d86ed3e514610045575b600080fd5b61004361006e565b005b610058610053366004610225565b6100d1565b6040516100659190610340565b60405180910390f35b6000546001546040516315c4878360e21b81526001600160a01b0391821660048201529116906357121e0c90602401600060405180830381600087803b1580156100b757600080fd5b505af11580156100cb573d6000803e3d6000fd5b50505050565b60008054600254600154604080519485526020850190526060936001600160a01b0393841693634329d29393811692839263546588739261011792169060448101610370565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b031916905261016e9392509088886024830161039c565b6000604051808303816000875af115801561018d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101b59190810190610491565b509a9950505050505050505050565b6001600160a01b03811681146101d957600080fd5b50565b60008083601f8401126101ee57600080fd5b50813567ffffffffffffffff81111561020657600080fd5b60208301915083602082850101111561021e57600080fd5b9250929050565b600080600080600080600080600060c08a8c03121561024357600080fd5b893561024e816101c4565b985060208a013561025e816101c4565b975060408a0135965060608a013567ffffffffffffffff8082111561028257600080fd5b61028e8d838e016101dc565b909850965060808c01359150808211156102a757600080fd5b6102b38d838e016101dc565b909650945060a08c01359150808211156102cc57600080fd5b506102d98c828d016101dc565b915080935050809150509295985092959850929598565b60005b8381101561030b5781810151838201526020016102f3565b50506000910152565b6000815180845261032c8160208601602086016102f0565b601f01601f19169290920160200192915050565b6020815260006103536020830184610314565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038316815260406020820181905260009061039490830184610314565b949350505050565b6001600160a01b03861681526080602082018190526000906103c090830187610314565b82810360408401526103d28187610314565b90508281036060840152838152838560208301376000602085830101526020601f19601f8601168201019150509695505050505050565b600082601f83011261041a57600080fd5b815167ffffffffffffffff808211156104355761043561035a565b604051601f8301601f19908116603f0116810190828211818310171561045d5761045d61035a565b8160405283815286602085880101111561047657600080fd5b6104878460208301602089016102f0565b9695505050505050565b600080604083850312156104a457600080fd5b825167ffffffffffffffff808211156104bc57600080fd5b6104c886838701610409565b935060208501519150808211156104de57600080fd5b506104eb85828601610409565b915050925092905056fea26469706673582212207a43bc95e223ae85c8bd5f2e2e903fe7f0d37167e36741b5986f91ac3d3e256464736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract SuperAppMock";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "contract AgreementMock";
            readonly name: "agreement";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
        readonly inputs: readonly [];
        readonly name: "allowCompositeApp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperAppMock2ndLevelInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperAppMock2ndLevel;
}
export {};
//# sourceMappingURL=SuperAppMock2ndLevel__factory.d.ts.map