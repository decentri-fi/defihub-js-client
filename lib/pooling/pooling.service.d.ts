import { PoolingMarket, PoolingPosition } from "./pooling.model";
import { InvestService } from "../invest/invest.service";
import { ExitService } from "../exit/exit.service";
import { DefiEvent } from "../events/event.model";
import { DefiHubConfig } from "../defihub.config";
export declare class PoolingService {
    private investService;
    private exitService;
    private config;
    constructor(config: DefiHubConfig, investService: InvestService, exitService: ExitService);
    markets(protocol: string): Promise<Array<PoolingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<PoolingMarket>>;
    positions(protocol: string, user: string): Promise<Array<PoolingPosition>>;
    history(protocol: string, user: string): Promise<Array<DefiEvent>>;
}
