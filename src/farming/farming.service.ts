import axios from "axios";
import {FarmingMarket} from "./farming.model";
import {LendingMarket} from "../lending/lending.model";

export class FarmingService {

    public async markets(protocol: string, network: string): Promise<Array<FarmingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/staking/all-markets?network=${network}`)
        return response.data
    }

    public async marketsForToken(protocol: string, token: string, network: string): Promise<Array<LendingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/staking/markets?token=${token}&network=${network}`)
        return response.data
    }
}