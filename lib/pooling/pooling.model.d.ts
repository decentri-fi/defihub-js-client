import { Protocol } from "../protocol/protocol.model";
import { Network } from "../network/network.model";
import { FungibleToken } from "../token/fungibletoken.model";
import Big from "big.js";
export type PoolingMarket = {
    id: string;
    address: string;
    name: string;
    protocol: Protocol;
    network: Network;
    tokens: Array<FungibleToken>;
    apr: Big | null;
    marketSize: Big | null;
    prepareInvestmentSupported: boolean;
    exitPositionSupported: boolean;
    marketType: string;
    decimals: number;
    erc20Compatible: boolean;
    price: Big;
    totalSupply: Big;
    metadata: Map<String, Object>;
    updatedAt: number;
};
export type PoolingPosition = PoolingMarket & {
    amountDecimal: Big;
    amount: Big;
};
