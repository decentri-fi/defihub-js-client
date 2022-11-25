import axios from "axios";
import {FarmingMarket, FarmingPosition} from "./farming.model";
import {InvestService} from "../invest/invest.service";

export class FarmingService {

    private investService: InvestService;

    constructor(investService: InvestService) {
        this.investService = investService;
    }

    public async markets(protocol: string): Promise<Array<FarmingMarket>> {
        const response = await axios.get(`https://api.decentri.fi/${protocol}/staking/all-markets`)
        return response.data.map((market: FarmingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async marketsForToken(protocol: string, token: string, network: string): Promise<Array<FarmingMarket>> {
        const response = await axios.get(`https://api.decentri.fi/${protocol}/farming/markets?token=${token}&network=${network}`)
        return response.data.map((market: FarmingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async positions(protocol: string, user: string): Promise<Array<FarmingPosition>> {
        const response = await axios.get(`https://api.decentri.fi/${protocol}/farming/${user}/positions`)
        return response.data.map((market: FarmingPosition) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }
}