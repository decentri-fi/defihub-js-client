import { Protocol } from "../protocol/protocol.model";
import { Network } from "../network/network.model";
import { FungibleToken } from "../token/fungibletoken.model";
import Big from "big.js";
export type LendingMarket = {
    id: string;
    name: string;
    protocol: Protocol;
    network: Network;
    token: FungibleToken;
    rate: number | null;
    poolType: string;
    marketSize: Big;
    prepareInvestmentSupported: boolean;
    exitPositionSupported: boolean;
    marketType: string;
    enter: Function;
};
export type LendingPosition = LendingMarket & {
    amount: Big;
};
