import axios from "axios";
import {PoolingMarket, PoolingPosition} from "./pooling.model";
import {InvestService} from "../invest/invest.service";
import {ExitService} from "../exit/exit.service";

export class PoolingService {

    private investService: InvestService;
    private exitService: ExitService;

    constructor(investService: InvestService, exitService: ExitService) {
        this.investService = investService;
        this.exitService = exitService;
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
        return response.data.map((position: PoolingPosition) => {
            return {
                ...position,
                enter: this.investService.investFunction(position),
                exit: this.exitService.exitPositionFunction(position),
            }
        });
    }
}