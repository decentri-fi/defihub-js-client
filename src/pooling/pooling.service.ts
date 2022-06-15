import axios from "axios";
import {PoolingMarket} from "./pooling.model";

export class PoolingService {
    public async markets(protocol: string): Promise<Array<PoolingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/pooling/all-markets`)
        return response.data
    }
}