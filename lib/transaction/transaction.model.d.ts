import { Network } from "../network/network.model";
export declare type PreparedTransaction = {
    network: Network;
    to: string;
    data: string;
};
