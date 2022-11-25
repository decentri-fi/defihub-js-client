import axios from "axios";
import {PoolingMarket} from "./pooling.model";
import {PoolingPosition} from "./pooling.model";
import {InvestService} from "../invest/invest.service";

export class PoolingService {

    private investService: InvestService;

    constructor(investService: InvestService) {
        this.investService = investService;
    }

    public async markets(protocol: string): Promise<Array<PoolingMarket>> {
        const response = await axios.get(`https://api.decentri.fi/${protocol}/pooling/all-markets`)
        return response.data.map((market: PoolingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async marketsForToken(protocol: string, token: string, network: string): Promise<Array<PoolingMarket>> {
        const response = await axios.get(`https://api.decentri.fi/${protocol}/pooling/markets?token=${token}&network=${network}`)
        return response.data.map((market: PoolingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async positions(protocol: string, user: string): Promise<Array<PoolingPosition>> {
        const response = await axios.get(`https://api.decentri.fi/${protocol}/pooling/${user}/positions`)
        return response.data.map((market: PoolingPosition) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }
}