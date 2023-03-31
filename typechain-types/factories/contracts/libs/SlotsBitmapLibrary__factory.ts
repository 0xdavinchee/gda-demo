/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SlotsBitmapLibrary,
  SlotsBitmapLibraryInterface,
} from "../../../contracts/libs/SlotsBitmapLibrary";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "ISuperfluidToken",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bitmapStateSlotId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dataStateSlotIDStart",
        type: "uint256",
      },
    ],
    name: "listData",
    outputs: [
      {
        internalType: "uint32[]",
        name: "slotIds",
        type: "uint32[]",
      },
      {
        internalType: "bytes32[]",
        name: "dataList",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610a9a61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806306967a8c14610050578063a32470101461007a578063a9472bf8146100af575b600080fd5b61006361005e3660046106ff565b6100d1565b604051610071929190610745565b60405180910390f35b81801561008657600080fd5b5061009a6100953660046107c6565b6102f7565b60405163ffffffff9091168152602001610071565b8180156100bb57600080fd5b506100cf6100ca366004610817565b610577565b005b6060806000866001600160a01b0316634b61cc3330888860016040518563ffffffff1660e01b81526004016101099493929190610873565b600060405180830381865afa158015610126573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261014e91908101906108b2565b60008151811061016057610160610970565b60209081029190910101516040805161010080825261202082019092529192508160200160208202803683375050604080516101008082526120208201909252929550905060208201612000803683370190505091506000805b61010063ffffffff821610156102e557600163ffffffff821684901c16156102d557808583815181106101ef576101ef610970565b602002602001019063ffffffff16908163ffffffff1681525050886001600160a01b0316634b61cc33308a8463ffffffff168a61022c919061099c565b60016040518563ffffffff1660e01b815260040161024d9493929190610873565b600060405180830381865afa15801561026a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261029291908101906108b2565b6000815181106102a4576102a4610970565b60200260200101518483815181106102be576102be610970565b60209081029190910101526102d2826109b5565b91505b6102de816109ce565b90506101ba565b50808452808352505094509492505050565b600080866001600160a01b0316634b61cc3330888860016040518563ffffffff1660e01b815260040161032d9493929190610873565b600060405180830381865afa15801561034a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261037291908101906108b2565b60008151811061038457610384610970565b602002602001015160001c9050600091505b61010063ffffffff83161015610512578163ffffffff1681901c600116600003610502576040805160018082528183019092526000916020808301908036833701905050905083816000815181106103f0576103f0610970565b60209081029190910101526001600160a01b03881663090c415e8861041b63ffffffff87168961099c565b846040518463ffffffff1660e01b815260040161043a939291906109f1565b600060405180830381600087803b15801561045457600080fd5b505af1158015610468573d6000803e3d6000fd5b505050508263ffffffff166001901b821760001b8160008151811061048f5761048f610970565b602090810291909101015260405163048620af60e11b81526001600160a01b0389169063090c415e906104ca908a908a9086906004016109f1565b600060405180830381600087803b1580156104e457600080fd5b505af11580156104f8573d6000803e3d6000fd5b5050505050610512565b61050b826109ce565b9150610396565b61010063ffffffff83161061056d5760405162461bcd60e51b815260206004820152601760248201527f536c6f744269746d6170206f7574206f6620626f756e64000000000000000000604482015260640160405180910390fd5b5095945050505050565b604051634b61cc3360e01b81526000906001600160a01b03861690634b61cc33906105ad90309088908890600190600401610873565b600060405180830381865afa1580156105ca573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105f291908101906108b2565b60008151811061060457610604610970565b6020908102919091018101516040805160018082528183019092529193506000928281019080368337019050509050600163ffffffff84161b821660000361064e5761064e610a4e565b8263ffffffff166001901b19821660001b8160008151811061067257610672610970565b602090810291909101015260405163048620af60e11b81526001600160a01b0387169063090c415e906106ad908890889086906004016109f1565b600060405180830381600087803b1580156106c757600080fd5b505af11580156106db573d6000803e3d6000fd5b50505050505050505050565b6001600160a01b03811681146106fc57600080fd5b50565b6000806000806080858703121561071557600080fd5b8435610720816106e7565b93506020850135610730816106e7565b93969395505050506040820135916060013590565b604080825283519082018190526000906020906060840190828701845b8281101561078457815163ffffffff1684529284019290840190600101610762565b5050508381038285015284518082528583019183019060005b818110156107b95783518352928401929184019160010161079d565b5090979650505050505050565b600080600080600060a086880312156107de57600080fd5b85356107e9816106e7565b945060208601356107f9816106e7565b94979496505050506040830135926060810135926080909101359150565b6000806000806080858703121561082d57600080fd5b8435610838816106e7565b93506020850135610848816106e7565b925060408501359150606085013563ffffffff8116811461086857600080fd5b939692955090935050565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156108c557600080fd5b825167ffffffffffffffff808211156108dd57600080fd5b818501915085601f8301126108f157600080fd5b8151818111156109035761090361089c565b8060051b604051601f19603f830116810181811085821117156109285761092861089c565b60405291825284820192508381018501918883111561094657600080fd5b938501935b828510156109645784518452938501939285019261094b565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156109af576109af610986565b92915050565b6000600182016109c7576109c7610986565b5060010190565b600063ffffffff8083168181036109e7576109e7610986565b6001019392505050565b6001600160a01b038416815260208082018490526060604083018190528351908301819052600091848101916080850190845b81811015610a4057845183529383019391830191600101610a24565b509098975050505050505050565b634e487b7160e01b600052600160045260246000fdfea26469706673582212208aa107914ce6b15cd5e231ef8221358a088ff215dae603aa014041de0870aef464736f6c63430008130033";

type SlotsBitmapLibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SlotsBitmapLibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SlotsBitmapLibrary__factory extends ContractFactory {
  constructor(...args: SlotsBitmapLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SlotsBitmapLibrary> {
    return super.deploy(overrides || {}) as Promise<SlotsBitmapLibrary>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SlotsBitmapLibrary {
    return super.attach(address) as SlotsBitmapLibrary;
  }
  override connect(signer: Signer): SlotsBitmapLibrary__factory {
    return super.connect(signer) as SlotsBitmapLibrary__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SlotsBitmapLibraryInterface {
    return new utils.Interface(_abi) as SlotsBitmapLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SlotsBitmapLibrary {
    return new Contract(address, _abi, signerOrProvider) as SlotsBitmapLibrary;
  }
}
