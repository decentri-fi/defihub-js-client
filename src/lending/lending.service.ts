import axios from "axios";
import {LendingMarket} from "./lending.model";

export class LendingService {

    public async markets(protocol: string): Promise<Array<LendingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/lending/all-markets`)
        return response.data
    }

    public async marketsForToken(protocol: string, token: string, network: string): Promise<Array<LendingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/lending/markets?token=${token}&network=${network}`)
        return response.data
    }
}