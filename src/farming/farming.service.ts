import axios from "axios";
import {FarmingMarket, FarmingPosition} from "./farming.model";
import {InvestService} from "../invest/invest.service";
import {ExitService} from "../exit/exit.service";
import {DefiHubConfig} from "../defihub.config";

export class FarmingService {

    private investService: InvestService;
    private exitService: ExitService;
    private config: DefiHubConfig;

    constructor(config: DefiHubConfig, investService: InvestService, exitService: ExitService) {
        this.config = config;
        this.investService = investService;
        this.exitService = exitService
    }

    public async markets(protocol: string): Promise<Array<FarmingMarket>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/staking/all-markets`)
        return response.data.map((market: FarmingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async marketsForToken(protocol: string, token: string, network: string): Promise<Array<FarmingMarket>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/farming/markets?token=${token}&network=${network}`)
        return response.data.map((market: FarmingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async positions(protocol: string, user: string): Promise<Array<FarmingPosition>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/farming/${user}/positions`)
        return response.data.map((position: FarmingPosition) => {
            return {
                ...position,
                enter: this.investService.investFunction(position),
                exit: this.exitService.exitPositionFunction(position)
            }
        });
    }
}