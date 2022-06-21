import axios from "axios";
import {PoolingMarket} from "./pooling.model";
import {LendingMarket} from "../lending/lending.model";

export class PoolingService {
    public async markets(protocol: string): Promise<Array<PoolingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/pooling/all-markets`)
        return response.data
    }

    public async marketsForToken(protocol: string, token: string, network: string): Promise<Array<LendingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/pooling/markets?token=${token}&network=${network}`)
        return response.data
    }
}