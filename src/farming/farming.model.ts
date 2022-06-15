import {Network} from "../network/network.model";
import {Protocol} from "../protocol/protocol.model";
import {FungibleToken} from "../token/fungibletoken.model";
import Big from "big.js";

export type FarmingMarket = {
    id: string,
    network: Network,
    protocol: Protocol,
    name: string,
    stakedToken: FungibleToken,
    reward: Array<FungibleToken>,
    contractAddress: string, //deprecated
    vaultType: string,
    marketSize: Big | null,
    apr: Big | null,
    prepareInvestmentSupported: boolean
}