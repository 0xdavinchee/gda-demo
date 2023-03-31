/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GDADeployer,
  GDADeployerInterface,
} from "../../../contracts/temp/GDADeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGeneralDistributionAgreementV1",
        name: "gda",
        type: "address",
      },
      {
        internalType: "contract ISuperfluidToken",
        name: "superToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NOT_OWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "UNEQUAL_LENGTH_ARRAY",
    type: "error",
  },
  {
    inputs: [],
    name: "_gda",
    outputs: [
      {
        internalType: "contract IGeneralDistributionAgreementV1",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_superToken",
    outputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "createPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract ISuperTokenPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "members",
        type: "address[]",
      },
      {
        internalType: "int128[]",
        name: "units",
        type: "int128[]",
      },
    ],
    name: "updateMemberUnits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b506040516105d13803806105d183398101604081905261002f91610062565b6001600160a01b039182166080523360c0521660a05261009c565b6001600160a01b038116811461005f57600080fd5b50565b6000806040838503121561007557600080fd5b82516100808161004a565b60208401519092506100918161004a565b809150509250929050565b60805160a05160c0516104f36100de6000396000818160df015261023f015260008181610106015261029a015260008181606c01526102c201526104f36000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063132ec62d146100675780631569d05b146100aa57806316f0115b146100bf5780639a06b113146100d2578063b2bdfa7b146100da578063c8b53aef14610101575b600080fd5b61008e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100bd6100b836600461039d565b610128565b005b60005461008e906001600160a01b031681565b6100bd610234565b61008e7f000000000000000000000000000000000000000000000000000000000000000081565b61008e7f000000000000000000000000000000000000000000000000000000000000000081565b8281146101485760405163c0ca646b60e01b815260040160405180910390fd5b60005b8381101561022d576000546001600160a01b031663bf734e5486868481811061017657610176610409565b905060200201602081019061018b9190610437565b85858581811061019d5761019d610409565b90506020020160208101906101b2919061045b565b6040516001600160e01b031960e085901b1681526001600160a01b039092166004830152600f0b60248201526044016020604051808303816000875af1158015610200573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610224919061047e565b5060010161014b565b5050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461027d576040516338ebc58960e11b815260040160405180910390fd5b60405163e343361560e01b81523060048201526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000169063e3433615906044016020604051808303816000875af115801561030b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032f91906104a0565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008083601f84011261036357600080fd5b50813567ffffffffffffffff81111561037b57600080fd5b6020830191508360208260051b850101111561039657600080fd5b9250929050565b600080600080604085870312156103b357600080fd5b843567ffffffffffffffff808211156103cb57600080fd5b6103d788838901610351565b909650945060208701359150808211156103f057600080fd5b506103fd87828801610351565b95989497509550505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038116811461043457600080fd5b50565b60006020828403121561044957600080fd5b81356104548161041f565b9392505050565b60006020828403121561046d57600080fd5b813580600f0b811461045457600080fd5b60006020828403121561049057600080fd5b8151801515811461045457600080fd5b6000602082840312156104b257600080fd5b81516104548161041f56fea26469706673582212200d735297c551e3cdebdfb063a33bcdd0c9d3c6ab6504a45e26acb9d2fe4c444564736f6c63430008130033";

type GDADeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GDADeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GDADeployer__factory extends ContractFactory {
  constructor(...args: GDADeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    gda: PromiseOrValue<string>,
    superToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GDADeployer> {
    return super.deploy(
      gda,
      superToken,
      overrides || {}
    ) as Promise<GDADeployer>;
  }
  override getDeployTransaction(
    gda: PromiseOrValue<string>,
    superToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(gda, superToken, overrides || {});
  }
  override attach(address: string): GDADeployer {
    return super.attach(address) as GDADeployer;
  }
  override connect(signer: Signer): GDADeployer__factory {
    return super.connect(signer) as GDADeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GDADeployerInterface {
    return new utils.Interface(_abi) as GDADeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GDADeployer {
    return new Contract(address, _abi, signerOrProvider) as GDADeployer;
  }
}