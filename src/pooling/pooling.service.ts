import axios from "axios";
import {PoolingMarket, PoolingPosition} from "./pooling.model";
import {InvestService} from "../invest/invest.service";
import {ExitService} from "../exit/exit.service";
import {DefiEvent} from "../events/event.model";
import {DefiHubConfig} from "../defihub.config";

export class PoolingService {

    private investService: InvestService;
    private exitService: ExitService;
    private config: DefiHubConfig;

    constructor(config: DefiHubConfig, investService: InvestService, exitService: ExitService) {
        this.config = config;
        this.investService = investService;
        this.exitService = exitService;
    }

    public async markets(protocol: string): Promise<Array<PoolingMarket>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/pooling/all-markets`)
        return response.data.map((market: PoolingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async marketsForToken(protocol: string, token: string, network: string): Promise<Array<PoolingMarket>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/pooling/markets?token=${token}&network=${network}`)
        return response.data.map((market: PoolingMarket) => {
            return {
                ...market,
                enter: this.investService.investFunction(market)
            }
        });
    }

    public async positions(protocol: string, user: string): Promise<Array<PoolingPosition>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/pooling/${user}/positions`)
        return response.data.map((position: PoolingPosition) => {
            return {
                ...position,
                enter: this.investService.investFunction(position),
                exit: this.exitService.exitPositionFunction(position),
            }
        });
    }

    public async history(protocol: string, user: string): Promise<Array<DefiEvent>> {
        const response = await axios.get(`${this.config.baseUrl}/${protocol}/pooling/${user}/history`)
        if (response.status !== 200) {
            return [];
        } else {
            return response.data;
        }
    }
}