import { Protocol } from "../protocol/protocol.model";
import { Network } from "../network/network.model";
import { FungibleToken } from "../token/fungibletoken.model";
import Big from "big.js";
export declare type LendingMarket = {
    id: string;
    name: string;
    protocol: Protocol;
    network: Network;
    token: FungibleToken;
    rate: number | null;
    poolType: string;
    marketSize: Big;
    prepareInvestmentSupported: Boolean;
    marketType: string;
    enter: Function;
};
export declare type LendingPosition = LendingMarket & {
    amount: Big;
};
