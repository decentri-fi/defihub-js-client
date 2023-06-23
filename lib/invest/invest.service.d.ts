import { FarmingMarket, FarmingPosition } from "../farming/farming.model";
import { LendingMarket, LendingPosition } from "../lending/lending.model";
import { PoolingMarket, PoolingPosition } from "../pooling/pooling.model";
import { DefiHubConfig } from "../defihub.config";
export declare class InvestService {
    private readonly config;
    constructor(config: DefiHubConfig);
    investFunction(market: (LendingMarket | FarmingMarket | PoolingMarket | PoolingPosition | LendingPosition | FarmingPosition)): ((user: string, amount?: (BigInteger | null)) => Promise<any>) | null;
}
