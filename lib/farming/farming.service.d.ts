import { FarmingMarket, FarmingPosition } from "./farming.model";
import { InvestService } from "../invest/invest.service";
import { ExitService } from "../exit/exit.service";
export declare class FarmingService {
    private investService;
    private exitService;
    constructor(investService: InvestService, exitService: ExitService);
    markets(protocol: string): Promise<Array<FarmingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<FarmingMarket>>;
    positions(protocol: string, user: string): Promise<Array<FarmingPosition>>;
}
