import { LendingMarket, LendingPosition } from "./lending.model";
import { InvestService } from "../invest/invest.service";
import { ExitService } from "../exit/exit.service";
export declare class LendingService {
    private investService;
    private exitService;
    constructor(investService: InvestService, exitService: ExitService);
    markets(protocol: string): Promise<Array<LendingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<LendingMarket>>;
    positions(protocol: string, user: string): Promise<Array<LendingPosition>>;
}
