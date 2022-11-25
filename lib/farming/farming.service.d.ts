import { FarmingMarket, FarmingPosition } from "./farming.model";
import { InvestService } from "../invest/invest.service";
export declare class FarmingService {
    private investService;
    constructor(investService: InvestService);
    markets(protocol: string): Promise<Array<FarmingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<FarmingMarket>>;
    positions(protocol: string, user: string): Promise<Array<FarmingPosition>>;
}
