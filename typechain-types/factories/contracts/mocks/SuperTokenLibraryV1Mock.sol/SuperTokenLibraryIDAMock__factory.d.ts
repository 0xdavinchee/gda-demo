import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperTokenLibraryIDAMock, SuperTokenLibraryIDAMockInterface } from "../../../../contracts/mocks/SuperTokenLibraryV1Mock.sol/SuperTokenLibraryIDAMock";
type SuperTokenLibraryIDAMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperTokenLibraryIDAMock__factory extends ContractFactory {
    constructor(...args: SuperTokenLibraryIDAMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperTokenLibraryIDAMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperTokenLibraryIDAMock;
    connect(signer: Signer): SuperTokenLibraryIDAMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506123bc806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80635158472c116100b85780639cdf4d671161007c5780639cdf4d6714610302578063c9869ed014610315578063c9b8a2f614610328578063d39363c01461036c578063eadc45511461037f578063fe134e9f1461039257600080fd5b80635158472c146102a35780636436e3d3146102b65780636ddb6798146102c95780637489c503146102dc57806378bb14ea146102ef57600080fd5b80633939709e116100ff5780633939709e146102045780634018cb64146102175780634277b78f146102395780635002bb091461024c57806350c8da8f1461025f57600080fd5b8063068f3d191461013c57806306f75d2e1461015157806316dfe9271461016457806325a108af146101775780632a722c06146101d4575b600080fd5b61014f61014a3660046117ea565b6103a5565b005b61014f61015f366004611871565b6103c3565b61014f6101723660046118e5565b6103df565b61018a610185366004611946565b6103f9565b604080516001600160a01b03909616865263ffffffff9094166020860152911515928401929092526001600160801b039091166060830152608082015260a0015b60405180910390f35b6101e76101e2366004611972565b610425565b604080519283526001600160801b039091166020830152016101cb565b61014f6102123660046119d8565b61044a565b61022a610225366004611a19565b61045f565b6040516101cb93929190611a96565b61014f610247366004611b33565b610483565b61014f61025a366004611b86565b610499565b61027261026d366004611be2565b6104ae565b6040805194151585526001600160801b039384166020860152918316918401919091521660608201526080016101cb565b61014f6102b13660046117ea565b6104d8565b61014f6102c4366004611871565b6104ee565b61014f6102d7366004611be2565b610503565b61014f6102ea366004611c2d565b610517565b61014f6102fd366004611c6e565b61052b565b61014f610310366004611cae565b61053f565b61014f610323366004611b86565b610554565b61033b610336366004611b86565b610569565b6040516101cb9493929190931515845291151560208401526001600160801b03166040830152606082015260800190565b61014f61037a366004611be2565b610595565b61014f61038d366004611cff565b6105a9565b61014f6103a0366004611d2d565b6105c1565b6103bb6001600160a01b038616858585856105d6565b505050505050565b6103d86001600160a01b038516848484610704565b5050505050565b6103f36001600160a01b038416838361082f565b50505050565b6000808080806104126001600160a01b03881687610957565b939b929a50909850965090945092505050565b60008061043d6001600160a01b0387168686866109f3565b9150915094509492505050565b6103d86001600160a01b038516848484610a98565b606080806104766001600160a01b03861685610b23565b9250925092509250925092565b6103bb6001600160a01b03861685858585610bbc565b6103d86001600160a01b038516848484610c49565b60008080806104c76001600160a01b0388168787610d1f565b935093509350935093509350935093565b6103bb6001600160a01b03861685858585610dc5565b6103d86001600160a01b038516848484610e13565b6103f36001600160a01b0384168383610e60565b6103f36001600160a01b0384168383610f34565b6103f36001600160a01b0384168383610fbf565b6103d86001600160a01b03851684848461104a565b6103d86001600160a01b0385168484846110d7565b60008080806105836001600160a01b038916888888611125565b929b919a509850909650945050505050565b6103f36001600160a01b03841683836111d4565b6105bc6001600160a01b03831682611221565b505050565b6103d86001600160a01b038516848484611346565b60008060006105e4886113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663acafa1b88c8c8c8c60006001600160401b0381111561062457610624611727565b6040519080825280601f01601f19166020018201604052801561064e576020820181803683370190505b50604051602401610663959493929190611dd0565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526106ae939250908990600401611e1b565b6000604051808303816000875af11580156106cd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106f59190810190611e5b565b50600198975050505050505050565b6000806000610712876113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b0316636041ae968b8b8b60006001600160401b0381111561075157610751611727565b6040519080825280601f01601f19166020018201604052801561077b576020820181803683370190505b5060405160240161078f9493929190611ed1565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526107da939250908990600401611e1b565b6000604051808303816000875af11580156107f9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108219190810190611e5b565b506001979650505050505050565b600080600061083d866113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663d787840a8a8a60006001600160401b0381111561087b5761087b611727565b6040519080825280601f01601f1916602001820160405280156108a5576020820181803683370190505b506040516024016108b893929190611f09565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610903939250908990600401611e1b565b6000604051808303816000875af1158015610922573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261094a9190810190611e5b565b5060019695505050505050565b60008060008060008061096988611598565b60405163cd7245c560e01b81526001600160a01b038b81166004830152602482018b9052919350908316915063cd7245c59060440160a060405180830381865afa1580156109bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df9190611f4e565b939c929b5090995097509095509350505050565b6000806000610a0187611598565b604051632266eabb60e21b81526001600160a01b038a81166004830152898116602483015263ffffffff8916604483015260648201889052919350908316915063899baaec906084016040805180830381865afa158015610a66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8a9190611fb5565b925092505094509492505050565b6000806000610aa6876113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b0316637fbc76398b8b8b60006001600160401b03811115610ae557610ae5611727565b6040519080825280601f01601f191660200182016040528015610b0f576020820181803683370190505b5060405160240161078f9493929190611fda565b60608060606000610b3386611598565b6040516316db59b760e31b81526001600160a01b0389811660048301528881166024830152919350908316915063b6dacdb890604401600060405180830381865afa158015610b86573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bae919081019061210f565b935093509350509250925092565b6000806000610bca886113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663232d2b588c8c8c8c60006001600160401b03811115610c0a57610c0a611727565b6040519080825280601f01601f191660200182016040528015610c34576020820181803683370190505b506040516024016106639594939291906121ed565b6000806000610c57876113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b0316632e5e74c68b8b8b8b60006001600160401b03811115610c9757610c97611727565b6040519080825280601f01601f191660200182016040528015610cc1576020820181803683370190505b50604051602401610cd6959493929190611dd0565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526107da93925090600401612234565b6000806000806000610d3088611598565b6040516323fc23f360e01b81526001600160a01b038b811660048301528a8116602483015263ffffffff8a16604483015291935090831691506323fc23f390606401608060405180830381865afa158015610d8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db3919061227b565b94509450945094505093509350935093565b6000806000610dd3886113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b0316632e5e74c68c8c8c8c60006001600160401b0381111561062457610624611727565b6000806000610e21876113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663acf4a6c28b8b8b60006001600160401b0381111561075157610751611727565b6000806000610e6e866113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663acf4a6c28a8a8a60006001600160401b03811115610ead57610ead611727565b6040519080825280601f01601f191660200182016040528015610ed7576020820181803683370190505b50604051602401610eeb9493929190611ed1565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b031916825261090393925090600401612234565b6000806000610f42866113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663b96731c28a8a8a60006001600160401b03811115610f8157610f81611727565b6040519080825280601f01601f191660200182016040528015610fab576020820181803683370190505b50604051602401610eeb94939291906122cc565b6000806000610fcd866113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b0316637fbc76398a8a8a60006001600160401b0381111561100c5761100c611727565b6040519080825280601f01601f191660200182016040528015611036576020820181803683370190505b50604051602401610eeb9493929190611fda565b6000806000611058876113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663232d2b588b8b8b8b60006001600160401b0381111561109857611098611727565b6040519080825280601f01601f1916602001820160405280156110c2576020820181803683370190505b50604051602401610cd69594939291906121ed565b60008060006110e5876113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663acafa1b88b8b8b8b60006001600160401b03811115610c9757610c97611727565b600080600080600061113689611598565b604051635b53405160e01b81526001600160a01b038c811660048301528b8116602483015263ffffffff8b16604483015289811660648301529193509083169150635b53405190608401608060405180830381865afa15801561119d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c191906122ff565b929c919b50995090975095505050505050565b60008060006111e2866113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b0316636041ae968a8a8a60006001600160401b03811115610ead57610ead611727565b600080600061122f856113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663d787840a898960006001600160401b0381111561126d5761126d611727565b6040519080825280601f01601f191660200182016040528015611297576020820181803683370190505b506040516024016112aa93929190611f09565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526112f393925090600401612234565b6000604051808303816000875af1158015611312573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261133a9190810190611e5b565b50600195945050505050565b6000806000611354876113d1565b91509150816001600160a01b03166339255d5b82836001600160a01b031663b96731c28b8b8b60006001600160401b0381111561139357611393611727565b6040519080825280601f01601f1916602001820160405280156113bd576020820181803683370190505b5060405160240161078f94939291906122cc565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fa832ee1924ea960211af2df07d65d166232018f613ac6708043cd8f8773eddeb546001600160a01b038116611567576001600160a01b03821661149657826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561146f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611493919061234c565b91505b604051635b69006f60e11b81527f8aedc3b5d4bf031e11a7e2940f7251c005698405d58e02e1c247fed3b1b3a67460048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa1580156114fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151e919061234c565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fa832ee1924ea960211af2df07d65d166232018f613ac6708043cd8f8773eddeb555b6001600160a01b03821661157d5761157d612370565b6001600160a01b03811661159357611593612370565b915091565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fa832ee1924ea960211af2df07d65d166232018f613ac6708043cd8f8773eddeb546001600160a01b038116611567576001600160a01b03821661165d57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa158015611636573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165a919061234c565b91505b604051635b69006f60e11b81527f15609310ae3c30189a1218b7adabaf36c267255e70cf91b6cba384367d9eda3260048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa1580156116c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e5919061234c565b90506001600160a01b03821661157d5761157d612370565b6001600160a01b038116811461171257600080fd5b50565b63ffffffff8116811461171257600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561176557611765611727565b604052919050565b60006001600160401b0382111561178657611786611727565b50601f01601f191660200190565b600082601f8301126117a557600080fd5b81356117b86117b38261176d565b61173d565b8181528460208386010111156117cd57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561180257600080fd5b853561180d816116fd565b9450602086013561181d816116fd565b9350604086013561182d81611715565b9250606086013561183d816116fd565b915060808601356001600160401b0381111561185857600080fd5b61186488828901611794565b9150509295509295909350565b6000806000806080858703121561188757600080fd5b8435611892816116fd565b935060208501356118a2816116fd565b925060408501356118b281611715565b915060608501356001600160401b038111156118cd57600080fd5b6118d987828801611794565b91505092959194509250565b6000806000606084860312156118fa57600080fd5b8335611905816116fd565b9250602084013561191581611715565b915060408401356001600160401b0381111561193057600080fd5b61193c86828701611794565b9150509250925092565b6000806040838503121561195957600080fd5b8235611964816116fd565b946020939093013593505050565b6000806000806080858703121561198857600080fd5b8435611993816116fd565b935060208501356119a3816116fd565b925060408501356119b381611715565b9396929550929360600135925050565b6001600160801b038116811461171257600080fd5b600080600080608085870312156119ee57600080fd5b84356119f9816116fd565b93506020850135611a0981611715565b925060408501356118b2816119c3565b60008060408385031215611a2c57600080fd5b8235611a37816116fd565b91506020830135611a47816116fd565b809150509250929050565b600081518084526020808501945080840160005b83811015611a8b5781516001600160801b031687529582019590820190600101611a66565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b82811015611ad85781516001600160a01b031684529284019290840190600101611ab3565b5050508381038285015285518082528683019183019060005b81811015611b1357835163ffffffff1683529284019291840191600101611af1565b50508481036040860152611b278187611a52565b98975050505050505050565b600080600080600060a08688031215611b4b57600080fd5b8535611b56816116fd565b94506020860135611b6681611715565b93506040860135611b76816116fd565b9250606086013561183d816119c3565b60008060008060808587031215611b9c57600080fd5b8435611ba7816116fd565b93506020850135611bb7816116fd565b92506040850135611bc781611715565b91506060850135611bd7816116fd565b939692955090935050565b600080600060608486031215611bf757600080fd5b8335611c02816116fd565b92506020840135611c12816116fd565b91506040840135611c2281611715565b809150509250925092565b600080600060608486031215611c4257600080fd5b8335611c4d816116fd565b92506020840135611c5d81611715565b929592945050506040919091013590565b600080600060608486031215611c8357600080fd5b8335611c8e816116fd565b92506020840135611c9e81611715565b91506040840135611c22816119c3565b60008060008060808587031215611cc457600080fd5b8435611ccf816116fd565b93506020850135611cdf81611715565b92506040850135611cef816116fd565b91506060850135611bd7816119c3565b60008060408385031215611d1257600080fd5b8235611d1d816116fd565b91506020830135611a4781611715565b60008060008060808587031215611d4357600080fd5b8435611d4e816116fd565b93506020850135611d5e81611715565b92506040850135915060608501356001600160401b038111156118cd57600080fd5b60005b83811015611d9b578181015183820152602001611d83565b50506000910152565b60008151808452611dbc816020860160208601611d80565b601f01601f19169290920160200192915050565b6001600160a01b038681168252858116602083015263ffffffff851660408301528316606082015260a060808201819052600090611e1090830184611da4565b979650505050505050565b6001600160a01b0384168152606060208201819052600090611e3f90830185611da4565b8281036040840152611e518185611da4565b9695505050505050565b600060208284031215611e6d57600080fd5b81516001600160401b03811115611e8357600080fd5b8201601f81018413611e9457600080fd5b8051611ea26117b38261176d565b818152856020838501011115611eb757600080fd5b611ec8826020830160208601611d80565b95945050505050565b6001600160a01b0385811682528416602082015263ffffffff83166040820152608060608201819052600090611e5190830184611da4565b6001600160a01b038416815263ffffffff83166020820152606060408201819052600090611ec890830184611da4565b80518015158114611f4957600080fd5b919050565b600080600080600060a08688031215611f6657600080fd5b8551611f71816116fd565b6020870151909550611f8281611715565b9350611f9060408701611f39565b92506060860151611fa0816119c3565b80925050608086015190509295509295909350565b60008060408385031215611fc857600080fd5b825191506020830151611a47816119c3565b6001600160a01b038516815263ffffffff841660208201526001600160801b0383166040820152608060608201819052600090611e5190830184611da4565b60006001600160401b0382111561203257612032611727565b5060051b60200190565b600082601f83011261204d57600080fd5b8151602061205d6117b383612019565b82815260059290921b8401810191818101908684111561207c57600080fd5b8286015b848110156120a057805161209381611715565b8352918301918301612080565b509695505050505050565b600082601f8301126120bc57600080fd5b815160206120cc6117b383612019565b82815260059290921b840181019181810190868411156120eb57600080fd5b8286015b848110156120a0578051612102816119c3565b83529183019183016120ef565b60008060006060848603121561212457600080fd5b83516001600160401b038082111561213b57600080fd5b818601915086601f83011261214f57600080fd5b8151602061215f6117b383612019565b82815260059290921b8401810191818101908a84111561217e57600080fd5b948201945b838610156121a5578551612196816116fd565b82529482019490820190612183565b918901519197509093505050808211156121be57600080fd5b6121ca8783880161203c565b935060408601519150808211156121e057600080fd5b5061193c868287016120ab565b6001600160a01b03868116825263ffffffff86166020830152841660408201526001600160801b038316606082015260a060808201819052600090611e1090830184611da4565b6001600160a01b038316815260606020820181905260009061225890830184611da4565b8281036040938401526002815261060f60f31b6020820152919091019392505050565b6000806000806080858703121561229157600080fd5b61229a85611f39565b935060208501516122aa816119c3565b60408601519093506122bb816119c3565b6060860151909250611bd7816119c3565b60018060a01b038516815263ffffffff84166020820152826040820152608060608201526000611e516080830184611da4565b6000806000806080858703121561231557600080fd5b61231e85611f39565b935061232c60208601611f39565b9250604085015161233c816119c3565b6060959095015193969295505050565b60006020828403121561235e57600080fd5b8151612369816116fd565b9392505050565b634e487b7160e01b600052600160045260246000fdfea2646970667358221220242ab5d49d12adc825cde6cf4de94eb7d091fab1ffeda9b6dcdeab1a9f3ed5eb64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "approveSubscriptionTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "approveSubscriptionWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "calculateDistributionTest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actualAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "newIndexValue";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "claimTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "claimWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "createIndexTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "createIndexWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "deleteSubscriptionTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "deleteSubscriptionWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "distributeTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "distributeWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "getIndexTest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "exist";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "totalUnitsApproved";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "totalUnitsPending";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubscriptionByIDTest";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "pendingDistribution";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "getSubscriptionTest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "exist";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "pendingDistribution";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "listSubscriptionsTest";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "publishers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "indexIds";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "uint128[]";
            readonly name: "unitsList";
            readonly type: "uint128[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "revokeSubscriptionTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "revokeSubscriptionWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }];
        readonly name: "updateIndexValueTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "updateIndexValueWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }];
        readonly name: "updateSubscriptionUnitsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "updateSubscriptionUnitsWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperTokenLibraryIDAMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperTokenLibraryIDAMock;
}
export {};
//# sourceMappingURL=SuperTokenLibraryIDAMock__factory.d.ts.map