import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperAppMockUsingDeprecatedRegisterApp, SuperAppMockUsingDeprecatedRegisterAppInterface } from "../../../../contracts/mocks/SuperAppMocks.sol/SuperAppMockUsingDeprecatedRegisterApp";
type SuperAppMockUsingDeprecatedRegisterAppConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperAppMockUsingDeprecatedRegisterApp__factory extends ContractFactory {
    constructor(...args: SuperAppMockUsingDeprecatedRegisterAppConstructorParams);
    deploy(host: PromiseOrValue<string>, configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperAppMockUsingDeprecatedRegisterApp>;
    getDeployTransaction(host: PromiseOrValue<string>, configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperAppMockUsingDeprecatedRegisterApp;
    connect(signer: Signer): SuperAppMockUsingDeprecatedRegisterApp__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060405161010f38038061010f833981016040819052602c91608a565b6040516315a722b960e31b8152600481018290526001600160a01b0383169063ad3915c890602401600060405180830381600087803b158015606d57600080fd5b505af11580156080573d6000803e3d6000fd5b50505050505060c2565b60008060408385031215609c57600080fd5b82516001600160a01b038116811460b257600080fd5b6020939093015192949293505050565b603f806100d06000396000f3fe6080604052600080fdfea26469706673582212209144a5f41e229c49a39e4f69d314c41a1f2ef05da55a8e003eb2ab6e32ac20c264736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "configWord";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }];
    static createInterface(): SuperAppMockUsingDeprecatedRegisterAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperAppMockUsingDeprecatedRegisterApp;
}
export {};
//# sourceMappingURL=SuperAppMockUsingDeprecatedRegisterApp__factory.d.ts.map