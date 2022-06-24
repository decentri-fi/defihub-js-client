import { FarmingMarket, FarmingPosition } from "../farming/farming.model";
import { LendingMarket, LendingPosition } from "../lending/lending.model";
import { PoolingMarket, PoolingPosition } from "../pooling/pooling.model";
export declare class InvestService {
    investFunction(market: (LendingMarket | FarmingMarket | PoolingMarket | PoolingPosition | LendingPosition | FarmingPosition)): ((user: string, amount?: (BigInteger | null)) => Promise<any>) | null;
}
