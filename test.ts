import type {Abi} from "abitype";


export type ContractOptions<
    abi extends Abi = [],
    address extends string = string,
> = {
    client: ThirdwebClient;
    address: address;
    chain: Chain;
    readonly abi?: abi;
};

/**
 * @contract
 */
export type ThirdwebContract<
    abi extends Abi = [],
    address extends string = `0x${string}`,
> = Readonly<ContractOptions<abi, address>>;
