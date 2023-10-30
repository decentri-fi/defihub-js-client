import axios from "axios";
import {LendingMarket, LendingPosition} from "./lending.model";
import {InvestService} from "../invest/invest.service";
import {ExitService} from "../exit/exit.service";
import {DefiHubConfig} from "../defihub.config";

export class LendingService {

    private investService: InvestService;
    private exitService: ExitService;
    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig, investService: InvestService, exitService: ExitService) {
        this.config = config;
        this.investService = investService;
        this.exitService = exitService;
    }

    public async markets(protocol: string): Promise<Array<LendingMarket>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/lending/all-markets`)
        return response.data.map((market: LendingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async marketsForToken(protocol: string, token: string, network: string): Promise<Array<LendingMarket>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/lending/markets?token=${token}&network=${network}`)
        return response.data.map((market: LendingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async positions(protocol: string, user: string): Promise<Array<LendingPosition>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/lending/${user}/positions`)
        return response.data.map((position: LendingPosition) => {
            return {
                ...position,
                enter: this.investService.investFunction(position),
                exit: this.exitService.exitPositionFunction(position)
            }
        });
    }
}