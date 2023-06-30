import { Network } from "../network/network.model";
export type TransactionPreparation = {
    transaction: Array<PreparedTransaction>;
};
export type PreparedTransaction = {
    network: Network;
    to: string;
    from: string;
    data: string;
};
