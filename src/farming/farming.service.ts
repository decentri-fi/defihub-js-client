import axios from "axios";
import {FarmingMarket} from "./farming.model";

export class FarmingService {

    public async markets(protocol: string, network: string): Promise<Array<FarmingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/staking/all-markets?network=${network}`)
        return response.data
    }
}