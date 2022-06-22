import { PoolingMarket } from "./pooling.model";
import { LendingMarket } from "../lending/lending.model";
export declare class PoolingService {
    markets(protocol: string): Promise<Array<PoolingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<LendingMarket>>;
}
