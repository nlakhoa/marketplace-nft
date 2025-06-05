import client from "@/lib/client";
import {getContract} from "thirdweb";
import {sepolia} from "thirdweb/chains";
import {defineChain} from "thirdweb/chains";

export const rootstockTestnet = defineChain({
    id: 97,
    rpc: "https://solitary-fittest-voice.bsc-testnet.quiknode.pro/92dae432efc0bf103eeb1753a65afdb50e9044a2",
    nativeCurrency: {
        name: "BNB Testnet",
        symbol: "BNB",
        decimals: 18,
    },
});

export const marketplaceContract = getContract({
    client,
    address: "0xd45b9281a9A3632d72733E42765477959ae922BE",
    chain: defineChain(97),
});
