import {Network} from "../network/network.model";

export type PreparedTransaction = {
    network: Network,
    to: string,
    data: string
}