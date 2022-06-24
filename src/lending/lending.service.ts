import axios from "axios";
import {LendingMarket, LendingPosition} from "./lending.model";
import {PoolingMarket} from "../pooling/pooling.model";
import {InvestService} from "../invest/invest.service";

export class LendingService {

    private investService: InvestService;

    constructor(investService: InvestService) {
        this.investService = investService;
    }

    public async markets(protocol: string): Promise<Array<LendingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/lending/all-markets`)
        return response.data.map((market: LendingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async marketsForToken(protocol: string, token: string, network: string): Promise<Array<LendingMarket>> {
        const response = await axios.get(`https://api.defitrack.io/${protocol}/lending/markets?token=${token}&network=${network}`)
        return response.data.map((market: LendingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async positions(protocol: string, user: string): Promise<Array<LendingPosition>>{
        const response = await axios.get(`https://api.defitrack.io/${protocol}/lending/${user}/positions`)
        return response.data.map((market: LendingPosition) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }
}