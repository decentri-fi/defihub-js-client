import { LendingMarket, LendingPosition } from "../lending/lending.model";
import { FarmingMarket, FarmingPosition } from "../farming/farming.model";
import { PoolingMarket, PoolingPosition } from "../pooling/pooling.model";
export declare class ExitService {
    exitPositionFunction(market: (LendingMarket | FarmingMarket | PoolingMarket | PoolingPosition | LendingPosition | FarmingPosition)): ((user: string, amount: (BigInteger)) => Promise<any>) | null;
}
