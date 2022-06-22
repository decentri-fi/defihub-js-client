import { LendingMarket } from "./lending.model";
export declare class LendingService {
    markets(protocol: string): Promise<Array<LendingMarket>>;
    marketsForToken(protocol: string, token: string, network: string): Promise<Array<LendingMarket>>;
}
