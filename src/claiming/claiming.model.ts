import {Protocol} from "../protocol/protocol.model";
import {Network} from "../network/network.model";
import Big from "big.js";
import {FungibleToken} from "../token/fungibletoken.model";
import {PreparedTransaction} from "../transaction/transaction.model";

export type Claimable = {
    id: string,
    name: string,
    type: string,
    protocol: Protocol,
    network: Network,
    dollarValue: Big,
    amount: Big,
    token: FungibleToken,
    claimTransaction: PreparedTransaction
}

export type ClaimableConfig = {
    include?: Array<string> | undefined,
    exclude?: Array<string> | undefined
}