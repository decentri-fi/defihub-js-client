import { Network } from "../network/network.model";
import { Protocol } from "../protocol/protocol.model";
import { FungibleToken } from "../token/fungibletoken.model";
import Big from "big.js";
export declare type FarmingMarket = {
    id: string;
    network: Network;
    protocol: Protocol;
    name: string;
    stakedToken: FungibleToken;
    reward: Array<FungibleToken>;
    contractAddress: string;
    vaultType: string;
    marketSize: Big | null;
    apr: Big | null;
    prepareInvestmentSupported: boolean;
    exitPositionSupported: boolean;
    marketType: string;
};
export declare type FarmingPosition = FarmingMarket & {
    amount: Big;
    nativeAmount: Big;
};
