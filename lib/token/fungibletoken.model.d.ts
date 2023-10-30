import { Network } from "../network/network.model";
import Big from "big.js";
export type FungibleToken = {
    network: Network;
    logo: string;
    name: string;
    symbol: string;
    address: string;
    decimals: number;
    type: string;
    totalSupply: Big;
    underlyingTokens: Array<FungibleToken>;
    protocol: string | null;
};
