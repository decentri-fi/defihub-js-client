import { FarmingMarket } from "./farming.model";
import { LendingMarket } from "../lending/lending.model";
export declare class FarmingService {
    markets(protocol: string, network: string): Promise<Array<FarmingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<LendingMarket>>;
}
