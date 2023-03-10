import { PoolingMarket, PoolingPosition } from "./pooling.model";
import { InvestService } from "../invest/invest.service";
import { ExitService } from "../exit/exit.service";
export declare class PoolingService {
    private investService;
    private exitService;
    constructor(investService: InvestService, exitService: ExitService);
    markets(protocol: string): Promise<Array<PoolingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<PoolingMarket>>;
    positions(protocol: string, user: string): Promise<Array<PoolingPosition>>;
}
