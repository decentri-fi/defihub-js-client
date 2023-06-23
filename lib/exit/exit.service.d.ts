import { LendingMarket, LendingPosition } from "../lending/lending.model";
import { FarmingMarket, FarmingPosition } from "../farming/farming.model";
import { PoolingMarket, PoolingPosition } from "../pooling/pooling.model";
import { DefiHubConfig } from "../defihub.config";
export declare class ExitService {
    private readonly config;
    constructor(config: DefiHubConfig);
    exitPositionFunction(market: (LendingMarket | FarmingMarket | PoolingMarket | PoolingPosition | LendingPosition | FarmingPosition)): ((user: string, amount: (BigInteger)) => Promise<any>) | null;
}
