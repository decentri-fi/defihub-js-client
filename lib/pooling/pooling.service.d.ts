import { PoolingMarket } from "./pooling.model";
import { PoolingPosition } from "./pooling.model";
import { InvestService } from "../invest/invest.service";
export declare class PoolingService {
    private investService;
    constructor(investService: InvestService);
    markets(protocol: string): Promise<Array<PoolingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<PoolingMarket>>;
    positions(protocol: string, user: string): Promise<Array<PoolingPosition>>;
}
