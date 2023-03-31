import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SuperTokenPool, SuperTokenPoolInterface } from "../../../contracts/superfluid/SuperTokenPool";
type SuperTokenPoolConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperTokenPool__factory extends ContractFactory {
    constructor(...args: SuperTokenPoolConstructorParams);
    deploy(admin_: PromiseOrValue<string>, gda: PromiseOrValue<string>, superToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperTokenPool>;
    getDeployTransaction(admin_: PromiseOrValue<string>, gda: PromiseOrValue<string>, superToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperTokenPool;
    connect(signer: Signer): SuperTokenPool__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001a3d38038062001a3d8339810160408190526200003491620000d4565b6200003f336200006b565b600580546001600160a01b0319166001600160a01b039485161790559082166080521660a05262000128565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620000d157600080fd5b50565b600080600060608486031215620000ea57600080fd5b8351620000f781620000bb565b60208501519093506200010a81620000bb565b60408501519092506200011d81620000bb565b809150509250925092565b60805160a0516118d36200016a600039600081816102af015281816105340152610cee015260008181610507015281816108d80152610cc101526118d36000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806381045ead116100b8578063bf734e541161007c578063bf734e5414610297578063c8b53aef146102aa578063d1058e59146102d1578063ed2e9e68146102d9578063f2fde38b146102ec578063f851a440146102ff57600080fd5b806381045ead146102375780638da5cb5b1461024c578063a583024b14610271578063a754a70214610284578063b68ef98a1461028f57600080fd5b80636c1d0582116100ff5780636c1d0582146101e7578063712c1f26146101fa578063715018a61461020757806377329f35146102115780637e2758491461022457600080fd5b80630134aeba1461013c5780630fefbc09146101575780631e08b63a1461019657806342d1cdbc146101b1578063539e8c1c146101d4575b600080fd5b610144610312565b6040519081526020015b60405180910390f35b61018361016536600461140c565b6001600160a01b0316600090815260066020526040902054600f0b90565b604051600f9190910b815260200161014e565b61019e610369565b604051600b9190910b815260200161014e565b6101c46101bf366004611439565b610388565b604051901515815260200161014e565b61019e6101e236600461140c565b6105d6565b6101446101f5366004611439565b610619565b60085461018390600f0b81565b61020f6106ff565b005b6101c461021f36600461140c565b610713565b6101c4610232366004611473565b610720565b61023f6107e5565b60405161014e91906114bc565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161014e565b61014461027f36600461140c565b610836565b600154600f0b610183565b61019e610842565b6101c46102a536600461150d565b61085c565b6102597f000000000000000000000000000000000000000000000000000000000000000081565b6101c4610d83565b6101c46102e7366004611544565b610d90565b61020f6102fa36600461140c565b610db3565b600554610259906001600160a01b031681565b6008546040805160608101825260025463ffffffff90811682526003546020830152600454600f90810b9383019390935260009342936103639391900b9161035d91908590610e3116565b90610e5f565b91505090565b60015460045460009161038391600f90810b91900b610e6f565b905090565b6000806103958484610619565b604080516002808252606082018352929350839260009260208301908036833701905050905030816000815181106103cf576103cf61155c565b60200260200101906001600160a01b031690816001600160a01b03168152505084816001815181106104035761040361155c565b6001600160a01b03929092166020928302919091019091015260408051600280825260608201909252600091816020015b60408051606081018252600080825260208083018290529282015282526000199092019101816104345790505090506104b4610489604080516060810182526000808252602082018190529181019190915290565b846104ad604080516060810182526000808252602082018190529181019190915290565b9190610e7b565b826000815181106104c7576104c761155c565b60200260200101836001815181106104e1576104e161155c565b60209081029190910101919091525260405163b0bd081f60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b0bd081f90610560907f00000000000000000000000000000000000000000000000000000000000000009086908690600401611572565b6020604051808303816000875af115801561057f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a3919061162a565b6105af576105af611647565b50506001600160a01b03841660009081526007602052604090205550600190505b92915050565b6001600160a01b038116600090815260066020526040812054600f0b8082036106025750600092915050565b60045461061290600f0b82610e6f565b9392505050565b6040805160808101825260018054600f90810b8385019081528451606081810187526002805463ffffffff90811684526003805460208681019190915260048054890b878d0152858b01969096529589526001600160a01b038b166000908152600687528a81208b518087018d5281548a0b8152998101548a8901528b519586018c5293840154831685529083015484870152919093015490940b81880152958401959095528301919091529184916106f7916106d991908490610ed916565b6001600160a01b038516600090815260076020526040902054610f30565b949350505050565b610707610f3c565b6107116000610f96565b565b6000426106128184610388565b600061072a610f3c565b8115610782576008546001600160a01b03841660009081526006602052604090205461075d91600f90810b91900b610fe6565b600880546001600160801b0319166001600160801b03929092169190911790556107d0565b6008546001600160a01b0384166000908152600660205260409020546107af91600f90810b91900b610ff2565b600880546001600160801b0319166001600160801b03929092169190911790555b6107da8484610388565b506001949350505050565b6107ed611365565b50604080518082018252600154600f90810b8252825160608101845260025463ffffffff16815260035460208281019190915260045490920b9381019390935281019190915290565b60006105d04283610619565b60085460045460009161038391600f90810b91900b610e6f565b60008082600f0b12156108825760405163d568f5c560e01b815260040160405180910390fd5b6005546001600160a01b031633146108ad5760405163e448e00d60e01b815260040160405180910390fd5b6040516331e0bae760e21b81523060048201526001600160a01b0384811660248301524291829185917f00000000000000000000000000000000000000000000000000000000000000009091169063c782eb9c90604401602060405180830381865afa158015610921573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610945919061162a565b6109a0576008546001600160a01b03871660009081526006602052604090205461097f9161097991600f91820b910b610fe6565b82610ff2565b600880546001600160801b0319166001600160801b03929092169190911790555b6040805160608101825260008082526020820181905291810191909152610b29818385604051806040016040528060016040518060400160405290816000820160009054906101000a9004600f0b600f0b600f0b8152602001600182016040518060600160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001600182015481526020016002820160009054906101000a9004600f0b600f0b600f0b81525050815250508152602001600660008e6001600160a01b03166001600160a01b031681526020019081526020016000206040518060600160405290816000820160009054906101000a9004600f0b600f0b600f0b815260200160018201548152602001600282016040518060600160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001600182015481526020016002820160009054906101000a9004600f0b600f0b600f0b8152505081525050815250610ffe909392919063ffffffff16565b6001600160a01b038a166000908152600660209081526040808320855181546001600160801b039182166001600160801b0319918216178355878501516001808501919091559784015180516002808601805463ffffffff93841663ffffffff19918216179091558389015160038089019190915593880151600497880180549188169187169190911790558c518c54908716908616178c559b88015180518254931692909c16919091179055898601519055978301518254911697169690961790955584518481528086019095529194509291908281019080368337505060055482519293506001600160a01b031691839150600090610c2c57610c2c61155c565b6001600160a01b039290921660209283029190910190910152604080516001808252818301909252600091816020015b6040805160608101825260008082526020808301829052928201528252600019909201910181610c5c5790505090508281600081518110610c9f57610c9f61155c565b602090810291909101015260405163b0bd081f60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b0bd081f90610d1a907f00000000000000000000000000000000000000000000000000000000000000009086908690600401611572565b6020604051808303816000875af1158015610d39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5d919061162a565b610d6957610d69611647565b5050610d758488610388565b506001979650505050505050565b6000426103638133610388565b6000610d9a610f3c565b816001610da7828261165d565b5060019150505b919050565b610dbb610f3c565b6001600160a01b038116610e255760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610e2e81610f96565b50565b6000610612610e55610e4784866000015161111c565b6040860151600f0b90611128565b846020015161113e565b6000610612600f83900b846116fc565b6000610612828461172c565b6040805160608082018352600080835260208084018290528385018290528451928301855281835282018190529281019290925290610ec3610ebc8461114a565b8690611155565b9150610ecf8484611155565b9050935093915050565b6000610612836020015160200151610f2b85602001516000015161035d610f1187896000015160200151610e3190919063ffffffff16565b6020890151604001518051610f269190610e31565b610f30565b61113e565b6000610612828461174c565b6000546001600160a01b031633146107115760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610e1c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000610612828461176c565b60006106128284611799565b611006611365565b61100e6113a2565b6040805160608101825260008082526020820181905291810191909152865151600061104861103d8389610ff2565b60208b015151610fe6565b905060006110568a88611196565b805160200151604001519091506000600f84900b156110885761107e600f83900b86866111e6565b909250905061109d565b611096600f83900b86610e6f565b9050600091505b8251602001516110ad9083611210565b8351602001528251600f85900b905260408b01516110df906110cf9083610ff2565b6110d98d8c611247565b90611210565b8351602080860151600f8e900b8152865190910151919a5098509096506111059061128d565b876040018190525050505050509450945094915050565b600061061282846117c6565b600061061263ffffffff8316600f85900b6116fc565b600061061282846117e3565b60006105d08261180b565b604080516060810182526000808252602082018190529181019190915261117b8361128d565b905061118b81602001518361113e565b602082015292915050565b61119e6113d5565b82516111aa90836112c8565b815260208301516111ba906112eb565b60208201526111c98383610ed9565b602080830180518201929092528251015190516040015292915050565b600080611204836111fb600f88900b87610e6f565b600f0b9061131c565b91509150935093915050565b60408051606081018252600080825260208201819052918101919091526112368361128d565b600f9290920b604083015250919050565b604080516060810182526000808252602082018190529181019190915261126d8361128d565b90506112798383610e31565b602082015263ffffffff9091168152919050565b6040805160608101825260008082526020808301828152838501928352855163ffffffff1684529085015190529290910151600f0b90915290565b6112d0611365565b6112d98361133e565b602081015190915061118b9083611247565b6112f36113a2565b8151600f0b81526020808301519082015260408201516113129061128d565b6040820152919050565b600080611329838561183d565b9150611335838561187b565b90509250929050565b611346611365565b8151600f0b8152602082015161135b9061128d565b6020820152919050565b60405180604001604052806000600f0b815260200161139d604080516060810182526000808252602082018190529181019190915290565b905290565b60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b60405180604001604052806113e8611365565b815260200161139d6113a2565b80356001600160a01b0381168114610dae57600080fd5b60006020828403121561141e57600080fd5b610612826113f5565b63ffffffff81168114610e2e57600080fd5b6000806040838503121561144c57600080fd5b823561145781611427565b9150611335602084016113f5565b8015158114610e2e57600080fd5b60008060006060848603121561148857600080fd5b833561149381611427565b92506114a1602085016113f5565b915060408401356114b181611465565b809150509250925092565b8151600f0b815260208083015160808301916114f790840182805163ffffffff16825260208082015190830152604090810151600f0b910152565b5092915050565b80600f0b8114610e2e57600080fd5b6000806040838503121561152057600080fd5b611529836113f5565b91506020830135611539816114fe565b809150509250929050565b60006080828403121561155657600080fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0384811682526060602080840182905285518483018190526000938783019290916080870190865b818110156115bf5785518516835294830194918301916001016115a1565b5050868103604088015287518082529082019350915080870160005b8381101561161b5761160b858351805163ffffffff16825260208082015190830152604090810151600f0b910152565b93850193908201906001016115db565b50929998505050505050505050565b60006020828403121561163c57600080fd5b815161061281611465565b634e487b7160e01b600052600160045260246000fd5b8135611668816114fe565b81546001600160801b0319166001600160801b0382161782555060018101602083013561169481611427565b815463ffffffff191663ffffffff919091161790556040820135600282015560608201356116c1816114fe565b6003820180546001600160801b0383166001600160801b031991909116179055505050565b634e487b7160e01b600052601160045260246000fd5b80820260008212600160ff1b84141615611718576117186116e6565b81810583148215176105d0576105d06116e6565b600082600f0b82600f0b0280600f0b91508082146114f7576114f76116e6565b81810360008312801583831316838312821617156114f7576114f76116e6565b600f82810b9082900b0360016001607f1b0319811260016001607f1b03821317156105d0576105d06116e6565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156105d0576105d06116e6565b63ffffffff8281168282160390808211156114f7576114f76116e6565b8082018281126000831280158216821582161715611803576118036116e6565b505092915050565b6000600160ff1b8201611820576118206116e6565b5060000390565b634e487b7160e01b600052601260045260246000fd5b600081600f0b83600f0b8061185457611854611827565b60016001607f1b0319821460001982141615611872576118726116e6565b90059392505050565b600082600f0b8061188e5761188e611827565b8083600f0b079150509291505056fea2646970667358221220ebdf9250d0e3af0b28ffc4a8b3ac5f9fb9aa592b0d00e00ca34e06d73c913cde64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "admin_";
            readonly type: "address";
        }, {
            readonly internalType: "contract GeneralDistributionAgreementV1";
            readonly name: "gda";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_POOL_NEGATIVE_UNITS_NOT_SUPPORTED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_POOL_NOT_POOL_ADMIN";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "int128";
            readonly name: "totalUnits";
            readonly type: "int128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "wpSettledAt";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "wpSettledValue";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "int96";
            readonly name: "wpFlowRate";
            readonly type: "int96";
        }];
        readonly name: "PoolIndexUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "_superToken";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "time";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "claimAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "claimAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "time";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "getClaimable";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "getClaimable";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDistributionFlowRate";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getIndex";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "Unit";
                readonly name: "total_units";
                readonly type: "int128";
            }, {
                readonly components: readonly [{
                    readonly internalType: "Time";
                    readonly name: "settled_at";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "Value";
                    readonly name: "settled_value";
                    readonly type: "int256";
                }, {
                    readonly internalType: "FlowRate";
                    readonly name: "flow_rate";
                    readonly type: "int128";
                }];
                readonly internalType: "struct BasicParticle";
                readonly name: "wrapped_particle";
                readonly type: "tuple";
            }];
            readonly internalType: "struct PDPoolIndex";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "getMemberFlowRate";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPendingDistribution";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPendingDistributionFlowRate";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalUnits";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "";
            readonly type: "int128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }];
        readonly name: "getUnits";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "";
            readonly type: "int128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "time";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "doConnect";
            readonly type: "bool";
        }];
        readonly name: "operatorConnectMember";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "Unit";
                readonly name: "total_units";
                readonly type: "int128";
            }, {
                readonly components: readonly [{
                    readonly internalType: "Time";
                    readonly name: "settled_at";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "Value";
                    readonly name: "settled_value";
                    readonly type: "int256";
                }, {
                    readonly internalType: "FlowRate";
                    readonly name: "flow_rate";
                    readonly type: "int128";
                }];
                readonly internalType: "struct BasicParticle";
                readonly name: "wrapped_particle";
                readonly type: "tuple";
            }];
            readonly internalType: "struct PDPoolIndex";
            readonly name: "index";
            readonly type: "tuple";
        }];
        readonly name: "operatorSetIndex";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingUnits";
        readonly outputs: readonly [{
            readonly internalType: "Unit";
            readonly name: "";
            readonly type: "int128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "memberAddr";
            readonly type: "address";
        }, {
            readonly internalType: "int128";
            readonly name: "unit";
            readonly type: "int128";
        }];
        readonly name: "updateMember";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperTokenPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperTokenPool;
}
export {};
//# sourceMappingURL=SuperTokenPool__factory.d.ts.map