import axios from "axios";
import {LendingMarket} from "./lending.model";

export class LendingService {

    public async markets(protocol: string): Promise<Array<LendingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/lending/all-markets`)
        return response.data
    }
}