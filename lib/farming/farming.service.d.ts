import { FarmingMarket, FarmingPosition } from "./farming.model";
import { InvestService } from "../invest/invest.service";
import { ExitService } from "../exit/exit.service";
import { DefiHubConfig } from "../defihub.config";
export declare class FarmingService {
    private investService;
    private exitService;
    private config;
    constructor(config: DefiHubConfig, investService: InvestService, exitService: ExitService);
    markets(protocol: string): Promise<Array<FarmingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<FarmingMarket>>;
    positions(protocol: string, user: string): Promise<Array<FarmingPosition>>;
}
