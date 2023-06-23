import axios from "axios";
import {DefiHubConfig} from "../defihub.config";

export class PriceService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async calculate(address: string, network: string, amount: number) {
        const result = await axios.post(`https://api.decentri.fi/price`, {
            address: address,
            network: network,
            amount: amount
        })
        return result.data;
    }
}